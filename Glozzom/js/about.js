console.log('Dit werkt');

// Get the current year for the copyright
$('#year').text(new Date().getFullYear());


// Slick Slider
$('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1
});