import reactImg from "../../assets/image0.jpeg"

function Homework01() {
  return (
    <>
     <header style={{ backgroundColor: "#3e71b4", color: "white", width: "100%", padding: "5px 10px", textAlign: "center", margin:"20px " }}>

        <h1>Valentin Lashko</h1>
        </header>

      
      <img src={reactImg}width={250} alt="react-Img" />
      <main style={{ padding: "20px", textAlign: "center" }}>
      <h2>Occupation: Chef🧑‍🍳</h2>
      </main>
      <footer style={{ backgroundColor: "#3479da", color: "white", padding: "10px 20px", textAlign: "center", marginTop: "20px" }}>
      <h2>Hobbies: Yoga, Learning languages, Meditation, Reading books, Cooking </h2>
    </footer>
    </>
  );
}

export default Homework01;