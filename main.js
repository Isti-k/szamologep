import { gombok } from "./gombok.js";

const szamgomb = document.getElementsByClassName("szamok")[0];
szamgomb.innerHTML += gombok();
const szamokgomb = document.querySelectorAll(".gombok")

for (let index = 0; index < szamokgomb.length; index++) {
    szamokgomb[index].addEventListener("click", katt);
}

const kijelzes = document.getElementsByClassName("kifejezes")[0];

function katt(event){
    kijelzes.innerHTML += event.target.innerHTML
}

