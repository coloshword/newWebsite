let body = "";

async function sampleFunc(url, meal) {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    body = await response.json();
    console.log(body);
    displayFood(body, meal)
}

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}


sampleFunc('http://172.24.49.229:8080/breakfast', "Breakfast");
sleepFor(100);
sampleFunc('http://172.24.49.229:8080/lunch', "Lunch");
sleepFor(100);
sampleFunc('http://172.24.49.229:8080/dinner', "Dinner");


function displayFood(dict, meal) {
    var addText = document.querySelector(".putFood");
    let h4 = document.createElement("h4");
    h4.setAttribute("style", "text-align: center; color: rgb(235, 155, 76)");
    h4.appendChild(document.createTextNode("<<" + meal + ">>"));
    addText.appendChild(h4);
    var foodContainer = document.createElement("div");
    foodContainer.classList = "itemBox";
    addText.appendChild(foodContainer);
    for(var key in dict) {
        item = dict[key];
        let displayBox = document.createElement("div");
        displayBox.classList = "displayBox"
        let ribbon = document.createElement("div");
        ribbon.classList = "topRibbon";
        let h6 = document.createElement("h6");
        h6.setAttribute("style", "text-align: center;")
        h6.appendChild(document.createTextNode(item.item));
        displayBox.appendChild(ribbon);
        displayBox.appendChild(h6);
        foodContainer.appendChild(displayBox);
    }
}


// function displayFood(meal, dict) {
//     var mainContainer = document.querySelector(".putFood");
//     let h4 = document.createElement("h4");
//     h4.setAttribute("style", "text-align: center; color: rgb(235, 155, 76)");
//     h4.appendChild(document.createTextNode("<<" + meal + ">>"));
//     var textBox = document.createElement("div");
//     textBox.classList.add("textBox");
//     textBox.appendChild(h4);
//     mainContainer.appendChild(textBox);
//     // create the div containing the input boxes
//     var inputBox = document.createElement("div");
//     inputBox.classList.add("inputBox")
//     mainContainer.appendChild(inputBox);
//     for(var key in dict[key]) {
//         item = dict[key];
//         let displayBox = document.createElement("div");
//         displayBox.classList.add("displayBox");
//         let ribbon = document.createElement("div");
//         ribbon.classList.add("topRibbon");
//         let h6 = document.createElement("h6");
//         h6.setAttribute("style", "text-align: center;");
//         h6.appendChild(document.createTextNode(key + "\n" + item));
//         displayBox.appendChild(ribbon);
//         displayBox.appendChild(h6);
//         inputBox.appendChild(displayBox);
//         console.log("Upt to here")
//     }
// }

//displayFood(foods, "Breakfast")