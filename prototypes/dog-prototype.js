function Dog(name, breed, weight) { // first we need a constructor
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";   // then we add properties to the prototype property object of the
Dog.prototype.bark = function () {        // constructor
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

function ShowDog(name, breed, weight, handler) { // inheritance | we create a constructor for the extending prototype
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.handler = handler;
}

ShowDog.prototype = new Dog();  // we set prototype of the inheriting type to the parent type
ShowDog.prototype.constructor = ShowDog; // we need to set the constructor type manually
// code will work just fine without it but it will be confusing because ShowDog.constructor.name will return Dog 

ShowDog.prototype.league = "Webville";  // we add properties specific to the child type

ShowDog.prototype.stack = function () {
    return "Stack";
};
ShowDog.prototype.bait = function () {
    return "Bait";
};
ShowDog.prototype.gait = function (kind) {
    return kind + "ing";
};
ShowDog.prototype.groom = function () {
    return "Groom";
};

function init() {
    let display = document.getElementById("display");

    let fido = new Dog("Fido", "Mixed", 38);
    let fluffy = new Dog("Fluffy", "Poodle", 30);
    let spot = new Dog("Spot", "Chihuahua", 10);

    let scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

    spot.bark = function () {    // we can override the method, javascript always looks in the local scope
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

    display.innerHTML += scotty.run() + "</br>";
    display.innerHTML += scotty.wag() + "</br>";
    display.innerHTML += scotty.bait() + "</br>";
    display.innerHTML += scotty.handler + "</br>";
    display.innerHTML += scotty.league + "</br>";
    display.innerHTML += scotty.bark() + "</br></br>";

    display.innerHTML += "scotty.hasOwnProperty('bark')" + scotty.hasOwnProperty("bark") + "</br>";
    display.innerHTML += "scotty.hasOwnProperty('bait')" + scotty.hasOwnProperty("bait") + "</br>";
    display.innerHTML += "scotty.hasOwnProperty('handler')" + scotty.hasOwnProperty("handler") + "</br>";
    display.innerHTML += "scotty's constructor is " + scotty.constructor.name + "</br>";
    display.innerHTML += "scotty is an instanceof ShowDog: " + (scotty instanceof ShowDog) + "</br>";
    display.innerHTML += "scotty is an instanceof Dog: " + (scotty instanceof Dog) + "</br>";



}