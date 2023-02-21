/* --------------Scripts for Setting Language and Theme---------------- */

/* ----- Constructing objects to render */

let currentLanguage = 'esp'
class Hardskill {
    constructor(name, time, related) {
        this.name = name;
        this.time = time;
        this.related = related;
    }
} 

const html5 = new Hardskill('HTML5', 2, 'none');
const css3 = new Hardskill('CSS3', 2, [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
]);
const js = new Hardskill ('Javascript', 2, 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg');
const react = new Hardskill ('React JS', 1, 'none');
const node = new Hardskill ('Node JS', 1, 'none');
const express = new Hardskill ('Express JS', 1, 'none'); //add special names
const mongo = new Hardskill ('Mongo DB', 1, 'none');
const git = new Hardskill ('Git', 2, ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg']);
const photoshop = new Hardskill ('Photoshop', 5, 'none');
const illustrator = new Hardskill ('Illustrator', 2, 'none');
const premierePro = new Hardskill ('Premiere Pro', 5, 'none');
const blender = new Hardskill ('Blender', 5, 'none');

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

let engText = document.getElementsByClassName('eng'); //English text
let espText = document.getElementsByClassName('esp'); //Spanish text
let lightTrigger = Array.from(document.getElementsByClassName('set_light')); //Light theme trigger
let techieLogos = Array.from(document.getElementsByClassName('tech_logo'));
let home = document.getElementById('home'); //Burger button... can you believe?
let burgerButton = document.getElementById('burguer-button');
let menuFinder = document.getElementById('menu-finder');
let hardSkilssContainer = document.getElementById('hardskills-container');
console.log(menuFinder);

/*----- Setting default values*/

//Language

for (text of engText) {
    text.style.display = 'none';
}

lightTrigger.forEach((trigger) => { trigger.style.display = 'none' });

/*----- Functions */

function changeLanguage(fromLanguage, toLanguage) {
    console.log('changing language');
    currentLanguage = toLanguage;
    for (text of toLanguage) {
        text.style.display = null;
    }
    for (text of fromLanguage) {
        text.style.display = 'none';
    }
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
    console.log('holandaaa');
    hardSkilssContainer.removeChild(hardSkilssContainer.lastElementChild);
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
    console.log(currentLanguage);
    let reqTech = hardSkills.find(element => element.name == techName);
    let timeText
    let mentionText
    if(currentLanguage == 'esp') {
        timeText = 'año/s de exp.'
        mentionText = 'Mención Especial'
    } else {
        timeText = 'year/s of exp.'
        mentionText = 'Special Mention'
    }
    let card = document.createElement('div');
    card.classList.add('tech_card');
    card.innerHTML =`
        <div class="close" alt="close/cerrar" onclick="deleteTechCard()">X</div>
        <img class="tech_logo" src="${techLogo}" alt="HTML5"/>
        <div class="tech_info">
            <p class="tech_name">${reqTech.name}</p>
            <P>⏱: ${reqTech.time} ${timeText}</P>
            <p>${mentionText}:
                <span id="mentions">none</span>
            </p>    
        </div>
    `
    hardSkilssContainer.appendChild(card);
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

