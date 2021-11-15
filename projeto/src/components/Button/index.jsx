import "./styles.css";

export const LoadMoreButton = ({ text, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} className="meu-botao">
      {text}
    </button>
  );
};
