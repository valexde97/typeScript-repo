import { useState } from "react";

export default function Feedback() {
  let [Like, setLiked] = useState(0);
  let[Dislike, setDislike] = useState(0);

  const Liked = () => {
    setLiked(prev=>prev+1);
  };

  const Disliked = () => {
    setDislike(prev=>prev+1);
  };

  const Reset = () => {
    setLiked(0);
    setDislike(0);
  }
  return (
    <div>
      <h2>Feedback👌</h2>
      <div className="counter">
      <span>
          {Like}
          </span><button onClick={Liked}>Like👍</button>
        <button onClick={Disliked}>Dislike👎</button><span>{Dislike}</span>
        <button onClick={Reset}>Reset Results</button>
      </div>
    </div>
  );
}