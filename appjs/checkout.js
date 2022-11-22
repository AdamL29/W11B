let selectionJson = Cookies.get(`gameSelect`);
let select = JSON.parse(selectionJson);


document.body.insertAdjacentHTML(`afterbegin`, `<p>${select.descript}</p>`);
document.body.insertAdjacentHTML(`afterbegin`, `<img src="${select.image}" alt="Game Image"</>`);
document.body.insertAdjacentHTML(`afterbegin`, `<p>Price: ${select.price}</p>`);
document.body.insertAdjacentHTML(`afterbegin`, `<h2>${select.title}</h2>`);

