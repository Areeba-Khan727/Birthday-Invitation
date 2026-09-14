window.onload = function () {


    /* =========================
       SELECT ELEMENTS
    ========================== */

    var heading =
        document.querySelector(".heading-box");


    var card =
        document.querySelector(".birthday-card");


    var theme =
        document.querySelector(".theme-note");


    var confettiContainer =
        document.querySelector(".confetti-container");



    /* =========================
       SHOW HEADING
    ========================== */

    heading.classList.add("heading-show");



    /* =========================
       SHOW CARD
    ========================== */

    setTimeout(function () {

        card.classList.add("card-show");

    }, 700);



    /* =========================
       SHOW THEME NOTE
    ========================== */

    setTimeout(function () {

        theme.classList.add("theme-show");

    }, 6200);



    /* =========================
       CREATE CONFETTI
    ========================== */

    for (var i = 0; i < 70; i++) {


        var confetti =
            document.createElement("div");


        confetti.classList.add("confetti");



        /* Random Horizontal Position */

        confetti.style.left =
            Math.random() * 100 + "%";



        /* Random Width */

        confetti.style.width =
            (5 + Math.random() * 7) + "px";



        /* Random Height */

        confetti.style.height =
            (8 + Math.random() * 12) + "px";



        /* Random Shape */

        if (Math.random() > 0.5) {

            confetti.style.borderRadius =
                "50%";

        }



        /* Random Falling Speed */

        confetti.style.animationDuration =
            (3 + Math.random() * 3) + "s";



        /* Random Delay */

        confetti.style.animationDelay =
            Math.random() * 2 + "s";



        /* Confetti Colors */

        var colors = [

            "#ff4fa3",
            "#ffd166",
            "#7c5cff",
            "#4dd4ff",
            "#ffffff",
            "#ff6b6b"

        ];



        var randomColor =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];



        confetti.style.backgroundColor =
            randomColor;



        /* Add Confetti To Page */

        confettiContainer.appendChild(
            confetti
        );

    }

};