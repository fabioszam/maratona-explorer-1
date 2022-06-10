const answerElement = document.querySelector("#answers");
const askInput = document.querySelector("#askInput");
const askButton = document.querySelector("#askButton");

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
];

function askQuestions() {
  if(askInput.value == "") {
    alert("Digite sua pergunta.");
    return;
  };

  askButton.setAttribute("disabled", true)

  const question = "<div>" + askInput.value + "</div>"

  const totalAnswers = answers.length;
  const randomNumbers = Math.floor(Math.random() * totalAnswers);
  answerElement.innerHTML = question + answers[randomNumbers];
  answerElement.style.opacity = 1;

  setTimeout(function() {
    answerElement.style.opacity = 0;
    askButton.removeAttribute("disabled")
  }, 3000);

};