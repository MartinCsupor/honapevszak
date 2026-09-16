const honapok = [{
    nev: "Január",
    evszak: "Tél",
    napok: 31
}, {
    nev: "Február",
    evszak: "Tél",
    napok: 28
}, {
    nev: "Március",
    evszak: "Tavasz",
    napok: 31
}, {
    nev: "Április",
    evszak: "Tavasz",
    napok: 30
}, {
    nev: "Május",
    evszak: "Tavasz",
    napok: 31
}, {
    nev: "Június",
    evszak: "Nyár",
    napok: 30
}, {
    nev: "Július",
    evszak: "Nyár",
    napok: 31
}, {
    nev: "Augusztus",
    evszak: "Nyár",
    napok: 31
}, {
    nev: "Szeptember",
    evszak: "Ősz",
    napok: 30
}, {
    nev: "Október",
    evszak: "Ősz",
    napok: 31
}, {
    nev: "November",
    evszak: "Ősz",
    napok: 30
}, {
    nev: "December",
    evszak: "Tél",
    napok: 31
}]

let output = document.getElementById("output");

function honapadatai(){
    let honapinput = document.getElementById("honapInput").value;

    let adatok;
    try {
        if (honapinput < 1 || honapinput > 12) {
            throw new Error("A hónapszámnak 1 és 12 közé kell esnie!");
        }
        else if (isNaN(honapinput)) {
            throw new Error("A hónapszámnak számnak kell lennie!");
        }
        adatok = honapok[honapinput -1]
        output.textContent = `${honapinput} Hónap: ${adatok.nev} Évszak: ${adatok.evszak} Napok száma: ${adatok.napok}`;
    }
    catch (error) {
        output.textContent = `${honapinput} Hiba: ${error.message}`
    }
}