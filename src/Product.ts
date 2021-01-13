const DESCRIPTION_SIZE = 100;

export default class Product {
  public label: string;
  private barCode: string;
  private price: number;
  public description: string;
  public image: string;
  
  constructor(label: string, barCode: string, price: number, description: string, image: string) {
    this.label = label;
    this.barCode = barCode;
    this.price = price;
    this.description = description;
    this.image = this.pathImg(image);
  }

  shortDescription() {
    return this.description.substr(0, DESCRIPTION_SIZE) + "...";
  }

  roundedPrice() {
    return Math.round(this.price * 100)/100;
  }

  private pathImg(imgName: string) {
    return `https://www.carrefour.fr/media/540x540/Photosite/PGC/P.L.S./${imgName}`;
  }
}