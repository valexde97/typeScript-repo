import styles from "./products.module.css"
import MyButton from "../../components/MyButton/MyButton";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { IProduct } from "./types/types";
import ProductCard from "../productCard/ProductCard";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";




export default function Products(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  const {addToCart} = useCart();

  const schema = Yup.object().shape({
    quantity: Yup.number()
      .typeError("-Please enter a number- ")
      .min(1, "-Minimum value is 1- ")
      .max(20, "-Maximum value is 20- ")
      .required("-Quantity is required- "),
  });

  const formik = useFormik({
    initialValues: { quantity: "5" },
    validateOnChange: false,
    validationSchema: schema,
    onSubmit: (values) => {
      fetchProducts(parseInt(values.quantity, 10));
    },
  });

  const fetchProducts = async (limit: number) => {
    setLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      const data: IProduct[] = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    fetchProducts(5);
  }, []);
  
  return (
    <>
    {/* <Cart/> */}
    <div className={styles.productsContainer}>
      <h2>Product List</h2>
      <form onSubmit={formik.handleSubmit} className={styles.productCard}>
        <input
          type="number"
          name="quantity"
          value={formik.values.quantity}
          onChange={formik.handleChange}
          placeholder="Enter quantity"
          />
        <MyButton type="submit" text="Load Products" />
      </form>
      {formik.errors.quantity && <span className={styles.errorMessage}>{formik.errors.quantity}</span>}

      {loading ? (
        <Loader />
      ) : (
        <div className={styles.shopContainer}>
        {products.map(product => (
          <div>
            <ProductCard
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
 
          </div>
        ))}
      </div>
    )}
      </div>
      </>
    );
}
