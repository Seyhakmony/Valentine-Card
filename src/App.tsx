import { useState } from "react";
import "./App.css";

const phrase = [
  "No",
  "Are you Sure?",
  "Really Sure?",
  "제발...",
  "I will treat you well",
  "I'm going to cry",
  "You're breaking my heart ;(",
  "제발...",
  "Give me a chance",
  "1 chance",
  "I even pay for your ice cream",
  "You know what, I dont need you",
  "I'm better without you in my life",
  "Actually, never mind, I need you",
  "So please give me a chance",
];

const getRandomPosition = () => {
  const y = window.innerHeight * Math.random();
  const x = window.innerWidth * Math.random();
  return { top: `${y}px`, left: `${x}px` };
};

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: "20px",
    left: "220px",
  });

  const yes = noCount * 20 + 16; // Calculation for font size or other purposes

  function handleNoClick() {
    setNoCount(noCount + 1);
    if (noCount === 0) {
      setNoButtonPosition(getRandomPosition());
    }
  }

  function getNoButtonText() {
    return phrase[Math.min(noCount, phrase.length - 1)];
  }
  const initialNoButtonPosition = { top: "680px", down: "500px" };
  return (
    <div className="ValentineCard">
      {yesPressed ? (
        <>
          <img
            alt="this could be us"
            src="https://c.tenor.com/nfhDavLGkZEAAAAC/tenor.gif"
          />
          <div className="Text">You won't regret this.</div>
        </>
      ) : (
        <>
          <img
            className="flower"
            alt="end game start"
            src="https://c.tenor.com/g3Q53yKDdloAAAAd/tenor.gif"
          />
          <div
            className="question"
            style={{ display: "flex", alignItems: "center" }}
          >
            <p>Will you be my Valentine?</p>
            <img
              className="heart"
              alt="heart"
              src="https://media.tenor.com/xdtd4CYBFk0AAAAi/tonton-tontonsticker.gif"
              style={{ marginLeft: "10px" }}
            />
          </div>
          <button
            className="YesButton"
            style={{ fontSize: `${yes}px` }}
            onClick={() => setYesPressed(true)}
          >
            Yes
          </button>
          <br />
          <br />
          <button
            onClick={handleNoClick}
            className="NoButton"
            style={{
              position: "absolute",
              ...(noCount > 0 ? noButtonPosition : initialNoButtonPosition),
            }}
          >
            {getNoButtonText()}
          </button>
        </>
      )}
    </div>
  );
}

export default App;
