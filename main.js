//const { createElement } = require("react/cjs/react.production.min");

// epic cheat
print = console.log;
let rawCards = `la familia,family
el padre,father
la madre,mother
el esposo (el marido),husband
la esposa (la mujer),wife
el hermano,brother
(el/la) bebé,baby (male/female)
el hijo,son
la hija,daughter
la hermana,sister
el tío,uncle
la tía,aunt
el primo,cousin (male)
la prima,cousin (female)
el abuelo,grandpa
la abuela,grandma, granny
la nieta,granddaughter
el nieto,grandson
la mascota,pet
el perro,dog (male)
el gato,cat (male)
mayor (que),older (than)
menor (que),younger (than)
los parientes,relatives
los padres,parents (or fathers)
la sobrina,niece
el sobrino,nephew
los abuelos,grandparents
los hijos,children (or sons)
el cuñado,brother-in-law
la cuñada,sister-in-law
el suegro,father-in-law
la suegra,mother-in-law
el yerno,son-in-law
la nuera,daughter-in-law
el bisabuelo,great grandfather
la bisabuela,great-grandmother
el padrastro,stepfather
la madrastra,stepmother
la hermanastra,stepsister
el hermanastro,stepbrother`;
function sortCards(cards) {
  let c1 = cards.split("\n");
  let c2 = {};
  c1.map((card) => {
    c2[card.split(",")[1]] = card.split(",")[0];
  });
  return c2;
}
function getButtonText(button) {
  let buttonLabel = button.querySelector("span > button > span > div > div");
  let buttonText = buttonLabel.innerHTML;
  return buttonText;
}
let sortedCards = sortCards(rawCards);

let buttonContainer = document.querySelector(
  "#LiveGameStudentTarget > div.StudentLayout > section > div > div.QuestionView > div.StudentAnswerOptions"
);
//console.log(sortedCards)
function main() {
  try {
    let question = document.querySelector(
      "#LiveGameStudentTarget > div.StudentLayout > section > div > div.QuestionView > div.StudentPrompt.has-text"
    ).innerText;
    let buttons = buttonContainer.getElementsByTagName("*");
    for (i = 0; i < buttons.length; i++) {
      let button = buttons.item(i);
      let buttonText = button.innerText;
      if (buttonText == sortedCards[question]) {
        //button.style.backgroundColor = "white";
        button.click()
        
      }
    }
  } catch (error) {}
}
setInterval(main, 50);
