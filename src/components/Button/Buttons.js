import "./Button.css";
const Button = ({ text, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="Button">
      {text}
    </button>
  );
};

export default Button;
