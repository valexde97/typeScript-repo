import Lesson05 from "../../lessons/lesson05/Lesson05"



export default function Homework05() {
  return (
    <>
      <h1>Fellowship of the ring🧙‍♂️🧙: </h1>

      <div className="fellowshipContainer">
      <Lesson05
        id={1}
        name={"Gendalf"}
        age={2000}
        isDark={false}
        weapon={["magic sword", "magic staff"]}
        image={
          "https://imgcdn.stablediffusionweb.com/2024/4/21/f3736c4c-ce62-4156-b682-0c012dde551f.jpg"
        }
      />
      <Lesson05
        id={2}
        name={"Saruman"}
        age={1800}
        isDark={true}
        weapon={["palantir"]}
        image={
          "https://cinema-quotes.com/wp-content/uploads/2024/05/Saruman.jpg"
        }
      />
      <Lesson05
        id={3}
        name={"Frodo"}
        age={35}
        isDark={false}
        weapon={["ring"]}
        image={
          "https://imgcdn.stablediffusionweb.com/2024/2/24/f4dd7ebe-1b47-41ff-ab5f-541345f19c2b.jpg"
        }
      />
      <Lesson05
        id={4}
        name={"Gimli"}
        age={50}
        isDark={false}
        weapon={["axe"]}
        image={
          "https://tolkiengateway.net/w/images/thumb/6/6f/Matt_Stewart_-_Forty-Two.jpg/640px-Matt_Stewart_-_Forty-Two.jpg"
        }
      />
      <Lesson05
        id={5}
        name={"Arwen"}
        age={2901}
        isDark={false}
        weapon={[]}
        image={
          "https://wegotthiscovered.com/wp-content/uploads/2022/08/Arwen_the_Lord_of_the_Rings.jpg"
        }
      />
      <Lesson05
        id={6}
        name={"Gorlum"}
        age={200}
        isDark={true}
        weapon={["teeth", "hands", "rocks"]}
        image={
          "https://gamesartist.co.uk/wp-content/uploads/2023/03/srdjan-orelj-gollum-00.jpg"
        }
      />
      </div>
    </>
  );
}
