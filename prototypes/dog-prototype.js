function Dog(name, breed, weight) { // first we need a constructor
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";   // then we add properties to the prototype property object of the
Dog.prototype.bark = function() {        // constructor
    if (this.weight > 25) {
        return this.name + " says Woof!";
    } else {
        return this.name + " says Yip!";
    }
};
Dog.prototype.wag = () => { // big difference between function expression and => operator
    return "Wag!";          // => does not set 'this' to the object calling the function
};
Dog.prototype.run = () => {
    return "Run!"
};

function init(){
    let display = document.getElementById("display");

    let fido = new Dog("Fido", "Mixed", 38);
    let fluffy = new Dog("Fluffy", "Poodle", 30);
    let spot = new Dog("Spot", "Chihuahua", 10);

    spot.bark = function(){    // we can override the method, javascript always looks in the local scope
        return this.name + " says WOOF!!!!" // first and if it doesn't find the method it look in
                                            // the prototype
    };

    display.innerHTML += fido.run() + "</br>";
    display.innerHTML += fido.wag() + "</br>";
    display.innerHTML += fido.bark() + "</br></br>";


    display.innerHTML += fluffy.run() + "</br>";
    display.innerHTML += fluffy.wag() + "</br>";
    display.innerHTML += fluffy.bark() + "</br></br>";

    display.innerHTML += spot.run() + "</br>";
    display.innerHTML += spot.wag() + "</br>";
    display.innerHTML += spot.bark() + "</br></br>";
}