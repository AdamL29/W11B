let selectionJson = Cookies.get(`gameSelect`);
let selection = JSON.parse(selectionJson);
selection.price *= 0.2;

document.body.insertAdjacentHTML(`afterbegin`, `<h2>${selection.title}</h2>`);
document.body.insertAdjacentHTML(`afterbegin`, `<img src="${selection.image}" alt="Game Image"</>`);
document.body.insertAdjacentHTML(`afterbegin`, `<p>Price: ${selection.price}</p>`);
document.body.insertAdjacentHTML(`afterbegin`, `<p>${selection.description}</p>`);
