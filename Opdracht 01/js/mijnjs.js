console.log("Dit werkt")

$('.navbar-nav>li>a').on('click', function() {
    console.log('hello it works!');
    $('.navbar-collapse').collapse('hide');
});