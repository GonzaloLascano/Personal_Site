/* --------------Scripts for Setting Language and Theme---------------- */

/*----- Selecting DOM elements */

let engText = document.getElementsByClassName('eng'); //English text
let espText = document.getElementsByClassName('esp'); //Spanish text
let lightTrigger = document.getElementById('set_light'); //Light theme trigger
let home = document.getElementById('home'); //Burger button... can you believe?
let burgerButton = document.getElementById('burguer-button')

/*----- Setting default values*/

//Language

for (text of engText) {
    text.style.display = 'none';
}
lightTrigger.style.display = 'none';

/*----- Functions */

function changeLanguage(fromLanguage, toLanguage) {
    console.log('changing language');
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
    let iconToHide = document.getElementById('set_' + toTheme);
    let iconToShow = document.getElementById('set_' + fromTheme);
    iconToHide.style.display = 'none';
    iconToShow.style.display = null;
    let tags = Array.from(document.getElementsByClassName(fromTheme));
    tags.forEach((element) => {
        element.classList.replace(fromTheme, toTheme);
    });
}

/*----- DOM event listeners */ 

/* espTrigger.addEventListener('click', changeLanguage(engText, espText));
engTrigger.addEventListener('click', changeLanguage(espText, engText));
for some reason this executes at starting and wont listen*/

/* ----- Scrolling animation for Burger Menu */

const observer = new IntersectionObserver ((entry) => {
    console.log(entry);
    entry.forEach((entry) => {
        if(entry.isIntersecting == false) {
            burgerButton.classList.add('show-burguer');
        } else {
            burgerButton.classList.remove('show-burguer')
        }
    })
    
}) //observer for burger-button

observer.observe(home);