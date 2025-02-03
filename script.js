const display = document.getElementById('display');
function ajouterEcran(valeur) {
    if (display.value.length < 12) {
        display.value += valeur;
    }
}
function effacerEcran() {
    display.value = '';
}
function calculer() {
    try {
        let resultat = eval(display.value);

        if (Number.isInteger(resultat)) {
            display.value = resultat;
        } else {
            display.value = resultat.toFixed(2);
        }
    } catch (erreur) {
        display.value = 'Erreur';
        setTimeout(effacerEcran, 1000);
    }
}
