import { data, Link, useParams } from "react-router-dom";
import styles from "./productPage.module.css";
import { useEffect, useState } from "react";
import { IProduct } from "../products/types/types";
import Loader from "../loader/Loader";

const initialProduct: IProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
};

export default function ProductPage(): JSX.Element {
  const [product, setProduct] = useState<IProduct>(initialProduct);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data: IProduct) => setProduct(data));
  }, [id]);

  return (
    <div className={styles.productPage}>
      {product.title ? (
        <>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}€</p>
          <img width={200} src={product.image} alt="product.image" />
          <div>
            <Link to="/lesson14">back to main page</Link>
          </div>
        </>
      ) : (
        <div className={styles.loaderWrapper}>
        <Loader />
        </div>
      )}
    </div>
  );
}
