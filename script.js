// ===============================
// Happy Birthday Alok
// script.js
// ===============================

// Hide loading screen
window.addEventListener("load", function () {
    const loading = document.getElementById("loading");
    if (loading) {
        loading.style.display = "none";
    }
});

// Play / Pause Birthday Music
const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");

if (musicBtn && song) {

    musicBtn.addEventListener("click", function () {

        if (song.paused) {

            song.play();
            musicBtn.innerHTML = "⏸ Pause Music";

        } else {

            song.pause();
            musicBtn.innerHTML = "🎵 Play Birthday Music";

        }

    });

}

// Surprise Gift
function showGift() {

    const gift = document.getElementById("gift");

    if (gift) {

        gift.style.display = "block";

        gift.scrollIntoView({
            behavior: "smooth"
        });

    }

    // Confetti
    if (typeof confetti === "function") {

        confetti({
            particleCount: 250,
            spread: 120,
            origin: {
                y: 0.6
            }
        });

    }

}

// Floating Balloons
function createBalloon() {

    const balloon = document.createElement("div");

    balloon.innerHTML = "🎈";

    balloon.style.position = "fixed";
    balloon.style.left = Math.random() * window.innerWidth + "px";
    balloon.style.bottom = "-60px";
    balloon.style.fontSize = (30 + Math.random() * 30) + "px";
    balloon.style.pointerEvents = "none";
    balloon.style.zIndex = "999";

    document.body.appendChild(balloon);

    let position = -60;

    const move = setInterval(() => {

        position += 2;

        balloon.style.bottom = position + "px";

        if (position > window.innerHeight + 100) {

            clearInterval(move);
            balloon.remove();

        }

    }, 20);

}

setInterval(createBalloon, 800);

// Fade In Sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";

    observer.observe(section);

});

// Birthday Greeting
setTimeout(() => {

    alert("🎉 Happy Birthday Alok! Wishing you a wonderful year ahead! 🎂");

}, 1500);
