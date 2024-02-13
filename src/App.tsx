import { useState, useEffect } from "react";
import "./App.css";

const phrase = [
  <div style={{ textAlign: "center" }}>
    No{" "}
    <img
      src="https://media.tenor.com/VOQM9bXxYdQAAAAj/anime.gif"
      alt="No"
      style={{
        display: "block",
        margin: "auto",
        width: "100px",
        height: "auto",
      }}
    />
  </div>,
  <div style={{ textAlign: "center" }}>
    Are you sure?{" "}
    <img
      src="https://media1.tenor.com/m/NW8Q1vamszYAAAAC/haikyuu-cry.gif"
      alt="Are you sure?"
      style={{
        display: "block",
        margin: "auto",
        width: "100px",
        height: "auto",
      }}
    />
  </div>,
  <div style={{ textAlign: "center" }}>
    Really Sure?{" "}
    <img
      src="https://media.tenor.com/zkVAO6hRoSkAAAAM/pink-hair-anime-girl-anya.gif"
      alt="Really Sure?"
      style={{
        display: "block",
        margin: "auto",
        width: "100px",
        height: "auto",
      }}
    />
  </div>,
  <div style={{ textAlign: "center" }}>
    제발...{" "}
    <img
      src="https://media.tenor.com/KjQIiEfZ0G4AAAAj/sad-tears.gif"
      alt="제발..."
      style={{
        display: "block",
        margin: "auto",
        width: "100px",
        height: "auto",
      }}
    />
  </div>,
  <div style={{ textAlign: "center" }}>
    I will treat you well{" "}
    <img
      src="https://media.tenor.com/I60osis2Vz8AAAAj/yoosung-cry.gif"
      alt="I will treat you well"
      style={{
        display: "block",
        margin: "auto",
        width: "100px",
        height: "auto",
      }}
    />
  </div>,
  <div style={{ textAlign: "center" }}>
    I'm going to cry{" "}
    <img
      src="https://media.tenor.com/qVJBrbsBk8EAAAAj/pixel-art-gmail.gif"
      alt="Crying"
      style={{
        display: "block",
        margin: "auto",
        width: "100px",
        height: "auto",
      }}
    />
  </div>,
  <div style={{ textAlign: "center" }}>
    You're breaking my heart{" "}
    <img
      src="https://media.tenor.com/iEE8Br03ARAAAAAj/broken-heart.gif"
      alt="Broken Heart"
      style={{
        display: "block",
        margin: "auto",
        width: "100px",
        height: "auto",
      }}
    />
  </div>,
  <div style={{ textAlign: "center" }}>
    제발...{" "}
    <img
      src="https://media.tenor.com/PD35MO9QgugAAAAj/ensemble-stars-enstars.gif"
      alt="Please"
      style={{
        display: "block",
        margin: "auto",
        width: "100px",
        height: "auto",
      }}
    />
  </div>,
  <div style={{ textAlign: "center" }}>
    Give me a chance{" "}
    <img
      src="https://media.tenor.com/usAx4sFHmRwAAAAj/chibi-yhad.gif"
      alt="Chance"
      style={{
        display: "block",
        margin: "auto",
        width: "100px",
        height: "auto",
      }}
    />
  </div>,
  <div style={{ textAlign: "center" }}>
    So please give me a chance{" "}
    <img
      src="https://media.tenor.com/cXWKB9TZXzIAAAAM/mob-psycho100-mob-psycho.gif"
      alt="Mob Psycho"
      style={{
        display: "block",
        margin: "auto",
        width: "100px",
        height: "auto",
      }}
    />
  </div>,
  <div style={{ textAlign: "center" }}>
    Pretty please{" "}
    <img
      src="https://media.tenor.com/gK7dlrpvSjQAAAAM/haikyuu-heart.gif"
      alt="Pretty Please"
      style={{
        display: "block",
        margin: "auto",
        width: "100px",
        height: "auto",
      }}
    />
  </div>,
];

const firstImg = "https://media.tenor.com/OzNPe52enwwAAAAi/mochi-cat-love.gif";

const moreImg = [
  "https://media.tenor.com/bw2OXscn-soAAAAi/cat.gif",
  "https://media.tenor.com/DuozGWuBhqIAAAAj/mochi-peachcat.gif",
  "https://media.tenor.com/9z8aTaVmPfwAAAAj/cats-sad.gif",
  "https://media.tenor.com/yhMZIW9G7BkAAAAi/peachcat-cat.gif",
  "https://media.tenor.com/VxixtsQjIRAAAAAj/chibi-cat-mochi-cat.gif",
  "https://media.tenor.com/GpC0Mty4Z8wAAAAj/mochi-mochi-peach-cat-peach-cat.gif",
  "https://media.tenor.com/r7PKNiF--nUAAAAj/mochi-cry.gif",
  "https://media.tenor.com/UdThavVus9oAAAAj/peach-and.gif",
];

const getRandomPosition = () => {
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  const buttonHeight = 50;
  const buttonWidth = 100;
  const y = Math.random() * (screenHeight - buttonHeight);
  const x = Math.random() * (screenWidth - buttonWidth);
  return { top: `${y}px`, left: `${x}px` };
};

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: "650px",
  });
  const [currentImg, setCurrentImg] = useState(firstImg);

  const yes = noCount * 20 + 16;

  useEffect(() => {
    if (noCount > 0) {
      const index = Math.min(noCount - 1, moreImg.length - 1);
      setCurrentImg(moreImg[index]);
    }
  }, [noCount]);

  function handleNoClick() {
    setNoCount(noCount + 1);
    setNoButtonPosition(getRandomPosition());
  }

  function getNoButtonText() {
    return phrase[Math.min(noCount, phrase.length - 1)];
  }

  return (
    <div className="ValentineCard">
      {yesPressed ? (
        <>
          <div className="final-Background">
            <img
              className="final"
              alt="this could be us"
              // src="https://c.tenor.com/nfhDavLGkZEAAAAC/tenor.gif"
              src="https://media.tenor.com/19U-yYDYFvYAAAAM/happy-x-mas.gif"
            />
            <div className="Text">Thank You for saying yes.</div>
            <img
              className="secondfinal"
              alt="this could be us"
              src="https://media.tenor.com/ZQndYO4NwBcAAAAM/gojo-satoru.gif"
            />
          </div>
        </>
      ) : (
        <>
          <div className="front-Background">
            <img className="flower" alt="end game start" src={currentImg} />
            {/* <img
            className="flower"
            alt="end game start"
            // src="https://c.tenor.com/g3Q53yKDdloAAAAd/tenor.gif"
            src="https://media.tenor.com/OzNPe52enwwAAAAi/mochi-cat-love.gif"
          /> */}
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
                ...noButtonPosition,
              }}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
