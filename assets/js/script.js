/* Custom JS Start */

$(function() {
    
    /* Owl Carousel Start */
    $("#serviceCarousel").owlCarousel({
        autoplay: true,
        rewind: true, 
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        smartSpeed: 200,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1024: {
                items: 4
            },
            1366: {
                items: 4
            }
        }
    });
    /* Owl Carousel End */

});

/* Open URL In New Tab Start */
function visitSite() {
    window.open('https://www.fylehq.com', '_blank');
}
/* Open URL In New Tab End */

/* Custom JS End */