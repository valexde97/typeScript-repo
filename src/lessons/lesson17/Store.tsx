// import styles from './store.module.css'

import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { string } from "yup";
import * as Yup from "yup";
import MyButton from "../../components/MyButton/MyButton";
import Loader from "../../components/loader/Loader";
import StoreCard from "./StoreCard";
import { Link } from "react-router-dom";
import styles from "./store.module.css";

interface IProduct {
  id: number;
  title: string;
  description: string;
  // category: string,
  price: number;
  stock: number;
  thumbnail: string;
}

// * типизация данных с сервера
export default function Store(): JSX.Element {
  // * переменная состояния для хранения полученной с сервера ссылки на картинку
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const schema = Yup.object().shape({
    quantity: Yup.number()
      .typeError("-Please enter a number- ")
      .min(1, "-Minimum value is 1- ")
      .max(20, "-Maximum value is 20- ")
      .required("-Quantity is required- "),
  });

  const formik = useFormik({
    initialValues: { quantity: 5 },
    validateOnChange: false,
    validationSchema: schema,
    onSubmit: (values) => {
      fetchStore(values.quantity);
    },
  });

  // * асинхронная функция для получения данных с сервера
  const fetchStore = async (limit: number): Promise<void> => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchStore(formik.values.quantity);
  }, []);

  return (
    <div className={styles.storeContainer}>
      <h2>Store</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          type="number"
          name="quantity"
          value={formik.values.quantity}
          onChange={formik.handleChange}
          placeholder="Enter quantity"
        />
        <MyButton type="submit" text="Load Products" />
      </form>
      {formik.errors.quantity && (
        <span className={styles.error}>{formik.errors.quantity}</span>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <StoreCard key={product.id} product={product}>
            </StoreCard>
          ))}
        </div>
      )}
    </div>
  );
}
