# Exercise 1#
### A: Loading the SVG
* Make a new html document
* load layers.svg into the DOM
* find the id's for the bike, phone and computer
* show some text about the object when you click an id

### B: Add dynamic text
* put your text in a json file
* load the json
* show text on mouseover


You can use a async function and fetch like this to load your files.:
     

            async function loadSvg() {
            // 1. Load svg
            //------------------------------------------------------------	
            let mySvg = await fetch("layers.svg");
            let svg = await mySvg.text();

            document.querySelector("#graphic").innerHTML = svg;
             }
       
         
