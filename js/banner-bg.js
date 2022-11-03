
const bg1 = document.getElementsByClassName("banner-bg-first")[0];
const bg2 = document.getElementsByClassName("banner-bg-second")[0];
const bg3 = document.getElementsByClassName("banner-bg-third")[0];


bg1.style.display = "block";
bg2.style.display = "none";
bg3.style.display = "none";
bg1.className = "banner-bg-first fadein";
setTimeout(() => {
    bg1.className = "banner-bg-first fadeout";
    setTimeout(() => {
        bg1.style.display = "none";
        bg3.style.display = "block";
        bg3.className = "banner-bg-third fadein";
        setTimeout(() => {
        bg3.className = "banner-bg-third fadeout";
            setTimeout(() => {
                bg3.style.display = "none";
                bg2.style.display = "block";
                bg2.className = "banner-bg-second fadein";
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);


