import { Link } from 'react-router-dom';
import styles from './lesson17.module.css'

export interface IProduct1 {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
}
interface StoreCardProps {
  product: IProduct1;
  children?: React.ReactNode;
}

export default function StoreCard({ product, children }: StoreCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <img src={product.thumbnail} alt={product.title} className={styles.image} />
      <h3>{product.title}</h3>
      <p>{product.price} $</p>
      <Link key={product.id} to={String(product.id)}> <button>To product</button></Link>
      {children}

      {/* <MyButton func={() => addToCart({ id: id, title: title, price: price, quantity: 1 })} text="Add to cart"/>
      <Link key={id} to={String(id)}> <button>To product</button></Link> */}
    </div>
  );
}