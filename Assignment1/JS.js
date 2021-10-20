//accordion

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

         const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
         if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
           currentlyActiveAccordionItemHeader.classList.toggle("active");
           currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
         }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});

//greetings

const input = document.querySelector('input');

function greetings(e) {

    
    const log = document.getElementById('values');
    log.textContent = "Salut " + e.target.value;

}

input.addEventListener('input', greetings);

//currentTime

function currentTime() {

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";


    if (hh > 12) {
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerText = time;

    var t = setTimeout(function () { currentTime() }, 1000);

}

currentTime();

//birthDay

function calculateAge(event) {

    const now = new Date();
    const birth = new Date(document.getElementById("birthDate").value);
    const diff = Math.abs(now - birth);
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

    let message = document.querySelector("#dates");
    message.textContent = `Felicitari! ai ${age} ani.`;
}

const button = document.querySelector("button");
button.addEventListener("click", (event) => calculateAge(event));

//form

function formSub(event) {

    const name = document.getElementById("num").value;
    const email = document.getElementById("ema").value;
    const bday = document.getElementById("bday").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const arr = Array.from(document.querySelectorAll("input[name='personality']:checked")).map((elem) => " " + elem.value)

    let message = document.querySelector("#formSub");

    message.textContent = `Bună ziua ${gender} ${name}, născut în data de ${bday}. În legătură cu:${arr}; vă vom contacta pe adresa de mail ${email}.`;
    
}

const fullForm = document.getElementById("formId");
fullForm.addEventListener("click", (event) => formSub(event));

//--combo--

//video
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

//form

function lasting(event) {

    const nume = document.getElementById("nume").value;
    const mail = document.getElementById("email").value;
    const birth = document.getElementById("birthDay").value;
    const gen = document.querySelector('input[name="gen"]:checked')?.value;
    const arr2 = Array.from(document.querySelectorAll("input[name='pers']:checked")).map((elem) => " " + elem.value)

    const acu = new Date();
    const inainte = new Date(document.getElementById("birthDay").value);
    const differ = Math.abs(acu - inainte);
    const varsta = Math.floor(differ / (1000 * 60 * 60 * 24 * 365));

    let mesaj = document.querySelector("#masa");

    mesaj.textContent = `Salut ${nume}, ai ${varsta} de ani, îți plac ${gen} și culorile care îți plac sunt:${arr2}; te voi contacta pe adresa de mail ${mail}.`;

}

const last = document.getElementById("lastForm");
last.addEventListener("click", (event) => lasting(event));