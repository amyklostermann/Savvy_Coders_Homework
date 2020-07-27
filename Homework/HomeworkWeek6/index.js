class Item {
    constructor(ID, name, price){
      this.ID = ID;
      this.name = name;
      this.price = price;
    }
    greet() {
        return `Our number 1 seller is ${this.name}.`;
    }
  }

  const frogger = new Item ("100", "Frogger", "$2.50")

 class GameConsoles extends Item {
    constructor(ID, name, price, game){
        super (ID, name, price)
         this.game = this.gameConsole1;
    }
 }

 const pacman = new GameConsoles("101", "Pacman", "$5.00", "Atari")
