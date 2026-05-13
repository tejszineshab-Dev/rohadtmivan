let result = document.getElementById("result");
let advanced_on = false;
advanced_settings.style.display = "none";

const kiabalasSzinonimak = [
    "Kiabálj",
    "Ordíts",
    "Üvölts",
    "Bömbölj",
    "Rikácsolj",
    "Visíts",
    "Üvöltözz",
    "Lármázz",
    "Hangoskodj",
    "Morogj",
    "Dühöngj",
    "Őrjöngj",
    "Tombolj",
    "Hisztizz",
    "Balhézz",
    "Veszekedj",
    "Pánikolj",
    "Hőbörögj",
    "Kergülj meg",
    "Kelj ki magadból",
    "Veszítsd el a fejed",
    "Csinálj jelenetet",
    "Rendezz balhét",
    "Verj patáliát",
    "Kajabálj"
];

/*
async function get_ip() {
    try {
        let response = await fetch("https://ipwho.is/");
        if (!response.ok) throw new Error('API nem elérhető!');
        
        let data = await response.json();
        return data.city;
    } catch (error) {
        console.log("Baj van az IP-vel.", error.message);
    }
}
*/

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function get_temp() {
    try {
        let response = await fetch(`https://wttr.in/?format=j1`);
        if (!response.ok) throw new Error('API nem elérhető!');
        
        let data = await response.json();
        return data.current_condition[0].temp_C;
    } catch (error) {
        console.log("Baj van a hőmérséklettel.", error.message);
    }
}

function calculate_sub(temp) {
    let pref_temp = document.getElementById("pref_temp").value;
    let kiabalas = kiabalasSzinonimak[randomBetween(0, kiabalasSzinonimak.length)];
    if (temp >= pref_temp) {
        return `${kiabalas} a <a target="_blank" href="https://www.reddit.com/r/rohadtmelegvan/">r/rohadtmelegvan</a> subredditen!`;
    }
    else {
        return `${kiabalas} a <a target="_blank" href="https://www.reddit.com/r/rohadthidegvan/">r/rohadthidegvan</a> subredditen!`;
    }
}

async function btn_press(){
    result.innerHTML = "Dobpergés...";
    //let city = await get_ip();
    let temp = await get_temp();
    console.log(temp);
    setTimeout(() => {
        result.innerHTML = calculate_sub(temp);
      }, 1000);
}

function advancedbtn(){
    let advanced_settings = document.getElementById("advanced_settings");
    if (advanced_on) {
        advanced_on = false;
        advanced_settings.style.display = "none";
    }
    else {
        advanced_on = true;
        advanced_settings.style.display = "block";
    }
}
