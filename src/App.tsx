import { HashRouter, Routes, Route } from "react-router-dom";
import Homework08 from "./homeworks/homework08/Homework08";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson10 from "./lessons/lesson10/Lesson10";
import Layout from "./layout/Layout";
import Lesson05 from "./lessons/lesson05/Lesson05";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/homePage/HomePage";
import FetchFox from "./components/fetchFox/Fetchfox";
import Lesson01 from "./lessons/lesson01/Lesson01";
import Lesson02 from "./lessons/lesson02/Lesson02";
import Lesson03 from "./lessons/lesson03/Lesson03";
import Lesson04 from "./lessons/lesson04/Lesson04";
import Homework05 from "./homeworks/homework05/Homework05";
import styles from "./App.module.css";
import Lesson11 from "./lessons/lesson11/Lesson11";
import Lesson12 from "./lessons/lesson12/Lesson12";
import FormGender from "./homeworks/homework12/FormGender";
import Lesson13 from "./lessons/lesson13/Lesson13";
import Homework13 from "./homeworks/homework13/Homework13";
import Homework13Form2 from "./homeworks/homework13/Homework13Form2";
import FormHW from "./homeworks/homework13/FormHW";
import Lesson14 from "./lessons/lesson14/Lesson14";
import ProductPage from "./components/productPage/ProductPage";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Products from "./components/products/Products";

function App() {
  return (
    <div className={styles.root}>
      <CartProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="fetch-fox" element={<FetchFox />} />
            <Route path="registerForm" element={<Homework13 />} />
            <Route path="formGender" element={<FormGender />} />
            <Route path="loginForm" element={<Homework13Form2 />} />
            <Route path="switchForm" element={<FormHW />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="Products" element={<Products />} />
            <Route path="Products/:id" element={<ProductPage />} />

            <Route path="lesson01" element={<Lesson01 />} />
            <Route path="lesson02" element={<Lesson02 />} />
            <Route path="lesson03" element={<Lesson03 />} />
            <Route path="lesson04" element={<Lesson04 />} />
            <Route path="lesson05" element={<Homework05 />} />
            <Route path="lesson06" element={<FetchFox />} />
            <Route path="lesson07" element={<ErrorPage />} />
            <Route path="lesson08" element={<Lesson08 />} />
            <Route path="lesson09" element={<Lesson09 />} />
            <Route path="lesson10" element={<Lesson10 />} />
            <Route path="lesson11" element={<Lesson11 />} />
            <Route path="lesson12" element={<Lesson12 />} />
            <Route path="lesson13" element={<Lesson13 />} />
            <Route path="lesson14" element={<Lesson14 />} />
            <Route path="lesson14/:id" element={<ProductPage />} />

            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </HashRouter>
      </CartProvider>
    </div>
  );
}

export default App;
