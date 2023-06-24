import "./css/App.css";
import { Confettti } from "./confetti";
import { useState } from "react";
import { Reset } from "styled-reset";

function App() {
  const [action, setAction] = useState(false);
  //紙吹雪の枚数
  const confetti_number = 30;
  //紙吹雪の降る間隔
  const confetti_delay = 0.3;
  //１つの紙吹雪が上から下までの落ちる時間
  const confetti_speed = 15;
  //紙吹雪が降り始めて、終わるまでの時間
  const confetti_time =
    (confetti_speed + confetti_number * confetti_delay) * 1000;

  const startConfetti = () => {
    if (action) return;
    setAction(true);
    setTimeout(() => {
      setAction(false);
    }, confetti_time);
  };

  return (
    <>
      <Reset />
      <div className="container">
        {action && (
          <Confettti
            number={confetti_number}
            delay={confetti_delay}
            speed={confetti_speed}
          />
        )}
      </div>
      <div className="confettiButton">
        {action ? (
          <p>リロード...</p>
        ) : (
          <button onClick={startConfetti}>紙吹雪を降らす</button>
        )}
      </div>
    </>
  );
}

export default App;
