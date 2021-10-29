// Riprendendo la pagina web creata a lezione, voglio che il bottone che rinomina l'elemento H1 
// aggiunga un testo inserito dall'utente, tramite prompt.

// Opzionale: create un elemento <input> e fate aggiungere il testo all'utente non più tramite il prompt 
// ma tramite quel campo di input. TIP: anche <input> è un elemento, e presenta delle chiavi... 
// tra queste ne trovate una anche per il testo in esso inserito...

// Creare un elemento unordered list <ul> e un <button> all'interno del vostro HTML. 
// Il click sul button andrà a creare un figlio <li> all'interno del padre <ul>. 
// Non importa la quantità di li nè il valore che essi contengono. Ne basta anche uno.

const wrapper = document.querySelector(".intestazione");
const h1Element = document.querySelector("h1");
const h1RenameBtn = document.querySelector(".button-name");
const h1RemoveBtn = document.querySelector(".button-remove");
const addText = document.querySelector("#textInput");
//   tag1.textContent = nomecostanteinput.value

// PRIMO ESRCIZIO CON OPZIONE INPUT

h1RemoveBtn.addEventListener(
  "click",
  () => {
    wrapper.removeChild(h1Element); // rimuove l'elemento h1
  },
  { once: true }
);

h1RenameBtn.addEventListener(
  "click",
  () => {
    h1Element.textContent = addText.value;
  },
);

// SECONDO ESERCIZIO
const wrapperList = document.querySelector(".list");
const addListBtn = document.querySelector(".button-list");
const addUL = document.querySelector(".add-here");

wrapperList.addEventListener(
    "click",
    () => {
      addListBtn.appendChild(addUL);
    },
);