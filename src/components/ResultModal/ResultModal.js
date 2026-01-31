import "./ResultModal.css";
import Button from "../Button/Buttons";
const ResultModal = ({ result, word, close }) => {
  return (
    <div className="Modal-Overlay">
      <div className="Modal-Header">
        <Button text="x" onClick={close} />
      </div>

      <div className="Modal-Content">
        {result ? (
          <p>
            Congratulations! You guessed the word -{" "}
            <b className="Word-Highlight">{`${word}`}</b>! 🎉
          </p>
        ) : (
          <p>
            Game Over! The correct word was{" "}
            <b className="Word-Highlight">{`${word}`}</b>.
          </p>
        )}
      </div>
    </div>
  );
};

export default ResultModal;
