function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.bark = () => {
    if (this.weight > 25) {
        return "Woof";
    } else {
        return "Yip";
    }
};
Dog.prototype.wag = () => {
    return "Wag!";
};
Dog.prototype.run = () => {
    return "Run!"
};

function init(){
    let display = document.getElementById("display");

    let fido = new Dog("Fido", "Mixed", 38);
    let fluffy = new Dog("Fluffy", "Poodle", 30);
    let spot = new Dog("Spot", "Chihuahua", 10);

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