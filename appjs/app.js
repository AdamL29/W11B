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
    title: `Pokemon Scarlet`,
    price: 80,
    image: `https://assets-prd.ignimgs.com/2022/08/03/pokemon-scarlet-1659542292648.jpg`,
    descript: `Pokemon game that has is the other half of Pokemon Violet`
}
let game2 = {
    title: `Minecraft`,
    price: 40,
    image: `https://compass-ssl.xbox.com/assets/13/07/1307d85d-e58d-44b6-8734-22577a44941e.jpg?n=Minecraft-2017_sharing_200x200.jpg`,
    descript: `A building game that is made for all ages`
}
let game3 = {
    title: `Modern Warfare 2 Vault Edition`,
    price: 130,
    image: `https://image.api.playstation.com/vulcan/ap/rnd/202205/2800/1hUaZ2xTIXDRch0KRb3Bzsgf.png`,
    descript: `A Mature rated game for those who like combat and shooting.`
}





let selection1 = document.getElementById(`option1`);
selection1.insertAdjacentHTML(`afterbegin`, `<p>${game1.descript}</p>`);
selection1.insertAdjacentHTML(`afterbegin`, `<img src="${game1.image}" alt=""</>`);
selection1.insertAdjacentHTML(`afterbegin`, `<p>Price: ${game1.price}</p>`);
selection1.insertAdjacentHTML(`afterbegin`, `<h2>${game1.title}</h2>`);


selection2 = document.getElementById(`option2`);
selection2.insertAdjacentHTML(`afterbegin`, `<p>${game2.descript}</p>`);
selection2.insertAdjacentHTML(`afterbegin`, `<img src="${game2.image}" alt=""</>`);
selection2.insertAdjacentHTML(`afterbegin`, `<p>Price: ${game2.price}</p>`);
selection2.insertAdjacentHTML(`afterbegin`, `<h2>${game2.title}</h2>`);


selection3 = document.getElementById(`option3`);
selection3.insertAdjacentHTML(`afterbegin`, `<p>${game3.descript}</p>`);
selection3.insertAdjacentHTML(`afterbegin`, `<img src="${game3.image}" alt=""</>`);
selection3.insertAdjacentHTML(`afterbegin`, `<p>Price: ${game3.price}</p>`);
selection3.insertAdjacentHTML(`afterbegin`, `<h2>${game3.title}</h2>`);


let choices = []
selection1.querySelector(`button`).addEventListener(`click`, choiceHandler);
selection2.querySelector(`button`).addEventListener(`click`, choiceHandler);
selection3.querySelector(`button`).addEventListener(`click`, choiceHandler);
