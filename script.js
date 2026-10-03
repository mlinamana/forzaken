/* =====================================
   FORSAKEN - MAIN SCRIPT
===================================== */


/* =========================
   SCROLL
========================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================
   MODAL
========================= */

function showWarning() {

    const modal = document.getElementById("warningModal");

    modal.classList.add("active");

}


function closeWarning() {

    const modal = document.getElementById("warningModal");

    modal.classList.remove("active");

}


/* =========================
   SONIDO
========================= */

let soundEnabled = true;

const soundBtn =
    document.getElementById("soundBtn");


soundBtn.addEventListener("click", function () {

    soundEnabled = !soundEnabled;

    if (soundEnabled) {

        soundBtn.textContent = "🔊";

    } else {

        soundBtn.textContent = "🔇";

    }

});


/* =========================
   GLITCH RANDOM
========================= */

const logo =
    document.querySelector(".logo");


setInterval(() => {

    if (Math.random() > .75) {

        logo.style.transform =
            "translateX(" +
            (Math.random() * 4 - 2) +
            "px)";

        setTimeout(() => {

            logo.style.transform = "";

        }, 80);

    }

}, 2000);


/* =========================
   TARJETAS
========================= */

const cards =
    document.querySelectorAll(".character-card");


cards.forEach(card => {

    card.addEventListener("mousemove", function(e) {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", function() {

        card.style.transform = "";

    });

});


/* =========================
   MENSAJE SECRETO
========================= */

let clicks = 0;


document.querySelector(".footer-logo")
    .addEventListener("click", function() {

        clicks++;

        if (clicks >= 5) {

            alert(
                "⚠ ARCHIVO OCULTO DESBLOQUEADO...\n\n" +
                "NO CONFÍES EN NADIE."
            );

            clicks = 0;

        }

    });


/* =========================
   TECLA ESC
========================= */

document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {

        closeWarning();

    }

});


/* =========================
   EFECTO DE TEXTO
========================= */

const terminalLines =
    document.querySelectorAll(".terminal p");


terminalLines.forEach((line, index) => {

    line.style.opacity = "0";

    setTimeout(() => {

        line.style.transition =
            "opacity 1s";

        line.style.opacity = "1";

    }, index * 500);

});


/* =========================
   MENSAJE CONSOLA
========================= */

console.log(
`
╔══════════════════════════════════╗
║                                  ║
║          FORSAKEN                ║
║       SURVIVAL ARCHIVES          ║
║                                  ║
║  YOU WERE NOT SUPPOSED TO        ║
║  FIND THIS.                      ║
║                                  ║
╚══════════════════════════════════╝
`
);