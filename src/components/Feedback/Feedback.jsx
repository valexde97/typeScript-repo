import { useState } from "react";
import MyButton from "../MyButton/MyButton";
import "./feedback.css"

export default function Feedback() {
  let [Like, setLiked] = useState(0);
  let [Dislike, setDislike] = useState(0);

  const Liked = () => {
    setLiked((prev) => prev + 1);
  };

  const Disliked = () => {
    setDislike((prev) => prev + 1);
  };

  const Reset = () => {
    setLiked(0);
    setDislike(0);
  };
  return (
    <div className="container">
      <h2 className="heading">Feedback👌</h2>
      <div className="counter">
        <span>{Like}</span>
        <MyButton onClick={Liked}>Like👍</MyButton>
        <MyButton onClick={Disliked}>Dislike👎</MyButton>
        <span>{Dislike}</span>
        <MyButton onClick={Reset}>Reset Results</MyButton>
      </div>
    </div>
  );
}
