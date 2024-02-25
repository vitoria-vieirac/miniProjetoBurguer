const showAllButton = document.getElementById("showAllButton");
const mapAllButton = document.getElementById("mapAllButton");
const sumAllButton = document.getElementById("sumAllButton");
const filterItensButton = document.getElementById("filterItensButton");
const list = document.querySelector("ul");

const formatCurrency = (value) => {
    return value.toLocaleString('pt-br', 
    {style: 'currency', 
    currency: 'BRL'})
}

const showAll = (productsArray) => {
  let myLi = "";

  productsArray.forEach((product) => {
    myLi += `<li>
    <img src=${product.src}>
    <p id="text">${product.name}</p>
    <p id="price">${formatCurrency(product.price)}</p>
</li>
    `;
  });

  list.innerHTML = myLi;
};

const mapAll = () => {
  const discountItens = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  showAll(discountItens);
};

const sumAll = () => {
  const sumPriceProducts = menuOptions.reduce((acc, product) => acc + product.price, 0);

  list.innerHTML = ` <li>
<p>O valor de todos os produtos somados é de ${formatCurrency(sumPriceProducts)}</p>
</li>
`;
};

const filterItens = () => {
const filterItens = menuOptions.filter( product => product.vegan)

showAll(filterItens)
}

showAllButton.addEventListener("click", () => showAll(menuOptions));
mapAllButton.addEventListener("click", mapAll);
sumAllButton.addEventListener("click", sumAll);
filterItensButton.addEventListener("click", filterItens)
