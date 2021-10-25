"use strict";

const p_jacket = 5000;
const p_shirt = 2200;
const p_joggers =3600;
const p_shoes = 4200;
let quantities = new Array(4);

function calc_Total(q_jacket, q_shirt, q_joggers, q_shoes)
{
    return q_jacket*p_jacket + q_shirt*p_shirt + q_joggers*p_joggers + q_shoes*p_shoes;
}

function giveTotal()
{
    let a = parseInt(quantities[0].value);
    console.log(a);
    let b = parseInt(quantities[1].value);
    let c = parseInt(quantities[2].value);
    let d = parseInt(quantities[3].value);
    let total = document.getElementById("total");
    console.log(total.innerText);
    total.innerText = `The total is: ${calc_Total(a,b,c,d)}`;
    console.log(total.innerText);
    total.classList.remove("hidden");
}

window.onload = function()
{
    console.log("Window loaded");
    const cards = document.getElementsByClassName("card")
    Array.from(cards).forEach(function (card, index)
    {
        let input = card.querySelector("input");
        input.addEventListener("input", giveTotal);
        quantities[index] = card.querySelector("input");
    });
    console.log(quantities);
    console.log(quantities[0]);
    console.log(quantities[0].value);

}