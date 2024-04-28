// Call Method
let chef = {
    name: "Sakshi",
    cook: function(dish) {
      console.log(`${this.name} is cooking ${dish}`);
      console.log(`${this.name} is the better cook then ${chef.name} .`);
    }
  };
  
  let waiter = {
    name: "Prasann"
  };
  
  chef.cook.call(waiter, "Pasta");
// Output
//Prasann is cooking Pasta.
//Prasann is the better cook then Sakshi.
  