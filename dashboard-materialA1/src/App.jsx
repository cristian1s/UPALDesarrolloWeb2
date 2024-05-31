// import { useEffect, useState } from 'react';
// import { db,doc, collection,onSnapshot, getDocs,getDoc } from "./config/firebase"

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const productsCollection = collection(db, 'products');
  //     const productsSnapshot = await getDocs(productsCollection);
  //     const productsList = productsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //     setData(productsList);
  //   };
  //   console.log(data);
  //   return () => fetchProducts();
  // },  []);

  // useEffect(() => {
  //   const productsCollection = collection(db, 'products');
  //   // const unsubscribe = onSnapshot(productsCollection, (snapshot) => {
  //   //   const productsList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //   //   setData(productsList);
  //   // }, (error) => {
  //   //   console.error("Error fetching products: ", error);
  //   // });
  //   // console.log(data);
  //   // return () => unsubscribe();
  // }, []);

  return (
    <div className="p-4">
      <div className="dashboard flex flex-col w-full h-full">
        <div>DASHBOARD</div>
        <div className="flex flex-row w-full h-full gap-4 ">
          <div className="flex flex-col gap-4 w-[70%] h-full">
            <div className="flex flex-row gap-x-4">
              <div className="bg-slate-200 rounded-lg p-2">
              </div>
              <div className="bg-slate-200 rounded-lg p-2">
              </div>
            </div>
            <div className="bg-slate-200 rounded-lg p-2">
            </div>
          </div>
          <div className="flex w-[30%] bg-slate-200 rounded-lg p-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, ab
            obcaecati! Provident magni exercitationem nisi nulla neque minima
            error voluptate quod, laboriosam ratione alias aliquid doloremque
            cumque et quibusdam id.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
