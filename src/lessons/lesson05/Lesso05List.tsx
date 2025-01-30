import  heroes  from "../../homeworks/homework05/Homework05";
import Lesson05 from "./Lesson05";

export default function Lesson05List() {
  return (
    <div className="heroesContainer">
      {heroes.map((hero) => (
        <Lesson05 key={hero.id} {...hero} />
      ))}
    </div>
  );
}