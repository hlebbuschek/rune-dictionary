// Live Server; Prettier - Code formatter; Reshaper 9 Keybiding

const runen = [
  {
    buchstabe : 'f',
    name : 'Fehu',
    bedeutung : 'Rinder',
    haupt : ['Heim', 'Geld'],
    umdrehene : ['Problemen']
  },{
    buchstabe : 'u',
    name : 'Ursuz',
    bedeutung : 'Kraft',
    haupt : ['Macht'],
    umdrehene : ['']
  },{
    buchstabe : 'th',
    name : 'Thurisaz',
    bedeutung : 'Stachel',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'a',
    name : 'Ansuz',
    bedeutung : 'Götter',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'r',
    name : 'Raido',
    bedeutung : 'Weg',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'k',
    name : 'Kenaz',
    bedeutung : 'Feuer',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'g',
    name : 'Gebo',
    bedeutung : 'Geschenk',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'w',
    name : 'Wunjo',
    bedeutung : 'Glück',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'h',
    name : 'Hagalaz',
    bedeutung : 'Zerstörung',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'n',
    name : 'Nauthiz',
    bedeutung : 'Not',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'i',
    name : 'Isaz',
    bedeutung : 'Eis',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'j',
    name : 'Jera',
    bedeutung : 'Ernte',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'e',
    name : 'Eihwaz',
    bedeutung : 'Neuanfang',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'p',
    name : 'Perth',
    bedeutung : 'Schicksal',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'z',
    name : 'Algiz',
    bedeutung : 'Schutz',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 's',
    name : 'Sowilo',
    bedeutung : 'Sonne',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 't',
    name : 'Tiwaz',
    bedeutung : 'Mut',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'b',
    name : 'Berkana',
    bedeutung : 'Birke',
    haupt : ['Früchtbarkeit'],
    umdrehene : ['']
  },{
    buchstabe : 'e',
    name : 'Ehwaz',
    bedeutung : 'Pferd',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'm',
    name : 'Mannaz',
    bedeutung : 'Mensch',
    haupt : ['Intuition'],
    umdrehene : ['']
  },{
    buchstabe : 'l',
    name : 'Laguz',
    bedeutung : 'Wasser',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'ing',
    name : 'Ingwaz',
    bedeutung : 'Neuanfang',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'd',
    name : 'Dagaz',
    bedeutung : 'Tag',
    haupt : [''],
    umdrehene : ['']
  },{
    buchstabe : 'o',
    name : 'Othala',
    bedeutung : 'Erbe',
    haupt : [''],
    umdrehene : ['']
  },
];
renderRunenListe();

function renderRunenListe() {
  const runenListe = document.querySelector('.runen-liste');
  runenListe.innerHTML = ''; 
  runen.forEach(item => {
      runenListe.innerHTML += `
      <div class="kaestchen draggableElement" id="draggableElement_${item.name}" draggable="true">
        <img src="img/runen/${item.name}.png" alt="${item.name}">
      </div>`;
  });

  document.querySelectorAll('.draggableElement')
  .forEach(element => {
    element.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", element.id);
    });
  });
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
        renderRunenListe();
        document.querySelector('.layot-beschreibung').innerHTML = '';
    }
  });
});

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

            <p><ins>Hauptbedeutung: </ins><span class="beschreibung">${rune.haupt.toString()}</span></p>


            <p><ins>Umdrehene Bedeutung: </ins><span class="beschreibung">${rune.umdrehene}</span></p>

        </div>
      </div>`;
}

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
      targetElement.appendChild(event.target); // Rune in das Feld setzen
    }

    // Position zurücksetzen, damit es korrekt platziert ist
    event.target.style.position = "static";
    event.target.style.zIndex = "auto";
  });
});

if ('ontouchstart' in window) {
  // Mobile Touch Events aktivieren
  enableTouchDragAndDrop();
} else {
  // Klassisches Drag & Drop aktivieren
  enableMouseDragAndDrop();
}
