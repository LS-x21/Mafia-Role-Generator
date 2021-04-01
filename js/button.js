function add() {
    var names = document.getElementById("names");
    nameHTML = names.innerHTML.split("<!--spacer-->");
    getVal();
    x++;
    nameHTML.push(`
    <div class="name">
    <img  class="player-icon" src="photos/player_icon2.png">
    <h1 id="player-title-name">Player ${x}</h1>
    <div id="player-text">Name: <input type="text" class="player-input" id="player${x}" value="unnamed" required></div>
    </div>`);
    names.innerHTML = nameHTML.join("<!--spacer-->");
    setVal();
}

function minus() {
    var names = document.getElementById("names");
    nameHTML = names.innerHTML.split("<!--spacer-->");
    if (x <= 4) {
        alert('There must be at least four players');
        return;
    }
    nameValues.pop();
    getVal();
    nameHTML.pop();
    x--;
    names.innerHTML = nameHTML.join("<!--spacer-->");
    setVal();
}

function getVal() {
    for (let i = 1; i <= x; i++)
        nameValues[i - 1] = document.getElementById(`player${i}`).value;
}

function setVal() {
    for (let i = 1; i < nameValues.length; i++)
        document.getElementById(`player${i}`).value = nameValues[i - 1];
}

function addval(name) {
    document.getElementById(name).value++;
} 

function minusval(name) {
    if (document.getElementById(name).value > 0)
        document.getElementById(name).value--;
}


function submit() {
    modal.style.display = "flex";
    confirms.style.display = "flex";
    setTimeout(function () {
        modal.style.opacity = "50%";
        confirms.style.opacity = "100%";
    }, 500);
}

function decline() {
    modal.style.opacity = "0";
    confirms.style.opacity = "0";
    setTimeout(function () {
        modal.style.display = "none";
        confirms.style.display = "none";
    }, 500);
}

function accept() {
    charaList = [];
    nameList = [];
    secondContent = sp.innerHTML;
    let charaTotal = 0;
    for (let i = 0; i < chara.length; i++)
        charaTotal += parseInt(document.getElementById(chara[i]).value);
    if (charaTotal != x) {
        alert(`You have ${x} players, but you have ${charaTotal} roles. Make sure no input is left blank`);
        decline();
        return;
    }
    for (let i = 1; i <= x; i++) {
        try {
            nameList.push(document.getElementById(`player${i}`).value);
        }
        catch (e) {
            alert(e);
            decline();
            break;
        }
    }

    for (let i = 0; i < chara.length; i++)
        for (let j = 0; j < document.getElementById(chara[i]).value; j++)
            charaList.push(chara[i]);

    if (charaList.includes('wolf') || charaList.includes('wwk') || charaList.includes('pretty')) {
        decline();
        loadCont.innerHTML = `
                <div id="loading-text" style="--i:1">G</div>
                <div id="loading-text" style="--i:2">E</div>
                <div id="loading-text" style="--i:3">N</div>
                <div id="loading-text" style="--i:4">E</div>
                <div id="loading-text" style="--i:5">R</div>
                <div id="loading-text" style="--i:6">A</div>
                <div id="loading-text" style="--i:7">T</div>
                <div id="loading-text" style="--i:8">I</div>
                <div id="loading-text" style="--i:9">N</div>
                <div id="loading-text" style="--i:10">G</div>
                <div id="loading-text" style="--i:11">.</div>
                <div id="loading-text" style="--i:12">.</div>
                <div id="loading-text" style="--i:13">.</div>`
        loading();
        sp.style.display = 'none';
        result.style.display = 'flex';
        footer.style.display = 'flex';
        const fl = document.getElementById("footer-line");
        fl.style.width = '65vw';
        footer.innerHTML = `
        <button class="back" id="submit" onclick="back();">back</button>
            <div id="lines">
                <hr id="footer-line">
                <hr id="footer-line">
                <hr id="footer-line">
            </div>
            <button class="reconfigure" style="width:150px" id="submit" onclick="calcuate(nameList, charaList)">reconfigure</button>
        `
        calcuate(nameList, charaList);
    } else {
        alert("You don't have any wolves");
        decline();
        return;
    }
}

function update() {
    modal.style.display = "flex";
    updateDiv.style.display = "flex";
    setTimeout(function () {
        modal.style.opacity = "50%";
        updateDiv.style.opacity = "100%";
    }, 500);
}

function updateClose() {
    modal.style.opacity = "0";
    updateDiv.style.opacity = "0";
    setTimeout(function () {
        modal.style.display = "none";
        updateDiv.style.display = "none";
    }, 500);
}

function back() {
    var names = document.getElementById("names");
    x = 0;
    nameList = [];
    charaList = [];
    names.innerHTML = '';
    for (let y = 0; y < chara.length; y++)
        document.getElementById(chara[y]).value = 0;
    second();
}