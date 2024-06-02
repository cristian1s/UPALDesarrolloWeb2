import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import {
  db,
  doc,
  collection,
  onSnapshot,
  getDocs,
  getDoc,
  storage,
  query,
  where,
} from "./config/firebase";
import BarChart from "./components/Charts/BarChart";
import PieChart from "./components/Charts/PieChart";
import LineChart from "./components/Charts/LineChart";
import { FaChartPie } from "react-icons/fa";
import { get, set } from "firebase/database";
import CreditCard from "./components/CreditCard";

function App() {
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);
  const [barchart, setBarChart] = useState([]);
  const [piechart, setPieChart] = useState([]);
  const [linechart, setLineChart] = useState([]);

  const getImageUrl = async (imageName) => {
    const imageRef = ref(storage, `products/${imageName}`);
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
  };
  const fetchProducts = async () => {
    const productsCollection = collection(db, "products");
    const productsSnapshot = await getDocs(productsCollection);
    const productsList = productsSnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    const productsWithImages = await Promise.all(
      productsList.map(async (product) => {
        const imageUrl = await getImageUrl(product.imageUrl);
        return { ...product, imageUrl };
      })
    );
    setProducts(productsWithImages);

    //agrupar los productos por categoria
    const productsByCategory = productsWithImages.reduce((acc, product) => {
      if (acc[product.category]) {
        // acc[product.category].push(product);
        acc[product.category] += 1;
      } else {
        // acc[product.category] = [product];
        acc[product.category] = 1;
      }
      return acc;
    }, {});
    setPieChart(productsByCategory);
  };
  const fetchSales = async () => {
    const salesCollection = collection(db, "sales");
    const salesSnapshot = await getDocs(salesCollection);
    const salesList = salesSnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setSales(salesList);
    //productos mas vendidos
    const productsSold = salesList.reduce((acc, sale) => {
      if (acc[sale.productId]) {
        acc[sale.productId] += sale.quantity;
      } else {
        acc[sale.productId] = sale.quantity;
      }
      return acc;
    }, {});
    //ordernar los productos mas vendidos y tomar los 5 primeros
    const productsSoldArray = Object.entries(productsSold).sort(
      (a, b) => b[1] - a[1]
    );
    const top5Products = productsSoldArray.slice(0, 5);
    setBarChart(top5Products);
  };
  useEffect(() => {
    const year = 2024;
    getSalesByMonthOfYear(year).then((salesByMonthOfYear) => {
      const totalSalesByMonth = Object.keys(salesByMonthOfYear).map((month) => {
        const totalSales = salesByMonthOfYear[month].reduce((acc, sale) => {
          return acc + sale.totalPrice;
        }, 0);
        return {
          month: month,
          total: totalSales.toFixed(2),
        };
      });

      console.log(totalSalesByMonth);
      setLineChart(totalSalesByMonth);
    });

    return () => {
      fetchProducts();
      fetchSales();
    };
  }, []);
  const renderPieChart = {
    // labels: piechart.map((data) => data.nombre),
    labels: Object.keys(piechart).map((key) => key),
    datasets: [
      {
        label: "Cantidad de productos",
        data: Object.keys(piechart).map((key) => piechart[key]),
        backgroundColor: [
          "#7FDC8F",
          "#639BCF",
          "#A17DDA",
          // "#FFA027",
          // "#FEC745",
        ],
        borderColor: [
          "#75B266",
          "#719AD2",
          "#D7B1E0",
          // "#FFA027",
          // "#FEC745"
        ],
        borderWidth: 1,
      },
    ],
  };

  const renderBarChart = {
    // labels: barchart.map((data) => data.nombre),
    labels: barchart.map((data) => data[0]),
    datasets: [
      {
        label: "Top 5 Productos con mayor venta",
        // data: barchart.map((data) => data.total),
        data: barchart.map((data) => data[1]),
        backgroundColor: ["#22555A"],
        borderColor: ["#000000"],
        borderWidth: 1,
      },
    ],
  };

  const renderLineChart = {
    labels: linechart.map((data) => data.month),
    datasets: [
      {
        label: "Ventas en todo el año 2024",
        data: linechart.map((data) => data.total),
        backgroundColor: ["#000000"],
        borderColor: ["#000000"],
        fill: false,
        tension: 0.1,
      },
    ],
  };
  // setProducts(productsWithImages);
  // products.forEach(async (product) => {
  //   const imageUrl = await getImageUrl(product.imageUrl);
  //   product.imageUrl = imageUrl;
  // });
  // es mas eficiente usar onSnapshot para escuchar cambios en tiempo real y mas rapido
  // useEffect(() => {
  //   const productsCollection = collection(db, 'products');
  //   const unsubscribe = onSnapshot(productsCollection, (snapshot) => {
  //     const productsList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //     setProducts(productsList);
  //   }, (error) => {
  //     console.error("Error fetching products: ", error);
  //   });
  //   return () => unsubscribe();
  // }, []);
  // getImageUrl('Galaxy S21 Ultra.jpg').then(url => {
  //   console.log('File available at', url);
  // });
  const getSalesByMonthOfYear = async (year) => {
    // const salesCollection = collection(db, 'sales');

    // // Calcula las fechas de inicio y fin del mes
    // const startDate = new Date(year, month - 1, 1); // El mes se indexa desde 0 (enero=0, febrero=1, ...)
    // const endDate = new Date(year, month, 0, 23, 59, 59, 999); // Último día y última hora del mes

    // // Crea la consulta para obtener las ventas dentro del rango de fechas
    // const q = query(salesCollection,
    //   where('saleDate', '>=', startDate),
    //   where('saleDate', '<=', endDate)
    // );

    // const querySnapshot = await getDocs(q);
    // const salesByMonth = [];

    // querySnapshot.forEach((doc) => {
    //   const data = doc.data();
    //   salesByMonth.push({
    //     id: doc.id,
    //     ...data,
    //   });
    // });

    // return salesByMonth;

    const salesByMonthOfYear = {};
    const namesMonths = [
      "",
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    // Iterar sobre cada mes del año
    for (let month = 1; month <= 12; month++) {
      const salesCollection = collection(db, "sales");

      // Calcula las fechas de inicio y fin del mes
      const startDate = new Date(year, month - 1, 1); // El mes se indexa desde 0 (enero=0, febrero=1, ...)
      const endDate = new Date(year, month, 0, 23, 59, 59, 999); // Último día y última hora del mes

      // Crea la consulta para obtener las ventas dentro del rango de fechas
      const q = query(
        salesCollection,
        where("saleDate", ">=", startDate),
        where("saleDate", "<=", endDate)
      );

      const querySnapshot = await getDocs(q);
      const sales = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        sales.push({
          id: doc.id,
          ...data,
        });
      });

      salesByMonthOfYear[namesMonths[month]] = sales;
    }

    return salesByMonthOfYear;
  };

  // Ejemplo de uso para obtener las ventas de junio de 2024
  // const year = 2024;
  // const month = 6; // junio
  // getSalesByMonth(year, month).then((sales) => {
  //   console.log('Ventas de junio de 2024:', sales);
  // });
  // const year = 2024;
  // getSalesByMonthOfYear(year).then((salesByMonthOfYear) => {
  //   console.log('Ventas del año 2024 divididas por meses:', salesByMonthOfYear);
  // });

  return (
    <div className="p-4">
      <div className="dashboard flex flex-col gap-y-4 w-full">
        <div className="flex flex-row items-center gap-x-3">
          <span>
            <FaChartPie className="text-2xl" />
          </span>
          <h1 className="text-2xl">Dashboard</h1>
        </div>
        <div className=" relative flex flex-row w-full h-auto gap-4 ">
          <div className="flex flex-col gap-4 w-[70%]">
            <div className="flex flex-row gap-x-3 bg-slate-200 rounded-xl p-4">
              <div className=" w-[60%] h-60">
                <div className="bg-white rounded-lg p-2 h-full">
                  <BarChart chartData={renderBarChart}></BarChart>
                </div>
              </div>
              <div className=" w-[40%] h-60">
                <div className="bg-white rounded-lg p-2 h-full">
                  <PieChart
                    chartData={renderPieChart}
                    title={"Cantidad de productos por categoria"}
                  ></PieChart>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 rounded-lg p-4 h-60">
              <div className="bg-white rounded-lg p-2 h-full">
                <LineChart chartData={renderLineChart}></LineChart>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[30%] bg-slate-200 rounded-xl px-4 py-3">
            <div className="px-4 py-2 mb-2">
              <CreditCard />
            </div>
            <div className="px-2">
              <h2 className="font-bold mb-2">
                Top 5 Productos con menos stock
              </h2>
              <ul>
                {products
                  .filter((product) => product.stock <= 3)
                  .map((product) => {
                    // let urlImage = getImageUrl(product.imageUrl).then((url) => { return url; });
                    // console.log(urlImage);
                    return (
                      <li
                        key={product.id}
                        className="flex flex-row w-full items-center mb-2"
                      >
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-[40px] h-[37px] mr-4"
                        />
                        <span className="flex flex-col text-sm">
                          <span className="font-light ">{product.name}</span>
                          <span className="font-semibold">
                            Stock: {product.stock}
                          </span>
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
