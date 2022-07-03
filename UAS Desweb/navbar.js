$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".navbar").css("transition", ".5s all");
            $(".navbar").css("background", "#ffffffbf");
        } else {
            $(".navbar").css("background", "transparent");
        }
    })
})