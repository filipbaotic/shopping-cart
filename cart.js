$(document).ready(function() {
    $(".view-cart").click(function(e) {
        e.preventDefault();
        $(".cart").toggleClass("hidden");
        $(".view-cart").toggleClass("active");
    });
});