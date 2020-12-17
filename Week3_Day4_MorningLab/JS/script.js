//W3_D4_MorningLab


//OOP - Inheritance

// Create a class called Fish
// Define a method Swim( )
// Create a class Nemo that inherits from Fish
// Define an attribute color
// Create a Nemo object. Can it swim?
// Find the difference between abstract class and an interface
// Which of the two can have implementation of a method in the class?


class Fish {//Parent Class 'Fish'
  constructor(name){
    this.name = name;
  }
  Swim(){
      return("can swim and is");
    }
  }
class Nemo extends Fish{//Child Class of Class 'Fish'
    constructor(color){
      super();//used to access the object's parent i.e. 'FIRST CLASS' aka 'FISH', must go before the 'this'.attribute
      this.color = color;
    }
}
let Nemo1 = new Nemo('Orange', 'Nemo');//Object/Instance of Child Class 'Nemo'
Nemo1.name = 'Nemo';
console.log(Nemo1.name, Nemo1.Swim(), Nemo1.color);
