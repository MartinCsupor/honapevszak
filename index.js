const honapok = [{
    nev: "Január",
    unnep: "Újév",
    evszak: "Tél",
    napok: 31
}, {
    nev: "Február",
    unnep: "Bálint-nap",
    evszak: "Tél",
    napok: 28
}, {
    nev: "Március",
    unnep: "Nőnap",
    evszak: "Tavasz",
    napok: 31
}, {
    nev: "Április",
    unnep: "Húsvét",
    evszak: "Tavasz",
    napok: 30
}, {
    nev: "Május",
    unnep: "Anyák napja",
    evszak: "Tavasz",
    napok: 31
}, {
    nev: "Június",
    unnep: "Pünkösd",
    evszak: "Nyár",
    napok: 30
}, {
    nev: "Július",
    unnep: "",
    evszak: "Nyár",
    napok: 31
}, {
    nev: "Augusztus",
    unnep: "Augusztus 20.",
    evszak: "Nyár",
    napok: 31
}, {
    nev: "Szeptember",
    unnep: "",
    evszak: "Ősz",
    napok: 30
}, {
    nev: "Október",
    unnep: "Október 23.",
    evszak: "Ősz",
    napok: 31
}, {
    nev: "November",
    unnep: "Mindszentek",
    evszak: "Ősz",
    napok: 30
}, {
    nev: "December",
    unnep: "Karácsony",
    evszak: "Tél",
    napok: 31
}]
const regex = /^[A-Za-zÁÉÍÓÖŐÚÜŰáéíóöőúüű ]+$/;

let output = document.getElementById("output");
let outputError = document.getElementById("outputError");

function szamCheck(honapinput){
     if (honapinput < 1 || honapinput > 12) {
        throw new Error("A hónapszámnak 1 és 12 közé kell esnie!");
    }
    else if (isNaN(honapinput)) {
        throw new Error("A hónapszámnak számnak kell lennie!");
    }
}

function honapadatai(){
    let honapinput = document.getElementById("honapInput").value;
    
    try {
        szamCheck(honapinput)
        adatok = honapkeres(honapinput)
        outputError.textContent = ""
        output.textContent = `${honapinput} Hónap: ${adatok.nev} - ${adatok.unnep ? adatok.unnep : "Nincs ünnep"} Évszak: ${adatok.evszak} Napok száma: ${adatok.napok}`;
        console.log(`${honapinput} Hónap: ${adatok.nev} - ${adatok.unnep ? adatok.unnep : "Nincs ünnep"} Évszak: ${adatok.evszak} Napok száma: ${adatok.napok}`);
        }
    catch (error) {
        output.textContent = "";
        outputError.textContent = error.message
        console.log(error.message);
        document.getElementById("honapInput").value = "";
    }
}   

function honapkeres(honapinput) {
    return honapok[honapinput -1]
}

let honapInput = document.getElementById("honapInput")
let kivalasztoGomb = document.getElementById("kivalasztoGomb")
let kivalasztasError = document.getElementById("kivalasztasError")
let unnepInput = document.getElementById("unnepInput")
let modositGomb = document.getElementById("modositGomb")
let sikeresModositas = document.getElementById("sikeresModositas")
let modositasError = document.getElementById("modositasError")

unnepInput.style.display = "none"
modositGomb.style.display = "none"

function honapKivalaszt() {

    const honapSzam = document.getElementById("honapInput").value;

    try {
        szamCheck(honapSzam)
        kivalasztasError.textContent = "";

        honapInput.style.display = "none";
        kivalasztoGomb.style.display = "none";
        kivalasztasError.style.display = "none";
        unnepInput.style.display = "block";
        modositGomb.style.display = "block";

        unnepInput.value = honapkeres(honapSzam).unnep;
    } catch (error) {
        kivalasztasError.textContent = error.message;
    }
}

function unnepModositas() {
    const unnepSzoveg = unnepInput.value;
    unnepSzoveg.trim();
    const honapSzam = document.getElementById("honapInput").value;
   
    try {
        if (!regex.test(unnepSzoveg) || unnepSzoveg.length === 0){
            throw new Error("Az ünnep csak szöveg lehet")
        }
        const honap = honapkeres(honapSzam);
        honap.unnep = unnepSzoveg;
        modositasError.style.display = "none";
        sikeresModositas.style.display = "block"
        sikeresModositas.textContent = `${honapSzam} Hónap: ${honap.nev} - ${honap.unnep ? honap.unnep : "Nincs ünnep"} Évszak: ${honap.evszak} Napok száma: ${honap.napok}`;
    } catch (error) {
        modositasError.textContent = error.message;
        modositasError.style.display = "block";
        sikeresModositas.style.display = "none"
    }
}