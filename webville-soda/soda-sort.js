let products = [{name: "Grapefruit", calories: 170, color: "red", sold: 8200},
    {name: "Orange", calories: 160, color: "orange", sold: 12101},
    {name: "Cola", calories: 210, color: "caramel", sold: 25412},
    {name: "Diet Cola", calories: 0, color: "caramel", sold: 43922},
    {name: "Lemon", calories: 200, color: "clear", sold: 14983},
    {name: "Raspberry", calories: 180, color: "pink", sold: 9427},
    {name: "Root Beer", calories: 200, color: "caramel", sold: 9909},
    {name: "Water", calories: 0, color: "clear", sold: 62123}
];

function compareSoldAsc(prod1, prod2) {
    if (prod1.sold > prod2.sold) {
        return 1;
    } else if (prod1.sold < prod2.sold) {
        return -1;
    } else {
        return 0;
    }
}

function compareNameAsc(prod1, prod2) {
    if (prod1.name > prod2.name) {
        return 1;
    } else if (prod1.name < prod2.name) {
        return -1;
    } else {
        return 0;
    }
}

function compareCaloriesAsc(prod1, prod2) {
    if (prod1.calories > prod2.calories) {
        return 1;
    } else if (prod1.calories < prod2.calories) {
        return -1;
    } else {
        return 0;
    }
}

function compareColorAsc(prod1, prod2) {
    if (prod1.color > prod2.color) {
        return 1;
    } else if (prod1.color < prod2.color) {
        return -1;
    } else {
        return 0;
    }
}


function printProducts(products) {
    for (var i = 0; i < products.length; i++) {
        document.getElementById("products").innerHTML += ("Name: " + products[i].name +
            ", Calories: " + products[i].calories +
            ", Color: " + products[i].color +
            ", Sold: " + products[i].sold) + "</br>";
    }
    document.getElementById("products").innerHTML += "</br> -------------------------------</br>";
}

function init() {
    products.sort(compareSoldAsc);
    printProducts(products);
    products.sort(compareNameAsc);
    printProducts(products);
    products.sort(compareCaloriesAsc);
    printProducts(products);
    products.sort(compareColorAsc);
    printProducts(products);

}