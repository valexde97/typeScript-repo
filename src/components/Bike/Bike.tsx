interface Props{
gears: number;
brand: string;
price: number;
color: string;
}


export default function Bike(props: Props): JSX.Element {
  const { gears, brand, price, color } = props;
  return (
    <div>
      Brand: {brand} Color: {color} Gears: {gears} Price: {price}
    </div>
  );
}