import { useState } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import { Title } from "./Title";
import { useEffect } from "react";
import CountButton from "./CountButton";

export default function Card() {
  const [contador, setContador] = useState(0);
  const locked = contador === 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space" || event.code === "ArrowRight") {
        const novoContador = contador + 1;
        if (novoContador > 5) {
          setContador(5);
          return;
        }
        setContador(novoContador);
      } else if (event.code === "ArrowLeft" && contador > 0 && contador < 5) {
        setContador(contador - 1);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [contador]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count contador={contador} />
      <ResetButton setContador={setContador} />
      <ButtonContainer>
        <CountButton type="minus" setContador={setContador} locked={locked} />
        <CountButton type="plus" setContador={setContador} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
