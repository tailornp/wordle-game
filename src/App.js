import "./App.css";
import Button from "./components/Button/Buttons";
import { useEffect, useRef, useState } from "react";
import { getWord } from "./utils";
import ResultModal from "./components/ResultModal/ResultModal";
import PlayModal from "./components/PlayModal/PlayModal";

function App() {
  const [guessCount, setGuessCount] = useState(0);
  const [word, setWord] = useState("");
  const [result, setResult] = useState(false);
  const totalGuesses = 5;
  const [guesses, setGuesses] = useState(
    Array(totalGuesses).fill(Array(totalGuesses).fill("")),
  );
  const inputRef = useRef(null);
  const [disabled, setDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [howToPlayModal, setHowToPlayModal] = useState(false);
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    setWord(getWord());
  }, []);

  const handleGuess = () => {
    let currentGuess = guessCount + 1;
    if (currentGuess > totalGuesses) {
      return;
    }
    let inputValue = inputRef.current.value.toLowerCase();
    if (inputValue && !/^[a-zA-Z]*$/.test(inputValue)) {
      setValidationError("Only alphabets allowed");
      return;
    }
    if (inputValue.length < totalGuesses && inputValue.length >= 0) {
      console.log("here");
      setValidationError(`Should be a ${totalGuesses} letter word`);
      return;
    }
    setValidationError("");
    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses];
      newGuesses[guessCount] = inputValue.split("");
      return newGuesses;
    });

    if (inputValue === word) {
      setShowModal(true);
      setResult(true);
    } else if (currentGuess === totalGuesses) {
      setShowModal(true);
      setResult(false);
      setDisabled(true);
    }
    setGuessCount(currentGuess);
  };

  const handleReset = () => {
    setGuessCount(0);
    setWord(getWord());
    setResult(false);
    setDisabled(false);
    setGuesses(Array(totalGuesses).fill(Array(totalGuesses).fill("")));
    inputRef.current.value = "";
    setValidationError("");
  };

  const getCellColor = (letter, index) => {
    if (letter === "") return "";
    if (word[index] === letter) {
      return "Green";
    } else if (word.includes(letter)) {
      return "Yellow";
    } else {
      return "Gray";
    }
  };

  const closeModal = () => {
    setDisabled(true);
    setShowModal(false);
  };
  return (
    <div className="App Container">
      <header className="App-header">
        <h1>Wordle</h1>
      </header>
      <input
        ref={inputRef}
        type="text"
        maxLength={5}
        placeholder="Enter the guess word"
        className="Word-Input"
      ></input>
      <span
        className={`Error-Message ${validationError !== "" ? "Visible" : ""}`}
      >
        {validationError}
      </span>
      <div>
        <Button text="Guess" onClick={handleGuess} disabled={disabled} />
        <Button text="Reset" onClick={handleReset} />
      </div>
      <div className="Stats">
        <p>Total Guesses: {totalGuesses}</p>
        <p>Guess Count: {guessCount}</p>
      </div>
      <div className="Guess-Grid">
        {guesses.map((letters, index) => {
          return (
            <div className="Row" key={index}>
              {letters.map((letter, index) => {
                return (
                  <div
                    className={`Cell ${getCellColor(letter, index)}`}
                    key={index}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <Button text="How to Play" onClick={() => setHowToPlayModal(true)} />
      {showModal ? (
        <ResultModal result={result} word={word} close={closeModal} />
      ) : (
        <></>
      )}
      {howToPlayModal && <PlayModal close={() => setHowToPlayModal(false)} />}
      <div className="Credit">
        A fun side project by -{" "}
        <b>
          <i>Nidhi</i>
        </b>
      </div>
    </div>
  );
}

export default App;
