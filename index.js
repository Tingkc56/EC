// Simule notre API
import apiProducts from './data';

// On import notre style
import './style.scss';

// On importe nos objets
import Cart from "./src/Cart";
import Product from "./src/Product";
import User from "./src/User";

// On simule le fait d'être connecté en tant qu'utilisateur
let john = new User("John", "Doe");
let cart = new Cart(john);


let root = document.getElementById("root");
let userBar = document.getElementById("user"); //ces 2 lets sertent a quoi??  ou est le push pour remplir le span

function topUser(user) {// ce user vient d'ou?
  if(user.prime) {// if user.prime = true
    userBar.innerHTML = `${user.fullName()} <button class="prime">Premium</button>`; //在id为user的span中加入内容
  } else {
    userBar.innerHTML = `${user.fullName()} <button id="primify">Devenir premium</button>`;
  }
}

topUser(john);

function displayCart(nb, val) { // les donnees de nb et val viennent d'ou??
  let cart = document.getElementById("cart");
  cart.innerText = `${nb} article${nb > 1 ? 's' : ''} d'une valeur de ${val} €`;
}

document.getElementById('primify').addEventListener('click', () => {
  john.prime = true;
  topUser(john);
  displayCart(cart.count(), cart.total())
});

//Affichage dans la premier ligne de root
let type = document.createElement('div');
type.innerHTML = '<button class="tout">Tout</button> <button class="fromage">Fromage</button> <button class="pate">Pate</button>';

console.log(type);
document.getElementsByTagName('div')[1].appendChild(type);
//faire fonctionner le click type
// document.getElementById('fromage').addEventListener('click', () => {
  
//   //style.display=block;
//   //style.display=none;
})

// Affichage dans le root
apiProducts.forEach(apiP => {
  let product = new Product(apiP.label, apiP.barCode, apiP.price, apiP.description, apiP.image);

  let card = document.createElement('div');
  let paragraph = document.createElement('p');
  let title = document.createElement('h2');
  let img = document.createElement('img');
  let btn = document.createElement('button');

  card.classList.add('card');

  title.innerText = product.label;
  
  img.src = product.image;

  paragraph.classList.add('content');
  paragraph.innerText = product.shortDescription();

  btn.innerText = 'Ajouter au panier'


  btn.onclick = () => {
    cart.add(product);
    displayCart(cart.count(), cart.total())
  }


  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(paragraph);
  card.appendChild(btn);
  root.appendChild(card);
});




