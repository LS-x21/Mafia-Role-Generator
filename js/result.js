const resultdiv = document.getElementById("result-content");
let resultHTML = "";
let roleList = [];
let tempList = "";
function calcuate(nameList, charaList) {
    roleList = [];
    tempList = charaList.join("*");
    resultHTML = "";
    let list = tempList.split("*");
    for (let x = 0; x < nameList.length; x++) {
        let ran = Math.floor(Math.random() * (list.length));
        roleList.push(list[ran]);
        list.splice(ran, 1);
    }
    for (let i = 0; i < roleList.length; i++) {
        resultHTML += `
        <!--spacer--><div id="result-player">
                <h2 id="chara-title">#${i+1} <br> ${roleNames[chara.indexOf(roleList[i])]}</h2>
                <div id="result-img-container"><img id="result-img" src="${IMG[chara.indexOf(roleList[i])]}"/></div>
                <h2 id="player-name">${nameList[i]}</h2>
            </div>
        `;
    }
    resultdiv.innerHTML = resultHTML;
}