// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  getDoc,
  query,
  where
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZVaHUbgocOYQcVAM7mmcMPByKQQQrSrw",
  authDomain: "hallowed-kiln-327415.firebaseapp.com",
  projectId: "hallowed-kiln-327415",
  storageBucket: "hallowed-kiln-327415.appspot.com",
  messagingSenderId: "982477388269",
  appId: "1:982477388269:web:8237ad8b0dfd65636c0fe4",
  measurementId: "G-V8ZGNWMVZW",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);
// const products = [
//   {
//     category: "Laptops",
//     description: "Apple MacBook Air 13-inch with M1 chip",
//     imageUrl: "https://example.com/macbook-air.jpg",
//     name: "MacBook Air",
//     price: 999.99,
//     stock: 15
//   },
//   {
//     category: "Smartphones",
//     description: "Apple iPhone 13 Pro Max",
//     imageUrl: "https://example.com/iphone-13-pro-max.jpg",
//     name: "iPhone 13 Pro Max",
//     price: 1099.99,
//     stock: 25
//   },
//   {
//     category: "Laptops",
//     description: "Dell XPS 13 with 11th Gen Intel i7",
//     imageUrl: "https://example.com/dell-xps-13.jpg",
//     name: "Dell XPS 13",
//     price: 1199.99,
//     stock: 20
//   },
//   {
//     category: "Smartphones",
//     description: "Samsung Galaxy S21 Ultra",
//     imageUrl: "https://example.com/galaxy-s21-ultra.jpg",
//     name: "Galaxy S21 Ultra",
//     price: 999.99,
//     stock: 30
//   },
//   {
//     category: "Laptops",
//     description: "HP Spectre x360 13-inch with Intel i7",
//     imageUrl: "https://example.com/hp-spectre-x360.jpg",
//     name: "HP Spectre x360",
//     price: 1099.99,
//     stock: 25
//   },
//   {
//     category: "Smartphones",
//     description: "Google Pixel 6 Pro",
//     imageUrl: "https://example.com/pixel-6-pro.jpg",
//     name: "Pixel 6 Pro",
//     price: 899.99,
//     stock: 12
//   }
// ];
// const products = [
//   {
//     category: "Audio",
//     description: "AirPods Max",
//     imageUrl: "AirPods Max.jpg",
//     name: "AirPods Max",
//     price: 549.99,
//     stock: 10
//   },
// ];
// const salesData = [
//   {
//     productId: "Samsung Galaxy S21",
//     quantity: 1,
//     saleDate: "2024-05-29T16:11:45-05:00",
//     totalPrice: 799.99,
//   },
//   {
//     productId: "Apple MacBook Pro",
//     quantity: 2,
//     saleDate: "2024-06-15T10:30:00-05:00",
//     totalPrice: 2499.99,
//   },
//   {
//     productId: "Google Pixel 6",
//     quantity: 3,
//     saleDate: "2024-07-05T14:45:00-05:00",
//     totalPrice: 1799.99,
//   },
//   {
//     productId: "Dell XPS 15",
//     quantity: 1,
//     saleDate: "2024-08-20T12:00:00-05:00",
//     totalPrice: 1799.99,
//   },
//   {
//     productId: "Apple iPhone 13",
//     quantity: 2,
//     saleDate: "2024-09-10T09:00:00-05:00",
//     totalPrice: 2099.99,
//   },
//   {
//     productId: "HP Spectre x360",
//     quantity: 1,
//     saleDate: "2024-10-02T17:30:00-05:00",
//     totalPrice: 1499.99,
//   },
//   {
//     productId: "Sony PlayStation 5",
//     quantity: 2,
//     saleDate: "2024-11-15T20:00:00-05:00",
//     totalPrice: 799.99,
//   },
//   {
//     productId: "Nintendo Switch",
//     quantity: 3,
//     saleDate: "2024-12-28T11:45:00-05:00",
//     totalPrice: 899.99,
//   },
// ];

// const addProductsToFirestore = async () => {
//   const productsCollection = collection(db, 'sales');

//   salesData.forEach(async (product) => {
//     await addDoc(productsCollection, product);
//   });
// };

// addProductsToFirestore()
//   .then(() => console.log("salesData added successfully"))
//   .catch((error) => console.error("Error adding salesData: ", error));
export {
  db,
  auth,
  doc,
  collection,
  getDoc,
  getDocs,
  addDoc,
  onSnapshot,
  storage,
  query,
  where
};
