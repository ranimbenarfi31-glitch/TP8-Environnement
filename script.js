// Étape 2
const prenom = "Ranim";
const nom = "Ben Arfi";
let age = 19;
let ville = "tunisie";
console.log(prenom);
console.log(nom);
console.log(age);
console.log(ville);
//  Étape 3
let nomEtudiant = "Sarra";
let moyenne = 14.5;
let estInscrit = true;
let resultat;
let remarque = null;
console.log(typeof nomEtudiant);
console.log(typeof moyenne);
console.log(typeof estInscrit);
console.log(typeof resultat);
console.log(typeof remarque);
//   Étape 4
let note1 = 12;
let note2 = 15;
let note3 = 14;
let somme = note1 + note2 + note3;
let moyenneGenerale = somme / 3;
console.log(`Somme des notes : ${somme}`);
console.log(`Moyenne générale : ${moyenneGenerale}`);
//Application supplémentaire
let nombre1 = 10;
let nombre2 = 3;
let Addition = nombre1 + nombre2;
let Soustraction = nombre1 - nombre2;
let Multiplication = nombre1 * nombre2;
let Division = nombre1 / nombre2;
let Reste_de_division = nombre1 % nombre2;
let Puissance = nombre1 ** nombre2;
console.log(Addition);
console.log(Soustraction);
console.log(Multiplication);
console.log(Division);
console.log(Reste_de_division);
console.log(Puissance);
// Étape 5
let age1 = 20;
let age2 = 18;
console.log(age1 > age2);
console.log(age1 === age2);
console.log(age1 !== age2);
console.log(5 == "5");
console.log(5 === "5");
// Étape 6
let prenomUtilisateur = prompt("Entrez votre prénom :");
let nomUtilisateur = prompt("Entrez votre nom :");
let ageUtilisateur = prompt("Entrez votre âge :");
console.log(`Prénom : ${prenomUtilisateur}`);
console.log(`Nom : ${nomUtilisateur}`);
console.log(`Âge saisi : ${ageUtilisateur}`);
// Étape 7
let noteA = Number(prompt("Entrez la première note :"));
let noteB = Number(prompt("Entrez la deuxième note :"));
let noteC = Number(prompt("Entrez la troisième note :"));
let moyenneEtudiant = (noteA + noteB + noteC) / 3;
alert(`Votre moyenne est : ${moyenneEtudiant}`);
console.log(`Moyenne calculée : ${moyenneEtudiant}`);
//Étape 8
let Le_nom_du_produit = prompt("Le nom du produit");
let prix = Number(prompt("prix de produit :"));
let quantité = Number(prompt("quantité de produit :"));
console.log("Le nom du produit : " + Le_nom_du_produit);
console.log("prix : " + prix);
console.log("quantité : " + quantité);
console.log("Montant total : " + prix * quantité);
