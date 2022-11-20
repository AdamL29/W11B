let selectionJson = Cookies.get(`gameSelect`);
let select = JSON.parse(selectionJson);
select.price *= 0.2;

document.body.insertAdjacentHTML(`afterbegin`, `<h2>${select.title}</h2>`);
document.body.insertAdjacentHTML(`afterbegin`, `<img src="${select.image}" alt="Game Image"</>`);
document.body.insertAdjacentHTML(`afterbegin`, `<p>Price: ${select.price}</p>`);
document.body.insertAdjacentHTML(`afterbegin`, `<p>${select.description}</p>`);
