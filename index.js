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

function honapadatai(){
    let honapinput = document.getElementById("honapInput").value;
    honapok.map((honap) => {
        if(honapinput == honap.indexOf(honap)){
            
        }
    })
}