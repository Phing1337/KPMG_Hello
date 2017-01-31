$(document).ready(function(){
$("body").css("overflow", "hidden");
console.log("Hello");
  
   /* addEventListener("click", function() {
    var el = document.documentElement,
      rfs = el.requestFullscreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
        || el.msRequestFullscreen 
    ;

    rfs.call(el);
});*/

    
// if i click people then link to people.html
// then fade in blur and dark background
// then fade in page info
    
    $(".nav1").click(function(){
       //toggleBlur();
    $(".content").fadeToggle();
    $('.fill').fadeToggle();
    
});
    

 function toggleBlur () {
     if ($(".fill:hidden").length){
           $('.swiper-slide').css({"filter":"blur(5px)"});
       }
        else
             $('.swiper-slide').css({"filter":"blur(0px)"});
  };
    
    
   /* function fullscreen()
      {
        
        var fullscrn = document.getElementsByClassName("breaker")[0];
        req= fullscrn.requestFullScreen || fullscrn.webkitRequestFullScreen || fullscrn.mozRequestFullScreen;
        req.call(fullscrn);

      } */
    
    function enterFullscreen(){
    var element = document.getElementByClassName('breaker')[0];
    if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
    l('Fullscreen Mode entered','internal');
}
    
    $('.breaker').click(enterFullscreen);
    
    
    $('.xde').click(function(){
            $('.inactive').css({"color":"white"});
            $('.xde').css({"color":"orange"});
            $('.fp').hide();
              $('.bio').hide();
              $('#xde').fadeIn();
        $('#fp-xde').fadeIn();
        });
    $('.tax').click(function(){
        $('.inactive').css({"color":"white"});
            $('.tax').css({"color":"orange"});
              $('.bio').hide();
                $('.fp').hide();
              $('#tax').fadeIn();
                $('#fp-tax').fadeIn();
        });
   $('.workday').click(function(){
       $('.inactive').css({"color":"white"});
            $('.workday').css({"color":"orange"});
       $('.fp').hide();
              $('.bio').hide();
              $('#workday').fadeIn();
       $('#fp-workday').fadeIn();
        });
    $('.service').click(function(){
        $('.inactive').css({"color":"white"});
            $('.service').css({"color":"orange"});
        $('.fp').hide();
              $('.bio').hide();
              $('#service').fadeIn();
        $('#fp-service').fadeIn();
        });
    $('.oracle').click(function(){
        $('.inactive').css({"color":"white"});
            $('.oracle').css({"color":"orange"});
        $('.fp').hide();
              $('.bio').hide();
              $('#oracle').fadeIn();
        $('#fp-oracle').fadeIn();
        });
    $('.tbm').click(function(){
        $('.inactive').css({"color":"white"});
            $('.tbm').css({"color":"orange"});
        $('.fp').hide();
              $('.bio').hide();
              $('#tbm').fadeIn();
        $('#fp-tbm').fadeIn();
        });
    $('.lighthouse').click(function(){
        $('.inactive').css({"color":"white"});
            $('.lighthouse').css({"color":"orange"});
        $('.fp').hide();
              $('.bio').hide();
              $('#lighthouse').fadeIn();
        $('#fp-lighthouse').fadeIn();
        });
});