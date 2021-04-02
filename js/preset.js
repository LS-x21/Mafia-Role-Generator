let presetObject = {
    name: "preset6",
    x: 6,
    villa: 0,
    prophet: 0,
    guard: 0,
    witch: 0,
    hunter: 0,
    idiot: 0,
    wolf: 0,
    wwk: 0,
    pretty: 0,
    cupid: 0,
    bomb: 0,
    elder: 0,
    penguin: 0,
    bear: 0,
    sheep: 0,
    rooster: 0
};

function preset6() {
    x = 6;
    setplayers();
    wolf.value = 2;
    villa.value = 2;
    prophet.value = 1;
    guard.value = 1;
} function preset7() {
    x = 7;
    setplayers();
    wwk.value = 1;
    wolf.value = 1;
    villa.value = 1;
    prophet.value = 1;
    witch.value = 1;
    hunter.value = 1;
    guard.value = 1;
} function preset8() {
    x = 8;
    setplayers();
    wwk.value = 3;
    prophet.value = 1;
    witch.value = 1;
    hunter.value = 2;
    guard.value = 1;
} function preset9() {
    x = 9
    setplayers();
    wolf.value = 3;
    villa.value = 3;
    prophet.value = 1;
    witch.value = 1;
    hunter.value = 1;
} function preset12() {
    x = 12;
    setplayers();
    wwk.value = 1;
    wolf.value = 3;
    villa.value = 4;
    prophet.value = 1;
    witch.value = 1;
    hunter.value = 1;
    guard.value = 1;
} function preset12A() {
    x = 12;
    setplayers();
    wolf.value = 4;
    villa.value = 4;
    prophet.value = 1;
    witch.value = 1;
    hunter.value = 1;
    cupid.value = 1;
} function preset12B() {
    x = 12;
    setplayers();
    wwk.value = 1;
    wolf.value = 3;
    villa.value = 4;
    prophet.value = 1;
    witch.value = 1;
    hunter.value = 1;
    idiot.value = 1;
} function setplayers() {
    reset();
    names.innerHTML = '';
    for (var i = 0; i < x; i++) {
        names.innerHTML += `<!--spacer--><div class="name">
        <img  class="player-icon" src="photos/player_icon2.png">
        <h1 id="player-title-name">Player ${i + 1}</h1>
        <div id="player-text">Name: <input type="text" class="player-input" id="player${i + 1}" value="unnamed" required></div>
    </div>`
    }

} function wh() {
    x = 10;
    setplayers();
    wolf.value = 4;
    hunter.value = 6;
} function reset() {
    charaList = [];
    for (let y = 0; y < chara.length; y++)
        document.getElementById(chara[y]).value = 0;
}