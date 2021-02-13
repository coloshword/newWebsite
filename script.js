let body = "";

async function sampleFunc(url, meal, classModifier) {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    body = await response.json();
    console.log(body);
    displayFood(body, meal, classModifier)
}

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}


sampleFunc('http://172.24.49.229:8080/breakfast', "Breakfast", 0);
sleepFor(150);
sampleFunc('http://172.24.49.229:8080/lunch', "Lunch", 1);
sleepFor(150);
sampleFunc('http://172.24.49.229:8080/dinner', "Dinner", 2);


function displayFood(dict, meal, classModifier) {
    var addText = document.querySelector(".putFood" + classModifier);
    let h4 = document.createElement("h4");
    let color = ["(235, 155, 76)", "(201, 71, 245)", "(79,134,247)"];
    h4.setAttribute("style", "text-align: center; color: rgb" + color[classModifier]);
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
        ribbon.classList = ("topRibbon" + classModifier);
        let h6 = document.createElement("h6");
        h6.setAttribute("style", "text-align: center;")
        h6.appendChild(document.createTextNode(item.item));
        displayBox.appendChild(ribbon);
        displayBox.appendChild(h6);
        displayBox.appendChild(createButtonControl());
        foodContainer.appendChild(displayBox);
        // add buttons: red
    }
}

function createButton(text) {
    let minusButton = document.createElement("button");
    minusButton.innerHTML = text;
    if(text == '+') {
        minusButton.classList = "buttonPlus";
    }
    else {
        minusButton.classList = "buttonMinus";
    }
    return minusButton;
}

function createButtonControl() {
    //create div
    let div = document.createElement("div");
    div.classList = "buttonControl";
    minusButton = createButton("-");
    addButton = createButton("+");
    let inputForm = document.createElement("input");
    inputForm.setAttribute("type", "number");
    inputForm.setAttribute("min", "0");
    div.appendChild(minusButton);
    div.appendChild(inputForm);
    div.appendChild(addButton);
    return div;
}