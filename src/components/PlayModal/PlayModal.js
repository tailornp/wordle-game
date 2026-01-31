import Button from "../Button/Buttons";
import "./PlayModal.css";
const PlayModal = ({ close }) => {
  return (
    <div className="Modal-Overlay">
      <div className="Modal-Header">
        <Button text="x" onClick={close} />
      </div>

      <div className="Modal-Content">
        <h1>How to Play!</h1>
        <p>
          Guess the secret 5-letter word in 5 tries.
          <br />
          Each guess gives you clues:
        </p>
        <ul className="Rules">
          <li>
            <span className="Green-Bullet"></span>
            <p>Right letter, right spot — nice.</p>
          </li>
          <li>
            <span className="Yellow-Bullet"></span>
            <p>Right letter, wrong spot — close!</p>
          </li>
          <li>
            <span className="Gray-Bullet"></span>
            <p>Letter not in word — nope.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlayModal;
