//Salah example in classroom



class Person {
  // feilds
  constructor (First_Name, Last_Name, Country, City){
    this.firstName = First_Name,
    this.lastName = Last_Name,
    this.country = Country,
    this.city = City
  }
  // methods
  greet (otherPerson){
    console.log("hi " + otherPerson + "!");
  }
  walk(){
    console.log("I hate when segway is in the shop.");
  }
}
const salah = new Person("Fname","Lname", "country", "city");
console.log(salah);
salah.firstName = "PerScholas";
console.log(salah)
// someone.greet("Salah");
// someone.walk();
