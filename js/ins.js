const load = document.getElementById("loading");

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

loading();