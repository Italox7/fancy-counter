import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setContador, locked }) {
  const handleClick = (event) => {
    setContador((prev) => {
      if (type === "minus") {
        const novoContador = prev - 1;

        if (novoContador < 0) {
          return 0;
        }
        return novoContador;
      } else {
        const novoContador = prev + 1;

        if (novoContador > 5) {
          return 5;
        } else {
          return novoContador;
        }
      }
    });

    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
