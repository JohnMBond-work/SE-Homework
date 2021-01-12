//Week3_Day3_MorningLab


// OOP - Classes: Model a vending machine
//
//
//
// When we wanted to access snacks within our object we had to put the name of the object in it to access the snacks
//
// 1. a vending machine is an object
// 2. it has an array of snacks (make 3 snacks)
// 3. snacks are objects that have a name and a price
// 4. a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// 5. Be able to call vendingMachine.vend() with a valid integer to return a snack



class VendingMachine {
  constructor(snacks, price) {
    this.snacks = snacks;
    this.price = price;

  }
  vend(x){//method
    return "You just bought " + this.snacks[x] + " for " + this.price[x];
  }
}

//object
const vendingMachine = new VendingMachine(["kitkat", "m&ms", "snickers"],[1,.75, 1.25]);
console.log(vendingMachine.vend(1));//call




//missng an array of objects
