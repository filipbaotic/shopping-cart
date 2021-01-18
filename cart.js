$(document).ready(function() {
    $(".view-cart").click(function() {
        $("#cart").toggleClass("hidden");
        $(".view-cart").toggleClass("active");
    });

    var count = 0;
    $('.down').click(function() {
        if (count < 2) {
            count += 1;
            $('.list').css('margin-top', '-=90px');
        }
    });
    $('.up').click(function() {
        if (count != 0) {
            count -= 1;
            $('.list').css('margin-top', '+=90px');
        }
    });
    $('.up, .down').click(function() {
        if (count < 2) {
            $(".down").removeClass("disabled");
        }
        if (count == 2) {
            $(".down").addClass("disabled");
        }
        if (count == 0) {
            $(".up").addClass("disabled");
        }
        if (count != 0) {
            $(".up").removeClass("disabled");
        }
    });
    $(".view-cart").click(function() {
        if ($('#cart').hasClass('hidden')) {
            count = 0;
            $('.list').css('margin-top', '0px');
            $(".up").addClass("disabled");
            $(".down").removeClass("disabled");
        };
    });

});