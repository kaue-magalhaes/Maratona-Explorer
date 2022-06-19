import { useRef, useState } from "react";
import { BodyMainStyles } from "./styles";

export function Body() {
  const [questionValue, setQuestionValue] = useState('')
  const [answer, setAnswer] = useState<string | null>(null)
  const [question, setQuestion] = useState<string | null>(null)

  const showAnswerAndQuestionRef = useRef<HTMLHeadingElement>(null);
  const ButtonRef = useRef<HTMLButtonElement>(null);

  const answers = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
  ]
  function showAnswerAndQuestion(){
    if(questionValue === ''){
      alert("Digite sua pergunta")
      return
    }

    ButtonRef.current?.setAttribute("disabled", "true")

    const pergunta = "<div>" + questionValue + "</div>"

    let randomAnswer = Math.floor(Math.random() * answers.length)

    showAnswerAndQuestionRef.current!.innerHTML = pergunta + answers[randomAnswer]

    showAnswerAndQuestionRef.current!.style.opacity = "1"

    setTimeout(() => {
      showAnswerAndQuestionRef.current!.style.opacity = "0";
      ButtonRef.current?.removeAttribute("disabled")
    }, 3000)
  }

  function auxFunction() {
    showAnswerAndQuestion()
  }

  return (
    <BodyMainStyles>
      <div>
        <input
          type="text"
          placeholder="Digite sua pergunta"
          value={questionValue}
          onChange={event => setQuestionValue(event.target.value)}
        />

        <button 
          ref={ButtonRef}
          onClick={auxFunction}
        >
          Fazer Pergunta
        </button>

        <h3
          ref={showAnswerAndQuestionRef}
          id={"showAnswerAndQuestion"}
        >
        </h3>
      </div>
    </BodyMainStyles>
  )
}