let init = () => {
    if ($(window).width() <= 1023 && !$('.main .book').hasClass('mobile')) {
        $('.main .btn').before($('.main .book'));
        $('.main .book').addClass('mobile');
    }
    
    if ($(window).width() > 1023 && $('.main .book').hasClass('mobile')) {
        console.log('object');
        $('.main .pdf').before($('.main .book'));
        $('.main .book').removeClass('mobile');
    }
}

init();
$(window).resize(init);

$('body').on('click', '.features a', () => {
    $("html, body").stop().animate({scrollTop: $(document).height()}, 500, 'swing', function() { 
        // alert("Finished animating");
     });
})