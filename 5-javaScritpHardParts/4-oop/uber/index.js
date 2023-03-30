function Car(license, driver) {
    this.id;
    this.license = license;
    this.driver = driver;
    this.email;
    this.passenger;
}

Car.prototype.printDataCar = function (){
    console.log(this.driver)
    console.log(this.driver.name)
    console.log(this.driver.document)
}


class Car {
    constructor(license, driver) {
        this.id;
        this.license = license;
        this.driver = driver;
        this.passenger;
    }

    printDataCar() {
        console.log(this.driver)
        console.log(this.driver.name)
        console.log(this.driver.document)
    }
}

function Account(name, document) {
    this.id;
    this.name = name;
    this.document = document;
    this.email;
    this.password;
}

class Account {
    constructor(name, document) {
        this.id;
        this.name = name;
        this.document = document;
        this.email;
        this.password;
    }
}

function Payment() {
    this.id;
}

class Payment {
    constructor() {
        this.id;
    }
}

function Route() {
    this.id;
    this.init;
    this.end;
}

class Route {
    constructor(){
        this.id;
        this.init;
        this.end;
    }
}


var car = new Car("AW456", new Account("Andres Herrera", "QWE234"))
car.passenger = 4;
car.printDataCar();