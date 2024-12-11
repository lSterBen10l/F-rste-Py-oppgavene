/*

// Enkel kalkulator
function kalkulator() {
    const tall1 = parseFloat(prompt("Skriv inn første tall:"));
    const tall2 = parseFloat(prompt("Skriv inn andre tall:"));
    
    const operasjon = prompt("Velg operasjon: +, -, *, /");
    
    if (operasjon === "+") {
        alert("Resultat: " + (tall1 + tall2));
    } else if (operasjon === "-") {
        alert("Resultat: " + (tall1 - tall2));
    } else if (operasjon === "*") {
        alert("Resultat: " + (tall1 * tall2));
    } else if (operasjon === "/") {
        alert("Resultat: " + (tall1 / tall2));
    } else {
        alert("Ugyldig operasjon!");
    }
}

kalkulator();



// Beregn areal av et rektangel
const lengde = 6;
const bredde = 8;
const areal = lengde * bredde;
console.log("Arealet av rektangelet er:", areal);



// Beregn år til 100
const navn = prompt("Hva heter du?");
const alder = parseInt(prompt("Hvor gammel er du?"));
const aar_til_100 = 100 - alder;
alert(`${navn}, du fyller 100 år om ${aar_til_100} år.`);



// Sjekk om tallet er positivt, negativt eller null
const tall = parseFloat(prompt("Skriv inn et tall:"));

if (tall > 0) {
    alert("Tallet er positivt.");
} else if (tall < 0) {
    alert("Tallet er negativt.");
} else {
    alert("Tallet er null.");
}



// Summer tall fra 1 til brukerens tall
const grense = parseInt(prompt("Skriv inn et tall:"));
let summen = 0;

for (let i = 1; i <= grense; i++) {
    summen += i;
}

alert("Summen er: " + summen);



// Lag en liste med 5 navn
const navn1 = prompt("Skriv inn navn 1:");
const navn2 = prompt("Skriv inn navn 2:");
const navn3 = prompt("Skriv inn navn 3:");
const navn4 = prompt("Skriv inn navn 4:");
const navn5 = prompt("Skriv inn navn 5:");

const navneliste = [navn1, navn2, navn3, navn4, navn5];
console.log("Navnelisten er:", navneliste);



// Ta imot 5 navn fra brukeren og legg dem til en array
const navnelst = [];

for (let i = 0; i < 5; i++) {
    const navn = prompt(`Skriv inn navn ${i + 1}:`);
    navnelst.push(navn);
}

console.log("Navnelisten er:", navnelst);



// Funksjon som sorterer og beregner gjennomsnittet av en liste
function sorterOgBeregnGjennomsnitt(talliste) {
    talliste.sort((a, b) => a - b); // Sorter stigende
    const gjennomsnitt = talliste.reduce((a, b) => a + b, 0) / talliste.length;
    return { sorterteTall: talliste, gjennomsnitt };
}

const taller = [5, 3, 8, 1, 4];
const result = sorterOgBeregnGjennomsnitt(taller);
console.log("Sorterte tall:", result.sorterteTall);
console.log("Gjennomsnitt:", result.gjennomsnitt);


*/
// Snu rekkefølgen på en array
const liste = [1, 2, 3, 4, 5];
liste.reverse();
console.log("Snudd liste:", liste);
