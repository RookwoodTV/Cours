'use strict' // Mode strict du Javascript

// Déclaration d'une variable
var nombre;

// La boucle do while s'éxecutera toujours au moins une fois, alors que la boucle while peut ne pas s'éxecuter si la condition est fausse dès le départ

// On utilise cette boucle quand elle doit s'executer au moins une fois pour que la compraison puisse s'effectuer.

do {
    nombre = parseFloat(widow.prompt('Veuillez saisir un nombre :'));
}while(isNaN(nombre) == true);
document.write('<p> Merci, vous avez saisi <strong>' + nombre + '</strong></p>');