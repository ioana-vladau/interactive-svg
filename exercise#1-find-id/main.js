"use strict";
 
 //load layers.svg into the DOM
document.addEventListener("DOMContentLoaded", ()=>{
    loadSvg();
    loadJSON();
});


//load layers.svg into the DOM
async function loadSvg(){
    const svgData = await fetch("layers.svg");
    const mySvg = await svgData.text();
    document.querySelector("#layers").innerHTML = mySvg;
}

//put your text in a json file
//load the json
async function loadJSON(){
    const jsonData = await fetch("items.json");
    const myJSON = await jsonData.json();
    myJSON.forEach(data => showInfo(data));
}

//show text on mouseover
function showInfo(data){
    document.addEventListener("mouseover", event => {
        const itemId = event.target.id;
        // find the ids for the bike, phone and computer
        //show some text about the object when you click an id
        if (itemId === data.id)
            document.querySelector("#info").textContent = `${data.description}, price: ${data.price} kr`;
    })
}