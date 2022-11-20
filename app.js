function choiceHandler(event){
    let parent = event.target.parentElement;
    if (parent.id == `option1`){
        let gameJson = JSON.stringify(game1);
        Cookies.set(`gameSelect`, gameJson)
    } else if (parent.id == `option2`){
        let gameJson = JSON.stringify(game2);
        Cookies.set(`gameSelect`, gameJson)
    } else if (parent.id == `option3`){
        let gameJson = JSON.stringify(game3);
        Cookies.set(`gameSelect`, gameJson)
    }
}

let game1 = {
    title: ``,
    price: 40,
    image: ``,
    descript: ``
}
let game2 = {
    title: ``,
    price: 70,
    image: ``,
    descript: ``
}
let game3 = {
    title: ``,
    price: 120,
    image: ``,
    descript: ``
}

// let selectJson = JSON.stringify(selection);
// Cookies.set(`userSelection`, selectJson);

let selection1 = document.getElementById(`option1`);
selection1.insertAdjacentHTML(`afterbegin`, `<h2>${game1.title}</h2>`);
selection1.insertAdjacentHTML(`afterbegin`, `<img src="${game1.image}" alt="Samsung Galaxy"</>`);
selection1.insertAdjacentHTML(`afterbegin`, `<p>Price: ${game1.price}</p>`);
selection1.insertAdjacentHTML(`afterbegin`, `<p>${game1.descript}</p>`);

selection2 = document.getElementById(`option2`);
selection2.insertAdjacentHTML(`afterbegin`, `<h2>${game2.title}</h2>`);
selection2.insertAdjacentHTML(`afterbegin`, `<img src="${game2.image}" alt="Apple iPhone 14"</>`);
selection2.insertAdjacentHTML(`afterbegin`, `<p>Price: ${pgame2.price}</p>`);
selection2.insertAdjacentHTML(`afterbegin`, `<p>${game2.descript}</p>`);

selection3 = document.getElementById(`option3`);
selection3.insertAdjacentHTML(`afterbegin`, `<h2>${game3.title}</h2>`);
selection3.insertAdjacentHTML(`afterbegin`, `<img src="${game3.image}" alt="Google Pixel 7"</>`);
selection3.insertAdjacentHTML(`afterbegin`, `<p>Price: ${game3.price}</p>`);
selection3.insertAdjacentHTML(`afterbegin`, `<p>${game3.descript}</p>`);

let choices = []
selection1.querySelector(`button`).addEventListener(`click`, choiceHandler);
selection2.querySelector(`button`).addEventListener(`click`, choiceHandler);
selection3.querySelector(`button`).addEventListener(`click`, choiceHandler);
