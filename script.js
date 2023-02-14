/* --------------Scripts for Setting Language and Theme---------------- */

/*----- Selecting DOM elements */

let dowloadButton = document.getElementById('download_cv_eng'); //English download button
let engText = document.getElementsByClassName('eng'); //English text
let espText = document.getElementsByClassName('esp'); //Spanish text
let espTrigger = document.getElementById('set_esp'); //Spanish trigger button
let engTrigger = document.getElementById('set_eng'); //English trigger button
let lightTrigger = document.getElementById('set_light'); //Light theme trigger
let darkTrigger = document.getElementById('set_dark'); //Light theme trigger

/*----- Setting default values*/

//Language
dowloadButton.style.display = 'none';
for (text of espText) {
    text.style.display = 'none';
}

//Theme
lightTrigger.style.display= 'none';

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

/*----- DOM event listeners */ 

/* espTrigger.addEventListener('click', changeLanguage(engText, espText));
engTrigger.addEventListener('click', changeLanguage(espText, engText));
for some reason this executes at starting and wont listen*/