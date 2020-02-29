let view = {
    displayMessage: function (msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }

};

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [
        {locations: ["00", "00", "00"], hits: ["", "", ""]},
        {locations: ["00", "00", "00"], hits: ["", "", ""]},
        {locations: ["00", "00", "00"], hits: ["", "", ""]}
    ],

    fire: function (guess) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship! Damn you!!!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("Miss! Ha!");
        return false;
    },

    isSunk: function (ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    },

    generateShipLocations: function () {
        let locations;

        for (let i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    },

    generateShip: function () {
        let direction = Math.floor(Math.random() * 2);
        let row, col;
        let newShipLocations = [];

        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * this.boardSize - this.shipLength);
        } else {
            row = Math.floor(Math.random() * this.boardSize - this.shipLength);
            col = Math.floor(Math.random() * this.boardSize);
        }

        for (let i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            }else{
                newShipLocations.push((row+i) + "" + col);
            }
        }
        return newShipLocations;
    },

    collision: function(locations){
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            for (let j = 0; j < locations.length; j++) {
                if(ship.locations.indexOf(locations[j]) >= 0){
                    return true;
                }
            }
        }
        return false;
    }
};

let controller = {
    guesses: 0,

    processGuess: function (guess) {

        let location = this.parseGuess(guess);
        console.log(location);
        if (location) {
            this.guesses++;
            let hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("Well done Cap! You sunk all of my ships in "
                    + this.guesses + " guesses.")
            }
        }
    },

    parseGuess: function (guess) {

        let alphabet = ["A", "B", "C", "D", "E", "F", "G"];

        if (guess === null || guess.length !== 2) {
            alert("Sorry wrong input, please enter a letter and a number corresponding to the cell " +
                "on the bord.")
        } else {
            let firstChar = guess.charAt(0);
            let row = alphabet.indexOf(firstChar);
            let column = guess.charAt(1);

            if (isNaN(row) || isNaN(column)) {
                alert("Oops, that is not on the board");
            } else if (row < 0 || column < 0
                || row >= model.boardSize || column >= model.boardSize) {
                alert("Nice shooting matey, that is of the board!");
            } else {
                return row + column;
            }
        }
        return null;
    }
};

function init() {
    let fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    let guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
    model.generateShipLocations();
}

function handleKeyPress(e) {
    let fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

function handleFireButton() {
    let guess = document.getElementById("guessInput").value;
    controller.processGuess(guess.toUpperCase());
}

window.onload = init;




