/* --------------Scripts for Setting Language and Theme---------------- */

/* ----- Constructing objects to render */
class Hardskill {
    constructor(name, time, related) {
        this.name = name;
        this.time = time;
        this.related = related;
    }
} 

const html5 = new Hardskill('HTML5', 2, ['none']);
const css3 = new Hardskill('CSS3', 2, ['Bootstrap','Sass']);
const js = new Hardskill ('Javascript', 2, ['JQuery']);
const react = new Hardskill ('React JS', 1, ['none']);
const node = new Hardskill ('Node JS', 1, ['passport', 'dotenv', 'log4js', 'mocha', '+...']);
const express = new Hardskill ('Express JS', 1, ['Handlebars']); //add special names
const mongo = new Hardskill ('Mongo DB', 1, ['mongoose']);
const git = new Hardskill ('Git', 2, ['GitHub']);
const photoshop = new Hardskill ('Photoshop', 5, ['none']);
const illustrator = new Hardskill ('Illustrator', 2, ['none']);
const premierePro = new Hardskill ('Premiere Pro', 5, ['none']);
const blender = new Hardskill ('Blender', 5, ['none']);

const hardSkills = [
    html5,
    css3,
    js,
    react,
    node,
    express,
    mongo,
    git,
    photoshop,
    illustrator,
    premierePro,
    blender
]

/*----- Selecting DOM elements */

let lightTrigger = Array.from(document.getElementsByClassName('set_light')); //Light theme trigger
let techieLogos = Array.from(document.getElementsByClassName('tech_logo'));
let home = document.getElementById('home'); //Burger button... can you believe?
let burgerButton = document.getElementById('burguer-button');
let menuFinder = document.getElementById('menu-finder');
let hardSkilssContainer = document.getElementById('hardskills-container');
let techCard = false;
console.log(menuFinder);

/*----- Setting default values*/

//Language
let currentLanguage = 'esp';
let defaultHiddenText = Array.from(document.getElementsByClassName('eng')); 

for (text of defaultHiddenText) {
    text.style.display = 'none';
}

lightTrigger.forEach((trigger) => { trigger.style.display = 'none' });

/*----- Functions */

function changeLanguage(fromLanguage, toLanguage) {
    if (techCard) {
        deleteTechCard();
    };
    console.log('changing language');
    let hideText = Array.from(document.getElementsByClassName(fromLanguage));
    let showText = Array.from(document.getElementsByClassName(toLanguage));
    for (text of showText) {
        text.style.display = null;
    }
    for (text of hideText) {
        text.style.display = 'none';
    }
    currentLanguage = toLanguage;
}

function changeTheme(toTheme) {
    let fromTheme;
    toTheme == 'light' ? fromTheme = 'dark' : fromTheme = 'light'
    let iconsToHide = Array.from(document.getElementsByClassName('set_' + toTheme)); 
    let iconsToShow = Array.from(document.getElementsByClassName(('set_' + fromTheme))); 
    iconsToHide.forEach((icon) => {
        icon.style.display = 'none';
    })
    iconsToShow.forEach((icon) => {
        icon.style.display = null;
    })
    let tags = Array.from(document.getElementsByClassName(fromTheme));
    tags.forEach((element) => {
        element.classList.replace(fromTheme, toTheme);
    });
}

function deleteTechCard() {
    hardSkilssContainer.removeChild(hardSkilssContainer.lastElementChild);
    techCard = false;
}

/* ----- Scrolling animation for Burger Menu */

const observer = new IntersectionObserver ((entry) => {
    console.log(entry);
    entry.forEach((entry) => {
        if(entry.isIntersecting == false) {
            menuFinder.style.display = 'block';
            setTimeout(() => {
                burgerButton.classList.add('show-burguer'); 
            }, "100");
        } else {
            burgerButton.classList.remove('show-burguer');
            setTimeout(() => {
                console.log('wait') 
                menuFinder.style.display = 'none'; 
            }, "2000");
        }
    })
    
}) //observer for burger-button

observer.observe(home);

/* ----- Tech Card Rendering */

const techCardRenderer = e => {

    let techName = e.target.alt;
    let techLogo = e.target.src;
    let reqTech = hardSkills.find(element => element.name == techName);
    let timeText;
    let mention;
    let mentionContent = reqTech.related.join(', ');
    if(currentLanguage == 'esp') {
        timeText = 'año/s de exp.'
        mention= 'Mención Especial'
    } else {
        timeText = 'year/s of exp.'
        mention = 'Special Mention'
    }
    let card; 
    if (techCard) {
        card = document.getElementById('tech_card');
    } else {
        card = document.createElement('div');
        card.setAttribute('id', 'tech_card');
        hardSkilssContainer.appendChild(card);
        techCard = true;
    }
    card.innerHTML =`
        <div class="close" alt="close/cerrar" onclick="deleteTechCard()">X</div>
        <img class="tech_logo" src="${techLogo}" alt="HTML5"/>
        <div class="tech_info">
            <p class="tech_name">${reqTech.name}</p>
            <P>⏱: ${reqTech.time} ${timeText}</P>
            <p>${mention}:
                <span id="mentions">${mentionContent}</span>
            </p>    
        </div>
    `;
    setTimeout(() => {
        console.log('wait')  
        card.classList.add('show')
    }, "100");
}

/*----- DOM event listeners */ 

/* espTrigger.addEventListener('click', changeLanguage(engText, espText));
engTrigger.addEventListener('click', changeLanguage(espText, engText));
for some reason this executes at starting and wont listen*/

techieLogos.forEach(logo => {
    logo.addEventListener("click", techCardRenderer);
})// Clicks on Hard Skill tech logos

