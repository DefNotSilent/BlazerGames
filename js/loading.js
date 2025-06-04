document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const h1Element = document.getElementById('ld');

    const headings = [
        "frogies arcade goated",
        "new update when yeat drops",
        "remember to follow the tiktok @refinedsilent",
        "booyah!",
        "I Hate Friggin Hate Niggs - Retep Niffirg",
        "doesnt steal your data",
        "contains no sugar!",
        "the fog is coming, august 31st 2026",
        "goonicide before gta 6 is wild 😭🙏",
        "i cant put down the cup, i cant put down the cup",
        "can we all agree to start dabbing again in 2025? DATTEBYO!",
        "ts ste lwk pmo ngl lke icl ts ste is so bns ddss nt gnna us ts",
        "BOIII THIS SITE SO FRIGGIN TOUGH 🤣🫱",
        "instead of handing them a freaking packet, yo",
        "808 = essentially a crashout",
        "I'm actually sped - said The Fat Pig",
        "geeked vs locked in",
        "Mason A Fat Pig",
        "Website Friggin Tuff Yo",
        "\"if gravity can pull an apple, then you can pull a bad bih too\". - isacc newton",
        "best website for the unemployed",
        "gurt: yo",
        "Szvy On Top",
        "fly high wifiskeleton, may he rest in peace 🕊️"
    ];

    if (loadingScreen) {
        document.body.classList.add('loading');

        if (h1Element) {
            h1Element.textContent = headings[Math.floor(Math.random() * headings.length)];
        }

        window.addEventListener('load', function() {
            setTimeout(function() {
                loadingScreen.classList.add('fade-out');
                setTimeout(function() {
                    document.body.classList.remove('loading');
                }, 100);
            }, 100);
        });
    } else {
        console.error('loading screen not found?????');
    }
});
