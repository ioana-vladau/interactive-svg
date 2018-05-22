"use strict";
 
document.addEventListener("DOMContentLoaded", ()=>{
    loadSvg();
});


//load pie.svg into the DOM
async function loadSvg(){
    const svgData = await fetch("pie.svg");
    const mySvg = await svgData.text();
    document.querySelector("#pie").innerHTML = mySvg;

    let paths = document.querySelectorAll("path");
    paths.forEach(function(e){
        let color = window.getComputedStyle(e, null).getPropertyValue("fill");

    //find the id's and change color on the pieslices on mouseover
       e.addEventListener("mouseover", function(){
        // console.log(color);
            e.setAttribute("fill", "pink");
       });
    //change the color back on mouseout

       e.addEventListener("mouseout", function(){
            e.setAttribute("fill", color);
       })

    })
}


// paths.forEach(function(e){
//     function changeColor(e){
//          e.setAttribute("fill", "pink")
//     }
//     e.addEventListener("mouseover", function changeColor(){
//         e.setAttribute("fill", "pink")
//     })
