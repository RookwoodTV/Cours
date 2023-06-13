var jour = prompt("Quelle jour somme-nous ?");

if(jour === "lundi"){
    document.write("Demain nous serons MARDI");
} else if(jour === "mardi"){
    document.write("Demain nous serons MERCREDI");
} else if(jour === "mercredi"){
    document.write("Demain nous serons JEUDI");
} else if(jour === "jeudi"){
    document.write("Demain nous serons VENDREDI");
} else if(jour === "vendredi"){
    document.write("Demain nous serons SAMEDI");
} else if(jour === "samedi"){
    document.write("Demain nous serons DIMANCHE");
} else if(jour === "dimanche"){
    document.write("Demain nous serons LUNDI");
}else {
    document.write("Jour inconnu");
}


switch(jour){
    case "Lundi":
    console.log("Demain on est Mardi");
    break;
    case "Mardi":
    console.log("Demain on est Mercredi");
    break;
    case "Mercredi":
    console.log("Demain on est Jeudi");
    break;
    case "Jeudi":
    console.log("Demain on est Vendredi");        
    break;
    case "Vendredi":
    console.log("Demain on est Samedi");
    break;
    case "Samedi":
    console.log("Demain on est Dimanche");
    break;
    case "Dimanche":
    console.log("Demain on est Lundi");
    break;
    default:
    console.log("Désolé, vérifiez l'orthographe et veuillez écrire sans majuscule.");
}