let delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let loadinText = [
    'Готовлюсь...',
    'В процессе...',
    'Уже почти...',
    'Вот совсем чуть-чуть...',
    'Ну ещё 5 секундочек...',
    'Не торопимся...'
];
let phrase = [
    '"Времена меняются, а люди все теже." - как думаете, эта фраза истинна?',
    'И как только люди смогли создать всё это?',
    'Даже плохие воспоминания часть тебя, не забывай их.',
    'Насколько страшна Утопия?..',
    'Может ли существовать мир без войн?',
    'Развитие возможно даже при лени, попробуем?'
]

window.onload = async function () {
    document.getElementById("phrase").innerHTML = phrase[getRandomIntInclusive(0, phrase.length-1)];
    await delay(250);
    document.getElementById('downBar').style.border = "2px solid black";
    document.getElementById('leftBar').style.border = "2px solid black";
    document.getElementById('rightBar').style.border = "2px solid black";
    document.getElementById('jshead').style.border = "2px solid black";
    document.getElementById('loadingText').style.opacity = "0%";
    await delay(300);
    document.getElementById('loadingText').innerText = loadinText[getRandomIntInclusive(0, loadinText.length-1)];
    await delay(15);
    document.getElementById('loadingText').style.opacity = "100%";
    await delay(400);
    document.getElementById('loadingcont').style.opacity = "0%";
    document.getElementById('loadingcont').style.scale = "0.8";
    await delay(500);
    document.getElementById('loadingcont').style.display = "none";
    await delay(50);
    document.getElementById('loadingSplash').style.scale = "0.4";
    document.getElementById('loadingSplash').style.borderRadius = "360px";
    document.getElementById('loadingSplash').style.opacity = "0";
    document.getElementById('loadingSplash').style.translate = "0 -100%";
    document.getElementById('jsBody').style.backgroundImage = "url('bg.svg')";
    await delay(500);
    document.getElementById('loadingSplash').style.display = "none";
    await delay(50);
    document.getElementById('jshead').style.translate = "0px 0px";
    document.getElementById('jshead').style.scale = '1';
    document.getElementById('jshead').style.opacity = '100%';
    await delay(490);
    showMainLabel();
    document.getElementById('headerLogo').innerHTML = ".";
    await delay(100);
    document.getElementById('headerLogo').innerHTML = "..";
    await delay(100);
    document.getElementById('headerLogo').innerHTML = "...";
    await delay(200);
    document.getElementById('headerLogo').innerHTML = ".";
    await delay(100);
    document.getElementById('headerLogo').innerHTML = "..";
    await delay(100);
    document.getElementById('headerLogo').innerHTML = "...";
    await delay(100);
    document.getElementById('headerLogo').innerHTML = "WERTYWIN2353.PRO <span style='opacity: 50%; font-weight: normal;'>/ .</span>";
    await delay(100);
    document.getElementById('headerLogo').innerHTML = "WERTYWIN2353.PRO <span style='opacity: 50%; font-weight: normal;'>/ ..</span>";
    await delay(100);
    document.getElementById('headerLogo').innerHTML = "WERTYWIN2353.PRO <span style='opacity: 50%; font-weight: normal;'>/ ...</span>";
    await delay(200);
    document.getElementById('headerLogo').innerHTML = "WERTYWIN2353.PRO <span style='opacity: 50%; font-weight: normal;'>/ .</span>";
    await delay(100);
    document.getElementById('headerLogo').innerHTML = "WERTYWIN2353.PRO <span style='opacity: 50%; font-weight: normal;'>/ ..</span>";
    await delay(100);
    document.getElementById('headerLogo').innerHTML = "WERTYWIN2353.PRO <span style='opacity: 50%; font-weight: normal;'>/ ...</span>";
    await delay(250);
    document.getElementById('headerLogo').innerHTML = "WERTYWIN2353.PRO <span style='opacity: 50%; font-weight: normal;'>/ Визитка</span>";
    


}

async function showMainLabel() {
    document.getElementById('mainLabel').style.scale = '1';
    document.getElementById('mainLabel').style.opacity = '100%';
    document.getElementById('mainLabel').style.borderRadius = '15px';
    await delay(500);
    document.getElementById('rightBar').style.translate = '105px';
    document.getElementById('rightBar').style.background = "black";
    document.getElementById('rightBar').style.borderRadius = "15px";
    await delay(250);
    loadLeftBar();
}

async function loadLeftBar() {
    document.getElementById('leftBar').style.background = "black";
    document.getElementById('leftBar').style.borderRadius = "15px";
    document.getElementById('leftBar').style.opacity = "100%";
    await delay(250);
    document.getElementById('aka').style.opacity = "50%";
    document.getElementById('aka').style.bottom = "26px";
    await delay(250);
    document.getElementById('ageOmeter').innerHTML = "+--";
    await delay(100);
    document.getElementById('ageOmeter').innerHTML = "-+-";
    await delay(100);
    document.getElementById('ageOmeter').innerHTML = "--+";
    await delay(200);
    document.getElementById('ageOmeter').innerHTML = "+--";
    await delay(100);
    document.getElementById('ageOmeter').innerHTML = "-+-";
    await delay(100);
    document.getElementById('ageOmeter').innerHTML = "--+";
    await delay(250);
    let currentAge = await String(getAge('17-02-2008'));
    document.getElementById('ageOmeter').innerHTML = currentAge.slice(0, 1);
    await delay(100);
    document.getElementById('ageOmeter').innerHTML = currentAge;
    await delay(100);
    document.getElementById('ageOmeter').innerHTML = currentAge + " Л";
    await delay(100);
    document.getElementById('ageOmeter').innerHTML = currentAge + " Ле";
    await delay(100);
    document.getElementById('ageOmeter').innerHTML = currentAge + " Лет";
    await delay(300);
    document.getElementById('ageOmeter').innerHTML = currentAge + " Лет <span style='opacity: 50%'>(17.02.2008)</span>";
    await delay(300);
    document.getElementById('ageOmeter').innerHTML = currentAge + " Лет";
    await delay(300);
    document.getElementById('ageOmeter').innerHTML = currentAge + " Лет <span style='opacity: 50%'>(17.02.2008)</span>";
    await delay(300);
    document.getElementById('ageOmeter').innerHTML = currentAge + " Лет";
    await delay(300);
    document.getElementById('ageOmeter').innerHTML = currentAge + " Лет <span style='opacity: 50%'>(17.02.2008)</span>";
    await delay(100);
    document.getElementById('links').style.opacity = "100%";
    loadDevices();
    await delay(150);
    loadDesc();
}

async function loadDevices() {
}
async function  loadDesc() {
    //downBar
    document.getElementById('downBar').style.background = "black";
    document.getElementById('downBar').style.borderRadius = "15px";
    document.getElementById('downBar').style.opacity = "100%";
    document.getElementById('downBar').style.translate = "-50% 0";
    await delay(250);
    makeItGlass();
}

async function makeItGlass() {
    document.getElementById('downBar').style.background = "rgba(255,255,255,0.1)";
    document.getElementById('leftBar').style.background = "rgba(255,255,255,0.1)";
    document.getElementById('rightBar').style.background = "rgba(255,255,255,0.1)";
    document.getElementById('jshead').style.background = "rgba(255,255,255,0.1)";
    await delay(500);
    document.getElementById('downBar').style.border = "2px solid rgba(255,255,255,0.6)";
    document.getElementById('leftBar').style.border = "2px solid rgba(255,255,255,0.6)";
    document.getElementById('rightBar').style.border = "2px solid rgba(255,255,255,0.6)";
    document.getElementById('jshead').style.border = "2px solid rgba(255,255,255,0.6)";
}

function getAge(date) {
    const [day, month, year] = date.split('-').map(Number);

    const today = new Date();
    let age = today.getFullYear() - year;

    if (
        today.getMonth() + 1 < month ||
        (today.getMonth() + 1 === month && today.getDate() < day)
    ) {
        age--;
    }

    return age;
}