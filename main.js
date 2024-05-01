// Variaveis
const phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
];
let numberArray = Math.floor(Math.random() * phrases.length);
const imgScreen1 = document.querySelector("#fortune");
const btnAnotherFortune = document.querySelector("#btnAnotherFortune");
const luckMessage = document.querySelector(".luck p");

//Funções
const callFortune = (e) => {
  e.preventDefault();
  document.querySelector(".screen1").classList.toggle("hide");
  document.querySelector(".screen2").classList.toggle("hide");
  luckMessage.innerHTML = phrases[numberArray];
};
const fortuneReset = () => {
  document.querySelector(".screen1").classList.toggle("hide");
  document.querySelector(".screen2").classList.toggle("hide");
  numberArray = Math.floor(Math.random() * phrases.length);
};

// Eventos
btnAnotherFortune.addEventListener("click", fortuneReset);
imgScreen1.addEventListener("click", callFortune);
