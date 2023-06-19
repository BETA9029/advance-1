import "./css/App.css";
import { Confettti } from "./confetti";
import { useState } from "react";
import { Reset } from "styled-reset";

function App() {
  const [action, setAction] = useState(false);
  const confettiNumber = 30;
  const confettiDelay = 0.3;
  const confettiSpeed = 15;
  const confettiSecond =
    (confettiSpeed + confettiNumber * confettiDelay) * 1000;

  const onButton = () => {
    setAction(true);
    setTimeout(() => {
      setAction(false);
    }, confettiSecond);
  };

  return (
    <>
      <Reset />
      <div className="container">
        {action &&
          [...Array(confettiNumber)].map((valule, key) => (
            <Confettti
              key={key}
              num={key}
              delay={confettiDelay}
              speed={confettiSpeed}
            />
          ))}
      </div>
      <div className="confettiButton">
        <button onClick={onButton}>紙吹雪を降らす</button>
      </div>
    </>
  );
}

export default App;
