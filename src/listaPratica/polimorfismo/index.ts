class Vehicle {
    move() {
      console.log("O veículo está se movendo.")
    }
  }
  
  class Car extends Vehicle {
    move() {
      console.log("O carro está se movendo.")
    }
  }
  
  class Ship extends Vehicle {
    move() {
      console.log("O navio está navegando.")
    }
  }
  
  const delorean = new Car()
  const blackPearl = new Ship()
  
  delorean.move()
  blackPearl.move()
