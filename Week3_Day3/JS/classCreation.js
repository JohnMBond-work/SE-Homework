// class Person {
//
// }
// const me = new Person();
// const you = new Person();
// console.log(me);
// console.log(you);
// console.log(typeof me, typeof you);



//W3_D3 slide 13--------------------------------------

// class Person {
//   Constructor (firstName, lastName, country, city) {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.country = country,
//     this.city = city
//   }
//   greet (otherPerson) {
//     console.log('hi ' + otherPerson + '!');
//   }
//   walk () {
//     console.log('I hate when my Segway is in the shop. ');
//   }
// }
// const me = new Person('Orion', 'Vega', 'US', 'New York' );
// console.log(me);


//Slide 14-------------------------------------------------

// class Person {
//   constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.lovesCats = lovesCats;
//     this.lovesDogs = lovesDogs || true;
//   }
//   greet (otherPerson) {
//     console.log('hi ' + otherPerson + '!');
//   }
//   setHair (hairColor) {
//     this.hair = hairColor;
//   }
//   walk () {
//     console.log('I hate when my Segway is in the shop.');
//   }
// }
//
// const you = new Person('Matt', 36, 'blue', 'blonde');
// console.log(you);
// you.setHair('red');
// console.log(you);

//

class Person {
  greet (otherPerson) {
    console.log('Hi ${otherPerson}');
  }
}
const me = new Person();
const you = new Person();
me.greet('Ara');
you.greet('Orion');
