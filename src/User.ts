export default class User {
  private firstName: string;
  private lastName: string;
  public prime: boolean;
  
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.prime = false; //默认不是prime
  }

  subscribe() { this.prime = true }
  unsubscribe() { this.prime = false }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
