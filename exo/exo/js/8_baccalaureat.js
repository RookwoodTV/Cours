var moyenne = parseFloat(prompt("Quelle est ta moyenne au bac ?"));

if (moyenne < 10){
    document.write("Tu es recalé");// J'affiche qu'il est recalé
}else if ((moyenne >=10) && (moyenne <12 )){
    // sinon, si la moyenne est entre 10 et 12
    document.write("Tu passes !")// J'affiche que le candidat passe
}else if((moyenne >= 12) && (moyenne <= 12)){
    document.write("Bravo pour la mention")
    // J'affiche qu'il a une mention
}else{
    // En cas de saisir ne rentrant pas dans le cas 
    document.write("Vous n'avez pas saisi une moyenne correct !")
    // Je lui indique qu'il n'a pas saisi ce que l'on lui demandait
}