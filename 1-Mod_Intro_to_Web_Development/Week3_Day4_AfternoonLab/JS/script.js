//
//Create an Animal class.
//The class will have name, age, color, legs, superPower attributes.
//Create two objects of this class - both with a unique superPower.
//Create three methods for this class - include one method named userSuperPower()
//Create two objects for this class
//Create a class name User
//This class with have firstName, lastName, department attributes a method name changeDepartment()
//Create three instances of this class
//Change department for two of the instances
//Create three objects for this class
//
//
//
//



// Create an Animal class. ^
// The class will have name, age, color, legs, superPower attributes ^
// Create two objects of this class - both with a unique superPower
// Create three methods for this class - include one method named userSuperPower()
// Create two objects for this class
class Animal{//CLASS
    constructor(name, age, color, legs, superPower){//is a function
        this.name = name;
        this.age = age;
        this.color = color;//must add another property to method chain
        this.legs = legs;
        this.superPower = superPower;
    }
    userSuperPower(){
      console.log(this.name + " flies wtih flies.");
    }
    speaks(){

    }
    run(){
    }
}
let dog = new Animal('Charlie', 16, 'red-brown' , 4, 'reads your mind');
dog.userSuperPower();
let puppy = new Animal('Darcy', 1, 'black and white', 4, 'makes you happy');
puppy.userSuperPower();
// Create a class name User
// This class with have firstName, lastName, department attributes
// a method name changeDepartment()
// Create three instances of this class
// Change department for two of the instances
// Create three objects for this class
class User{
    constructor(firstName, lastName, department){
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }changeDepartment(){
        console.log('Jester');
    }
}
let user1 = new User('Moe', 'Stooge', 'Clown');//instance of a class
//object  = instance of a class
let user2 = new User('Larry', 'Stooge', 'Fool');
let user3 = new User('Curly','Stooge', 'Jester');
user2.changeDepartment();
