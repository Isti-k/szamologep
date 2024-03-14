import { gombok } from "./gombok.js";

const szamgomb = document.getElementsByClassName("szamok")[0];
szamgomb.innerHTML += gombok();
const szamokgomb = document.querySelectorAll(".gombok");

for (let index = 0; index < szamokgomb.length; index++) {
    szamokgomb[index].addEventListener("click", katt);
};
const kijelzes = document.getElementsByClassName("kifejezes")[0];


function katt(event){
    kijelzes.innerHTML += event.target.innerHTML;
}

const plusz = document.querySelector("#osszeadas");
plusz.addEventListener("click", katt);

const minusz = document.querySelector("#kivonas");
minusz.addEventListener("click", katt);

const oszt = document.querySelector("#osztas");
oszt.addEventListener("click", katt);

const szor = document.querySelector("#szorzas");
szor.addEventListener("click", katt);

const pont = document.querySelector("#pont");
pont.addEventListener("click", katt);



