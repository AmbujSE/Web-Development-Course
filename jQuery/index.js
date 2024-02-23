$('h1').click(function(){
    $('h1').addClass('big-title');
    $("h1").css("color", "purple");
});

$('button').on('click', function(){
    // $('h1').hide();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideToggle();
    $('h1').animate({opacity: 0.5});
})

// $(document).keypress(function(event) {
//     // console.log(event.key);
//     $('h1').text(event.key);
// })

// $('h1').mouseover(function(){
//     $('h1').addClass('big-title');
//     $("h1").css("color", "purple");
// });