const client = "Awa";
const codePlat = 1;
const qteTxt = "3";
const montantVerse = 5000;
const quantite=Number(qteTxt);
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
