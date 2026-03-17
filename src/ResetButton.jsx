import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setContador }) {
  const handleReset = (event) => {
    setContador(0);

    event.currentTarget.blur();
  };

  return (
    <button className="reset-btn" onClick={handleReset}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
