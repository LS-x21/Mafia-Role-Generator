const load = document.getElementById("loading");
const loadCont = document.getElementById("loading-container");
const fp = document.getElementById("front");
const icon = document.getElementById("icon");
const sp = document.getElementById("second");
const menu = document.getElementById("role-menu");
const input = document.getElementsByClassName("rolenum");
const footer = document.getElementById("footer");
const modal = document.getElementById("modal");
const confirms = document.getElementById("confirm");
const result = document.getElementById("result");
const updateDiv = document.getElementById("update-content");
const updateIMG = document.getElementById("update");
const tp = document.getElementById("third");
const main = document.getElementById("main");

let IMG =
    [
        'https://cdn.discordapp.com/attachments/746477081143017522/820396876876480542/villa.png',
        'https://cdn.discordapp.com/attachments/746477081143017522/820396873793011732/prophet.png',
        'https://cdn.discordapp.com/attachments/746477081143017522/820396883188383784/guard.png',
        'https://cdn.discordapp.com/attachments/746477081143017522/820396875218681866/witch.png',
        'https://cdn.discordapp.com/attachments/746477081143017522/820396887801593856/hunter.png',
        'https://cdn.discordapp.com/attachments/746477081143017522/820398307717021696/idiot.png',
        'https://cdn.discordapp.com/attachments/746477081143017522/820397112364892220/wolf.png',
        'https://cdn.discordapp.com/attachments/746477081143017522/820396677617418250/wwk.png',
        'https://cdn.discordapp.com/attachments/746477081143017522/820396832181452800/pretty.png',
        'https://cdn.discordapp.com/attachments/746477081143017522/820396878330986507/cupid.png',
        'https://cdn.discordapp.com/attachments/746477081143017522/820396881561387058/bomb.png',
        'https://cdn.discordapp.com/attachments/746477081143017522/820396879740928041/elder.png',
        'https://cdn.discordapp.com/attachments/746477081143017522/820396884740407296/penguin.png',
        'https://cdn.discordapp.com/attachments/746477081143017522/820394786414526467/bear.png',
        'https://cdn.discordapp.com/attachments/746477081143017522/820396889652330566/sheep.png',
        'https://cdn.discordapp.com/attachments/746477081143017522/820396886531244122/rooster.png'
    ];
let IMGwBK =
    [
        "https://cdn.discordapp.com/attachments/746477081143017522/812878054484869170/unknown.png",
        "https://cdn.discordapp.com/attachments/746477081143017522/817150530185855036/unknown.png",
        "https://cdn.discordapp.com/attachments/746477081143017522/812763372956287057/unknown.png",
        "https://cdn.discordapp.com/attachments/746477081143017522/812850158407778376/unknown.png",
        "https://cdn.discordapp.com/attachments/746477081143017522/812849095906820116/unknown.png",
        "https://cdn.discordapp.com/attachments/746477081143017522/812878092783583242/unknown.png",
        "https://cdn.discordapp.com/attachments/746477081143017522/812878735267201024/unknown.png",
        "https://cdn.discordapp.com/attachments/746477081143017522/812878813688102972/unknown.png",
        "https://cdn.discordapp.com/attachments/746477081143017522/812878871945936926/unknown.png",
        "https://cdn.discordapp.com/attachments/746477081143017522/812850076870246441/unknown.png",
        "https://cdn.discordapp.com/attachments/746477081143017522/812849914336903178/unknown.png",
        "https://cdn.discordapp.com/attachments/746477081143017522/812849984214401024/unknown.png",
        "https://cdn.discordapp.com/attachments/746477081143017522/812849676621053993/unknown.png",
        "https://cdn.discordapp.com/attachments/746477081143017522/812848575637749800/unknown.png",
        "https://cdn.discordapp.com/attachments/746477081143017522/812848851417038908/unknown.png",
        "https://cdn.discordapp.com/attachments/746477081143017522/812849534665359380/unknown.png"
    ];
let x = 0;
let roleNames = ["Villager", "Prophet", "Guard", "Witch", "Hunter", "Idiot", "Wolf", "White Wolf King", "Pretty Wolf", "Cupid", "Bomber", "Elder", "Penguin", "Bear", "Sheep", "Rooster"];
let chara = ["villa", "prophet", "guard", "witch", "hunter", "idiot", "wolf", "wwk", "pretty", "cupid", "bomb", "elder", "penguin", "bear", "sheep", "rooster"];
let secondContent = `
<div id="content">
    <div id="subject-container">
        <h1 id="player-title">Presets</h1>
        <div id="presets">
            <div class="presets" onclick="preset6();">
            <p id="presets-text">6 players</p>
                <div class="preset-content">
                    <p id='preset-content-text'>2 <img class="preset-icon" src="${IMG[6]}">wolves</p>
                    <p id='preset-content-text'>2 <img class="preset-icon" src="${IMG[0]}">villagers</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[1]}">prophet</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[2]}">guard</p>
                </div>
            </div>
            <div class="presets" onclick="preset7();">
            <p id="presets-text">7 players</p>
                <div class="preset-content">
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[7]}">white wolf king</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[6]}">wolf</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[0]}">villager</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[1]}">prophet</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[3]}">witch</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[4]}">hunter</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[2]}">guard</p>
                </div>
            </div>
            <div class="presets" onclick="preset8();">
            <p id="presets-text">8 players</p>
                <div class="preset-content">
                    <p id='preset-content-text'>3 <img class="preset-icon" src="${IMG[7]}">white wolf kings</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[1]}">prophet</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[3]}">witch</p>
                    <p id='preset-content-text'>2 <img class="preset-icon" src="${IMG[4]}">hunters</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[2]}">guard</p>
                </div>  
            </div>
            <div class="presets" onclick="preset9();">
            <p id="presets-text">9 players</p>
                <div class="preset-content">
                    <p id='preset-content-text'>3 <img class="preset-icon" src="${IMG[6]}">wolves</p>
                    <p id='preset-content-text'>3 <img class="preset-icon" src="${IMG[0]}">villagers</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[1]}">prophet</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[3]}">witch</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[4]}">hunter</p>
                </div>
            </div>
            <div class="presets" onclick="preset12();">
            <p id="presets-text">12 players plain</p>
                <div class="preset-content">
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[7]}">white wolf king</p>
                    <p id='preset-content-text'>3 <img class="preset-icon" src="${IMG[6]}">wolves</p>
                    <p id='preset-content-text'>4 <img class="preset-icon" src="${IMG[0]}">villagers</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[1]}">prophet</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[3]}">witch</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[4]}">hunter</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[2]}">guard</p>
                </div>
            </div>
            <div class="presets" onclick="preset12A();">
                <p id="presets-text">12 players w/ cupid</p>
                <div class="preset-content">
                    <p id='preset-content-text'>4 <img class="preset-icon" src="${IMG[6]}">wolves</p>
                    <p id='preset-content-text'>4 <img class="preset-icon" src="${IMG[0]}">villagers</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[1]}">prophet</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[3]}">witch</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[2]}">guard</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[9]}">cupid</p>
                </div>
            </div>
            <div class="presets" onclick="preset12B();">
                <p id="presets-text">12 players w/ idiot</p>
                <div class="preset-content">
                    <p id='preset-content-text'>4 <img class="preset-icon" src="${IMG[6]}">wolves</p>
                    <p id='preset-content-text'>4 <img class="preset-icon" src="${IMG[0]}">villagers</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[1]}">prophet</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[3]}">witch</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[4]}">hunter</p>
                    <p id='preset-content-text'>1 <img class="preset-icon" src="${IMG[5]}">idiot</p>
                </div>
            </div>
            <div class="presets" onclick="wh();">
                <p id="presets-text">wolves & hunters</p>
                <div class="preset-content">
                    <p id='preset-content-text'>4 <img class="preset-icon" src="${IMG[6]}">wolves</p>
                    <p id='preset-content-text'>6 <img class="preset-icon" src="${IMG[4]}">hunter</p>
                </div>
            </div>
        </div>
    </div>
    <div id="subject-container">
        <div id="player-names">
            <h1 id="player-title">Players</h1>
            <div id="names"></div>
            <div id="button-input">
                <button class="buttons" id="minus" onclick="minus()">-</button>
                <button class="buttons" id="add" onclick="add()">+</button>
            </div>
        </div>
    </div>
    <div id="subject-container">
        <h1 id="player-title">Characters</h1>
        <div id="roles"></div>
    </div>
    <div id="spacer"></div>
</div>`
let players = [];
let nameHTML = [];
let nameValues = [];
let nameList = [];
let charaList = [];
let tempHTML;

icon.innerHTML = '';
for (let i = 0; i < 16; ++i) {
    icon.innerHTML += `
    <div class="char-icon" style="--x:${i}">
        <img class="chars-icon" style="--x:${i}"
        src="${IMG[i]}"
        alt="">
    </div>`
}

loadCont.innerHTML = `
    <div id="loading-text" style="--i:1">L</div>
    <div id="loading-text" style="--i:2">O</div>
    <div id="loading-text" style="--i:3">A</div>
    <div id="loading-text" style="--i:4">D</div>
    <div id="loading-text" style="--i:5">I</div>
    <div id="loading-text" style="--i:6">N</div>
    <div id="loading-text" style="--i:7">G</div>
    <div id="loading-text" style="--i:8">.</div>
    <div id="loading-text" style="--i:9">.</div>
    <div id="loading-text" style="--i:10">.</div>
`;

function loading() {
    load.style.display = 'flex';
    load.style.opacity = 100;
    setTimeout(() => {
        load.style.opacity = 0;
        setTimeout(() => {
            load.style.display = 'none';
        }, 1000);
    }, Math.floor(Math.random() * 2 + 1) * 750);
}

function secondContentFunc() {
    const rolesHTML = document.getElementById('roles');
    roles.innerHTML = '';
    for (let i = 0; i < roleNames.length; i++) {
        rolesHTML.innerHTML += ` <div id="chara" id=${roleNames[i]}>
        <img id="chara-pic"
            src=${IMGwBK[i]}>
        ${roleNames[i]}
        <div id="role-menu">
            <button class="pm" onclick="minusval('${chara[i]}')">-</button>
            <input class="rolenum" type="number" min="0" max="20" id="${chara[i]}" required>
            <button class="pm" onclick="addval('${chara[i]}')">+</button>
        </div>
    </div>`
    }
}

function second() {
    footer.innerHTML = `
    <div class="back" id="submit" onclick="document.location='index.html'"><p id="submit-arrow"> ← <p></div>
            <div id="lines">
                <hr id="footer-line">
                <hr id="footer-line">
                <hr id="footer-line">
            </div>
            <div class="reset" id="submit" onclick="reset()"><p id="submit-text"> reset </p></div>
            <div class="submit" id="submit" onclick="submit()"><span id="submit-arrow"> → </span></div>
    `;
    result.style.display = 'none';
    updateIMG.style.display = 'none';
    document.body.style.overflowY = 'scroll';
    sp.innerHTML = secondContent;
    secondContentFunc();
    var names = document.getElementById("names");
    x = 0;
    names.innerHTML = " ";
    nameHTML = [];
    for (let i = 0; i < chara.length; i++) {
        document.getElementById(chara[i]).value = 0;
    }
    for (let i = 0; i < 4; i++) {
        x++;
        nameHTML.push(`
        <div class="name">
    <img  class="player-icon" src="photos/player_icon2.png">
    <h1 id="player-title-name">Player ${x}</h1>
    <div id="player-text">Name: <input type="text" class="player-input" id="player${x}" value="unnamed" required></div>
    </div>`);
    }

    names.innerHTML = nameHTML.join("<!---->");
    sp.style.opacity = '0';
    setTimeout(() => {
        icon.style.display = 'none';
        fp.style.display = 'none';
        sp.style.display = 'flex';
        footer.style.display = 'flex';
        sp.style.opacity = 100;
        document.body.style.overflowY = 'scroll';
    }, 1000);
}

function ins() {
    main.style.opacity = 0;
    setTimeout(() => {
        third.style.display = 'flex';
        fp.style.display = 'none';
        icon.style.display = 'none';
        updateIMG.style.display = 'none';
        document.body.style.overflowY = 'scroll';
    }, 1000);
}

loading();