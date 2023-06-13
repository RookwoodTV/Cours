// Créer un tableau

// var arr = new Array (element0, element1, element2);
// var arr = Array (element0, element1, element2);
// var arr = [element0, element1, element2];

let fruits = ['Apple', 'Banana', 'Fraise'];
console.log(fruits.length); // Length affiche le nombre d'élément (combien de fruits)

// Accéder(via son index) à un élément du tableau

var first = fruits[0];
// console.log(first);

var last = fruits[1];
console.log(last);

var last = fruits[fruits.length - 1]; // Nous accédons à l'index du tableau dans le sens inverse
console.log(last)

// Au lieu de changer le tableau on modifie

// 1. Ajouter à la fin du tableau
var newLength = fruits.push('Orange');
console.log(fruits);

// 2. Supprimer le dernier élément du tableau
var last = fruits.pop(); // Supprimer Orange (à la fin)
console.log(fruits)