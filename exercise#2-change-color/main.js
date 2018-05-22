"use strict";
 
document.addEventListener("DOMContentLoaded", ()=>{
    loadSvg();
});


//load pie.svg into the DOM
async function loadSvg(){
    const svgData = await fetch("pie.svg");
    const mySvg = await svgData.text();
    document.querySelector("#pie").innerHTML = mySvg;
}

//fing the ids and change color of the slices on mouseover
document.addEventListener("mouseover", event => {
    const item = event.target;
    const id = event.target.id;
    const color = event.target.getAttribute("fill");

    if(id !== "Layer_1" && id !== "")
        item.setAttribute("fill", "pink");

        //change color back on mouseout
        document.addEventListener("mouseout", () => {
            item.setAttribute("fill", color);
        })
})