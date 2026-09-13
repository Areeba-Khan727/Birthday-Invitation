window.onload = function () {


    var heading = document.querySelector(".heading-box");

    var card = document.querySelector(".birthday-card");

    var theme = document.querySelector(".theme-note");



    /* Heading show */

    heading.classList.add("heading-show");



    /* Card show */

    setTimeout(function () {

        card.classList.add("card-show");

    }, 700);



    /* Theme note show */

    setTimeout(function () {

        theme.classList.add("theme-show");

    }, 6200);


};