// Live Server; Prettier - Code formatter; Reshaper 9 Keybiding
import { getRunen } from "./runen-list.js";
import { getLayots } from "./layots-liste.js";
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

const layots = getLayots().map((layot) => new Layot(layot.id, layot.name, layot.lagen));;

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
    document.querySelector('.layot-beschreibung').innerHTML = '';
    const layotId = element.dataset.layotId;
    const matchingItem = layots.find(item => item.id == layotId);
    if (matchingItem) {
      document.querySelector('.layot-zeichung')
      .innerHTML = matchingItem.zeichen(matchingItem.lagen);
      document.getElementById('layot-name').innerText = matchingItem.name;
      let counter = 0; 
      matchingItem.lagen.forEach(row => {
        counter += row.length;
      });

      for (let i = 1; i <= counter; i++) {
        const lageDiv = document.createElement("div");
        lageDiv.id = `lage-${i}`;
        document.querySelector('.layot-beschreibung').appendChild(lageDiv);      
      }
      initializeLageDropZone(matchingItem);
      renderRunenListe();
      enableTouchDragAndDrop(matchingItem);
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
  return runen.find(item => id.slice(17) === item.name);
}

function getLageById(layot, id) {
  return layot.lagen.flat().find(lage => lage.num === Number(id));
}

function hizufuegenBeschreibung(rune, lage) {
  const layotBeschreibungElement = document.querySelector('.layot-beschreibung');
  const lageDiv = document.getElementById(`lage-${lage.num}`);
  lageDiv.innerHTML = `
    <div class="lage-bedeutung"">
      <span>${lage.num}</span>
      <span>${lage.bezeichnung.replaceAll(' /', ',')}</span>
    </div>
    <div class="rune-bedeutung">
      <b>${rune.name}</b>
      <span>(${rune.bedeutung})</span>
      <p><ins>Hauptbedeutung: </ins><span class="beschreibung">${rune.haupt.join(", ")}</span></p>
      <p><ins>Umdrehene Bedeutung: </ins><span class="beschreibung">${rune.umgekehrte.join(", ")}</span></p>
    </div>
  `;
}

function enableTouchDragAndDrop(matchingItem) {
  document.querySelectorAll('.draggableElement').forEach((element) => {
    element.addEventListener("touchstart", (event) => {
      const touch = event.touches[0]; // Erster Touch-Punkt
      event.target.style.position = "absolute"; // Position muss absolut sein
      event.target.style.zIndex = 1000; // Damit es über anderen Elementen ist
      
      // Speichere die Start-Koordinaten
      event.target.dataset.touchX = touch.clientX - event.target.getBoundingClientRect().left;
      event.target.dataset.touchY = touch.clientY - event.target.getBoundingClientRect().top;
    });

    element.addEventListener("touchmove", (event) => {
      event.preventDefault(); // Verhindert das Scrollen während des Dragens
      const touch = event.touches[0];

      // Aktuelle Koordinaten berechnen
      const newX = touch.clientX - event.target.dataset.touchX;
      const newY = touch.clientY - event.target.dataset.touchY;

      // Neue Position setzen
      event.target.style.left = `${newX}px`;
      event.target.style.top = `${newY}px`;
    });

    element.addEventListener("touchend", (event) => {
      event.preventDefault(); // Verhindert seltsames Verhalten beim Loslassen

      // Prüfen, ob das Element über einer Lage ist
      const touch = event.changedTouches[0];
      const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);

      if (targetElement && targetElement.classList.contains("lage")) {
        const existingRune = targetElement.querySelector('.draggableElement');
        if (existingRune) {
          returnRuneToList(existingRune);
        }
        targetElement.appendChild(event.target); // Rune in das Feld setzen
        hizufuegenBeschreibung(getRuneById(event.target.id), getLageById(matchingItem, targetElement.textContent.slice(0, 2)));
      }

      // Position zurücksetzen, damit es korrekt platziert ist
      event.target.style.position = "static";
      event.target.style.zIndex = "auto";
    });
  });
}
