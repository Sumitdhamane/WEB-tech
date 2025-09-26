class Person {
  pname = "sumit";
  pcontact = 9594;
  paddress = "kalyan";

  personDetails() {
    return `Name : ${this.pname} contact: ${this.pcontact} Address:${this.paddress}`;
  }

  constructor(name, contact, address) {
    this.pname = name;
    this.pcontact = contact;
    this.paddress = address;
  }
}

let obj = new Person("Om", 2580, "dombivali");
console.log(obj.personDetails());
