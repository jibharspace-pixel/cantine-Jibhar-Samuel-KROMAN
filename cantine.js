const client = "Awa";
const codePlat = 2;
const qteTxt = "2";
const montantVerse = 3000;
const quantite=Number(qteTxt);
const codeValide = Number.isInteger(codePlat) && codePlat >= 1 && codePlat <= 3;
const quantiteValide = Number.isInteger(quantite) && quantite > 0;
if (!codeValide || !quantiteValide) {
    console.log("Erreur : Code de plat ou quantité invalide.");
    process.exit(1);
}
let prixUnitaire; 
let nomPlat;
switch (codePlat) {
    case 1:
        nomPlat = "Attiéké-poisson";
        prixUnitaire = 1500;
        break;
    case 2:
        nomPlat = "Riz-poulet";
        prixUnitaire = 2000;
        break;
    case 3:
        nomPlat = "Alloco-œuf";
        prixUnitaire = 1000;
        break;
    default:
        console.log("Code de plat invalide : Choisissez un code entre 1 et 3");
}
function calculerTotal(prixUnitaire, quantite) {
    return prixUnitaire * quantite;
}
const montantTotal = calculerTotal(prixUnitaire, quantite);
console.log(`Client: ${client}`);
for (let compteur = 1; compteur <= quantite; compteur++) {
    console.log(`Portion N° ${compteur}: ${nomPlat} - ${prixUnitaire} FCFA`);
}
console.log(`Total à payer : ${montantTotal} FCFA`);
if (montantVerse >= montantTotal) {
    const monnaie = montantVerse - montantTotal;
    console.log(`Monnaie à rendre : ${monnaie} FCFA`);
} else {
    const montantRestant = montantTotal - montantVerse;
    console.log(`Montant restant à payer : ${montantRestant} FCFA`);
}