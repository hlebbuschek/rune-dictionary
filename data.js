// Live Server; Prettier - Code formatter; Reshaper 9 Keybiding
import { getRunen } from "./runen-list.js";
const runen = getRunen();
renderRunenListe();

function renderRunenListe() {
  const runenListe = document.querySelector('.runen-liste');
  runenListe.innerHTML = ''; 
  runen.forEach(item => {
      runenListe.innerHTML += `
      <div class="draggableElement" id="draggableElement_${item.name}" draggable="true">
        <img src="img/runen/${item.name}.png" alt="${item.name}">
      </div>`;
  });

  document.querySelectorAll('.draggableElement')
  .forEach(element => {
    element.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", element.id);
    });
  });
  enableTouchDragAndDrop();
}

class Layot {
  constructor(id, name, lagen) {
    this.id = id;
    this.name = name;
    this.lagen = lagen;
  };
  zeichen(rows) {
    let htmlFull = '';
    rows.forEach(row => {
      let htmlRow = '';
      row.forEach(lage => {
        htmlRow += `
        <div class="lage">${lage.num}</div>`;
      });
      htmlFull += `
      <div class="rows">
        ${htmlRow}
      </div>`;
    });
    return htmlFull;
  }
};

const layots = [{
  id: 0,
  name : 'Odin',
  lagen : [[{
    num: 1,
    bezeichnung: 'Antwort'
  }]]},{
    id : 1,
    name : 'Kreuz',
    lagen : [[
      {
        num: 6,
        bezeichnung: ''
      }
    ], [
      {
        num: 1,
        bezeichnung: ''
      }, {
        num: 5,
        bezeichnung: ''
      }, {
        num: 2,
        bezeichnung : ''
      }
    ], [
      {
        num: 3,
        bezeichnung: ''
      }
    ], [
      {
        num: 4,
        bezeichnung: ''
      }
    ]]},{
    id : 2,
    name : `Vergangenheit\nund\nZukunft`,
    lagen : [[{
        num: 3,
        bezeichnung: ''
      }, {
        num: 2,
        bezeichnung: ''
      }, {
        num: 1,
        bezeichnung: ''
      }
    ]]},{
    id : 3,
    name : 'Drei\nRunen',
    lagen : [[
      {
        num: 1,
        bezeichnung: ''
      }, {
        num: 2,
        bezeichnung: ''
      }, {
        num: 3,
        bezeichnung: ''
      }]]},{
    id : 4,
    name : 'Feld',
    lagen : [[
      {
        num: 12,
        bezeichnung: ''
      }, {
        num: 11,
        bezeichnung: ''
      }, {
        num: 10,
        bezeichnung: ''
      }, {
        num: 9,
        bezeichnung: ''
      }, {
        num: 8,
        bezeichnung: ''
      }, {
        num: 7,
        bezeichnung: ''
      }], [{
        num: 1,
        bezeichnung: ''
      }, {
        num: 2,
        bezeichnung: ''
      }, {
        num: 3,
        bezeichnung: ''
      }, {
        num: 4,
        bezeichnung: ''
      }, {
        num: 5,
        bezeichnung: ''
      }, {
        num: 6,
        bezeichnung: ''
      }]]}, {
    id : 5,
    name : 'Piramide',
    lagen : [[
      {
        num: 1,
        bezeichnung: ''
      }
    ], [
      {
        num: 2,
        bezeichnung: ''
      }, {
        num: 3,
        bezeichnung: ''
      }
    ], [
      {
        num: 4,
        bezeichnung: ''
      }, {
        num: 5,
        bezeichnung: ''
      }
    ], [
      {
        num: 6,
        bezeichnung: ''
      }, {
        num: 7,
        bezeichnung: ''
      }]]}
].map((layot) => new Layot(layot.id, layot.name, layot.lagen)); 

layots.forEach((item) => {
  document.querySelector('.layots-menu').innerHTML += `
  <div class="kaestchen layot" data-layot-id="${item.id}">
    <div class="image rune-img">
      <img src="img/${item.name}.png">
    </div>
    <div class="name">${item.name}</div>
  </div>`;
});

document.querySelectorAll('.layot').forEach((element) => {
  element.addEventListener('click', () => {
    const layotId = element.dataset.layotId;
    const matchingItem = layots.find(item => item.id == layotId);
    if (matchingItem) {
      document.querySelector('.layot-zeichung')
      .innerHTML = matchingItem.zeichen(matchingItem.lagen);
      document.getElementById('layot-name').innerText = matchingItem.name;
      initializeLageDropZone(matchingItem);
      renderRunenListe();
      enableTouchDragAndDrop();
      document.querySelector('.layot-beschreibung').innerHTML = '';
    }
  });
});

function initializeLageDropZone(matchingItem) {
  document.querySelectorAll('.lage').forEach(lageElement => {
    lageElement.addEventListener("dragover", (event) => {
      event.preventDefault();
      lageElement.style.borderColor = "rgb(26, 13, 0)";
    });
  
    lageElement.addEventListener("dragleave", () => {
      lageElement.style.borderColor = "rgba(26, 13, 0, 0.6)";
    });
  
    lageElement.addEventListener("drop", (event) => {
      event.preventDefault();
      lageElement.style.borderColor = "rgba(26, 13, 0, 0.6)";
  
      const draggedElementId = event.dataTransfer.getData("text/plain");
      const draggedElement = document.getElementById(draggedElementId);
  
      if (draggedElement) {
        const existingRune = lageElement.querySelector(".draggableElement");
        if (existingRune) {
          returnRuneToList(existingRune);
        }
        lageElement.appendChild(draggedElement);
        hizufuegenBeschreibung(getRuneById(draggedElementId), getLageById(matchingItem, lageElement.textContent.slice(0, 2)));
      }
    });
  });
}


function returnRuneToList(runeElement) {
  const runenListe = document.querySelector('.runen-liste');

  if (runeElement.parentElement) {
    runeElement.parentElement.removeChild(runeElement);
  }

  if (!document.getElementById(runeElement.id)) {
    const newRuneElement = document.createElement("div");
    newRuneElement.classList.add("kaestchen", "draggableElement");
    newRuneElement.id = runeElement.id;
    newRuneElement.draggable = true;
    newRuneElement.innerHTML = runeElement.innerHTML;
    runenListe.appendChild(newRuneElement);

    newRuneElement.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", element.id);
    });
  }
}

function getRuneById(id) {
  let matchingItem;
  runen.forEach(item => {
    const name = id.slice(17);
    if (name === item.name) {
      matchingItem = item;
    }
  });
  return matchingItem;
}

function getLageById(layot, id) {
  const matchingItem = layot.lagen.flat().find(lage => lage.num === Number(id));
  return matchingItem;
}

function hizufuegenBeschreibung(rune, lage) {
  const layotBeschreibungElement = document.querySelector('.layot-beschreibung');
  const existingLage = document.getElementById(lage.num);
  if (existingLage) {
    layotBeschreibungElement.removeChild(existingLage);
  }
  layotBeschreibungElement
    .innerHTML += `
      <div id="${lage.num}">
        <div class="lage-bedeutung">
          <span>${lage.num}</span>
          <span>${lage.bezeichnung}</span>
        </div>
        <div class="rune-bedeutung">
          <b>${rune.name}</b>
          <span>(${rune.bedeutung})</span>
            <p><ins>Hauptbedeutung: </ins><span class="beschreibung">${rune.haupt.toString().replaceAll(',', ', ')}</span></p>
            <p><ins>Umdrehene Bedeutung: </ins><span class="beschreibung">${rune.umgekehrte.toString().replaceAll(',', ', ')}</span></p>
        </div>
      </div>`;
}

function enableTouchDragAndDrop() {
  document.querySelectorAll('.draggableElement').forEach((element) => {
    element.addEventListener("touchstart", (event) => {
      const touch = event.touches[0]; 
      event.target.style.position = "absolute"; 
      event.target.style.zIndex = 1000; 

      event.target.dataset.touchX = touch.clientX - event.target.getBoundingClientRect().left;
      event.target.dataset.touchY = touch.clientY - event.target.getBoundingClientRect().top;
    });

    element.addEventListener("touchmove", (event) => {
      event.preventDefault();
      const touch = event.touches[0];

      const newX = touch.clientX - event.target.dataset.touchX;
      const newY = touch.clientY - event.target.dataset.touchY;

      // Neue Position setzen
      event.target.style.left = `${newX}px`;
      event.target.style.top = `${newY}px`;
    });

    element.addEventListener("touchend", (event) => {
      event.preventDefault(); 

      const touch = event.changedTouches[0];
      const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);

      if (targetElement && targetElement.classList.contains("lage")) {
        targetElement.appendChild(event.target); 
      }
      event.target.style.position = "static";
      event.target.style.zIndex = "auto";
    });
  });
}
