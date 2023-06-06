// Names

const nameCats = [
    'Кот с усами',
    'Кошка с колпаком',
    'Кот с тыквой',
    'Кошка-балерина'
]

for (let i = 0; i < nameCats.length; i++) {
    const dataNameCats = document.createTextNode(nameCats[i]);
    const textCats = document.getElementById(`name-cat-${i+1}`);
    textCats.appendChild(dataNameCats);
}

// Images

const imageCats = [
    'img/cats/01.png',
    'img/cats/02.png',
    'img/cats/03.png',
    'img/cats/04.png',
]

const imagePaths = document.querySelectorAll('.thumb img')

for (let i = 0; i < imagePaths.length; i++) {
    imagePaths[i].src = imageCats[i];
    imagePaths[i].alt = nameCats[i];
}

// List

const infoCats = [
    { 
        type: "Гладкошерстный", 
        color: "Белый с рыжими глазами", 
        vaccine: "Вакцинирована",
        passport: "Есть ветпаспорт",
        things: "Приучен к когтеточке",
        tray: "Знает лоточек"
    },
    { 
        type: "Гладкошерстный", 
        color: "Трёхцветная с зелеными глазами", 
        vaccine: "Вакцинирована",
        passport: "Есть ветпаспорт",
        things: "Приучен к когтеточке",
        tray: "Знает лоточек"
    },
    { 
        type: "Гладкошерстный", 
        color: "Черно-белый с зелеными глазами", 
        vaccine: "Вакцинирована",
        passport: "Есть ветпаспорт",
        things: "Приучен к когтеточке",
        tray: "Знает лоточек"
    },
    { 
        type: "Гладкошерстный", 
        color: "Трёхцветная с зелеными глазами", 
        vaccine: "Вакцинирована",
        passport: "Есть ветпаспорт",
        things: "Приучен к когтеточке",
        tray: "Знает лоточек"
    },
];

for (let i = 0; i < infoCats.length; i++) {
    const cat = infoCats[i];
    const infoList = `
      <ul>
        <li>${cat.type}</li>
        <li>${cat.color}</li>
        <li>${cat.vaccine}</li>
        <li>${cat.passport}</li>
        <li>${cat.things}</li>
        <li>${cat.tray}</li>
      </ul>
    `;
    const targetElement = document.querySelector(`#name-cat-${i+1}`);
    targetElement.insertAdjacentHTML('afterend', infoList);
}
