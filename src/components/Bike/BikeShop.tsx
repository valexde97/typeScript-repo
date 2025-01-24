import Bike from "./Bike"

export default function Bikeshop(): JSX.Element{
  return(
    <div>
<h1>Bike Shop</h1>
<h2>Bikes</h2>
<Bike brand="Ducatti" color="Black" gears={8} price={700000} />
<Bike brand="Honda" color="Yellow" gears={4} price={50000} />
<Bike brand="Mitsubishi" color="Red" gears={4} price={70000} />
<Bike brand="Yava" color="Green" gears={3} price={2000} />
<Bike brand="Yamaha" color="blue" gears={5} price={12000} />
</div>
  )
}