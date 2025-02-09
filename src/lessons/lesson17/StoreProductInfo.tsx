import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct1 } from "./StoreCard";
import styles from "./StoreProductInfo.module.css";

const initialProduct: IProduct1 = {
  id: 0,
  title: "",
  price: 0,
  thumbnail: "",
  description: "",
};

export default function StoreProductInfo(): JSX.Element {
  const [product, setProduct] = useState<IProduct1>(initialProduct);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data: IProduct1) => setProduct(data));
  }, [id]);

  return (
    <div className={styles["product-container"]}>
      <div className={styles["product-card"]}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles["product-image"]}
        />
        <h3 className={styles["product-title"]}>{product.title}</h3>
        <p className={styles["product-price"]}>{product.price} $</p>
        <p className={styles["product-description"]}>{product.description}</p>
      </div>
    </div>
  );
}
