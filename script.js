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



    /* =========================
       HEADING
    ========================== */

    heading.classList.add("heading-show");



    /* =========================
       CARD
    ========================== */

    setTimeout(function () {

        card.classList.add("card-show");

    }, 700);



    /* =========================
       END MESSAGE
    ========================== */

    setTimeout(function () {

        theme.classList.add("theme-show");

    }, 6200);



    /* =========================
       FALLING CONTAINER
    ========================== */

    var container =
        document.createElement("div");

    container.classList.add(
        "falling-container"
    );

    document.body.appendChild(container);



    /* =========================
       DECORATIONS
    ========================== */

    var decorations = [

        /* Confetti - Zyada */

        "▪",
        "▪",
        "▪",
        "▪",
        "▪",
        "▪",
        "•",
        "•",
        "•",
        "•",
        "✦",
        "✦",
        "✧",
        "✧",

        /* Flowers - Thore */

        "🌸",
        "🌸",
        "🌷",
        "🌼",

        /* Leaves - Thori */

        "🍃",
        "🍃",
        "🌿",

        /* Small Curly Ribbons */

        "〰",
        "〰",
        "〰",
        "〜",
        "〜"

    ];



    /* =========================
       CREATE ITEMS
    ========================== */

    for (var i = 0; i < 100; i++) {


        var item =
            document.createElement("div");


        item.classList.add(
            "falling-item"
        );



        /* Random Decoration */

        var randomDecoration =
            decorations[
                Math.floor(
                    Math.random() *
                    decorations.length
                )
            ];


        item.innerHTML =
            randomDecoration;



        /* Random Position */

        item.style.left =
            Math.random() * 100 + "%";



        /* Different Sizes */

        item.style.fontSize =
            (12 + Math.random() * 14) + "px";



        /* Different Falling Speeds */

        item.style.animationDuration =
            (5 + Math.random() * 6) + "s";



        /* Different Starting Times */

        item.style.animationDelay =
            Math.random() * 8 + "s";



        /* Random Rotation */

        item.style.marginLeft =
            (Math.random() * 20 - 10) + "px";



        /* Add To Page */

        container.appendChild(item);

    }

};