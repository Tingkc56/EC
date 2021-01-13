import Product from "./Product";
import User from "./User";

export default class Cart {
  private owner: User;
  private products: Array<Product>;
  
  constructor(owner: User) {
    this.owner = owner;
    this.products = [];
  }

  add(product: Product) {
    this.products.push(product);
  }

  count() {
    return this.products.length;
  }

  hasReduction() {
    return this.owner.prime;
  }

  total() {
    let t = 0;

    for(let i=0; i < this.products.length; i++) {
      t += this.products[i].roundedPrice();
    }
    
    if(this.hasReduction()) {
      return Math.round((t * 0.8)*100) / 100;
    } else {
      return t;
    }
  }
}