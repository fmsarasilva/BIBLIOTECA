/*global $*/

$(".menu-toggle").click(function () {
    "use strict";
    $(".nav").toggleClass("nav-open", 500);
    $(this).toggleClass('open');
    $(".sub-menu").slideUp("visible");
});

$("#dropdown li").click(function () {
    "use strict";
    $(this).siblings().find(".sub-menu").slideUp();
    $(this).find('.sub-menu').slideToggle();
});

$(".categories").click(function (e) {
    "use strict";
    e.stopPropagation();
});

