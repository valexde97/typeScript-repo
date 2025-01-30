import "./lesson05.css"

interface ILesson05Props {
  id: number;
  name: string;
  age: number;
  isDark: boolean;
  weapon: string[];
  image: string;
}


export default function Lesson05({
  id,
  name,
  age,
  isDark,
  weapon,
  image,
}: ILesson05Props): JSX.Element {
  return (
    <div className="heroCard" key={id}>
      <h3>{name}</h3>
      <div className={`heroCardImgWrapper ${isDark ? "heroCardDark" : "heroCardLight"}`}>
        <img src={image} alt={name} />
      </div>
      <p>{age} years old</p>
      <p>{isDark ? "Villain 🔥" : "Hero ✨"}</p>
      <p>Weapons: {weapon.length > 0 ? weapon.join(", ") : "None"}</p>
    </div>
  );
}
