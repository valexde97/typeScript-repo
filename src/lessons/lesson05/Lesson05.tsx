import "./lesson05.css"
import "./Lesson05"

export default function Lesson05({ id, name, age, isDark, weapon, image }) {
  return (
  
          <div className="heroCard" key={id}>
            <h3>{name}</h3>
            <div
              className={`heroCardImgWrapper ${isDark ? "heroCardDark" : "heroCardLight"}`}
            >
              <img src={image} alt={name} />
            </div>
            <p>{age} years old</p>
            <p>{isDark ? "Villan 🔥" : "Hero ✨"}</p>
            {/* <p>Weapons {hero.weapons.map(weapon => ' | ' + weapon )}</p> */}
            <p>
              Weapons:
              {weapon?.length > 0 ? weapon.join(", ") : "None"}
            </p>
          </div>
  );
}
