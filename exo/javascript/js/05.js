// alert ('test');

// Structure de base IF

if (true){ // Par défaut la condition à vérifier le IF verifie si elle est vraie

    //..... code ....


}

var nb1 = 10;
if (nb1 < 50){
    console.log("nb1 est inférieur à 50");
}

// ELSE

if (true){
// ....... code si vrai.......)    
} else {
// .......code si faux......)    
}

if (nb1 > 50){
    console.log("nb1 est bien supérieur à 50");
} else {
    console.log("nb1 est inférieur à 50");
}


// EXERCICE

// On utilise le IF pour vérifier l'âge de l'internaute.
// => S'il est majeur je lui souhaite la bienvenue
// => S'il est mineur je lui [1]signale et [2] le renvoie vers un autre site

// 1-- Je déclare la majorité légale
var majoriteFr=18;

// 2-- Demander l'âge en s'assurant que nous avons un NUMBER
var age = parseInt(prompt("Indiquez votre âge"))

// 3-- Je vérifie si mon internaute est majeur
if (age >= majoriteFr){
    alert("Bienvenue, vous êtes majeur") // Bienvenue si vrai
} else{
    // S'il est mineur
    alert("Allez voir un autre site")
    // Et ensuite je redirige vers Darty
    document.location.href="http://www.darty.fr/"
} 