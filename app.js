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
    title: `Galaxy S22`,
    price: 40,
    image: `https://m.media-amazon.com/images/I/51TddGCg2QL.__AC_SX300_SY300_QL70_ML2_.jpg`,
    description: `Samsung`
}
let game2 = {
    title: `iPhone 14 PRO Max`,
    price: 70,
    image: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753619946`,
    description: `Apple`
}
let game3 = {
    title: `Google Pixel 7`,
    price: 120,
    image: `https://www.bell.ca/Styles/wireless/Pixel7Pro/Google_Pixel_7_Pro_Obsidian_5g_plus_lrg1_en.png`,
    description: `Google`
}

// let selectJson = JSON.stringify(selection);
// Cookies.set(`userSelection`, selectJson);

let selection1 = document.getElementById(`choice1`);
selection1.insertAdjacentHTML(`afterbegin`, `<h2>${game1.title}</h2>`);
selection1.insertAdjacentHTML(`afterbegin`, `<img src="${game1.image}" alt="Samsung Galaxy"</>`);
selection1.insertAdjacentHTML(`afterbegin`, `<p>Price: ${game1.price}</p>`);
selection1.insertAdjacentHTML(`afterbegin`, `<p>${game1.description}</p>`);

selection2 = document.getElementById(`choice2`);
selection2.insertAdjacentHTML(`afterbegin`, `<h2>${game2.title}</h2>`);
selection2.insertAdjacentHTML(`afterbegin`, `<img src="${game2.image}" alt="Apple iPhone 14"</>`);
selection2.insertAdjacentHTML(`afterbegin`, `<p>Price: ${pgame2.price}</p>`);
selection2.insertAdjacentHTML(`afterbegin`, `<p>${game2.description}</p>`);

selection3 = document.getElementById(`choice3`);
selection3.insertAdjacentHTML(`afterbegin`, `<h2>${game3.title}</h2>`);
selection3.insertAdjacentHTML(`afterbegin`, `<img src="${game3.image}" alt="Google Pixel 7"</>`);
selection3.insertAdjacentHTML(`afterbegin`, `<p>Price: ${game3.price}</p>`);
selection3.insertAdjacentHTML(`afterbegin`, `<p>${game3.description}</p>`);

let choices = []
selection1.querySelector(`button`).addEventListener(`click`, choiceHandler);
selection2.querySelector(`button`).addEventListener(`click`, choiceHandler);
selection3.querySelector(`button`).addEventListener(`click`, choiceHandler);
