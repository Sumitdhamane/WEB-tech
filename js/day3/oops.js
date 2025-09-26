class Person {
  pname = "sumit";
  pcontact = 9594;
  paddress = "kalyan";

  personDetails() {
    return `Name : ${this.pname} contact: ${this.pcontact} Address:${this.paddress}`;
  }
}

let obj = new Person();
console.log(obj.personDetails());
