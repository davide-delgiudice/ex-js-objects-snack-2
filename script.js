// Code Question 1

// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name); // Double Cheese Burger
// console.log(secondBurger.name ); // Double Cheese Burger

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console? Double Cheese Burger;
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? Solo uno;



// Code Question 2

const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // Salad
console.log(secondBurger.ingredients[0]); // Salad

// P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console? Salad, perché gli ingredients riutilizzano lo stesso array;
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? Tre, due oggetti e l'array ingredients;



