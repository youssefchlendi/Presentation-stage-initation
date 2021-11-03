


// JavaScript Document
$('.portfolio').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    dots:true,
	 responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('a').click(function(){
    if ($(this).attr('href')!=undefined){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;}
});

$(function() {
    //caches a jQuery object containing the header element
    var nav = $(".vv");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            nav.removeClass('navbar-dark').addClass("navbar-light bg-light shadow-lg");
        } else {
            nav.removeClass("navbar-dark bg-light shadow-lg").addClass('navbar-dark navi');
        }
    });
});
// Cache selectors
var topMenu = $(".nav2"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu2 items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   // Set/remove active2 class
   menuItems
     .parent().removeClass("active2")
     .end().filter("[href='#"+id+"']").parent().addClass("active2");
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});




$(document).ready(function () {
    $('.dropdown-toggle').mouseover(function() {
        $('.dropdown-menu').show();
    })

    $('.dropdown-toggle').mouseout(function() {
        t = setTimeout(function() {
            $('.dropdown-menu').hide();
        }, 100);

        $('.dropdown-menu').on('mouseenter', function() {
            $('.dropdown-menu').show();
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('.dropdown-menu').hide();
        })
    })
})

document.querySelector("#m1").addEventListener("mouseover",(e)=>{
    $('#m1 div  .dropdown').show();
})    ;
document.querySelector("#m1").addEventListener("mouseout",(e)=>{
    $('#m1 div  .dropdown').hide();
});
document.querySelector("#m2").addEventListener("mouseover",(e)=>{
    $('#m2 div  .dropdown-side').show();
})    ;
document.querySelector("#m2").addEventListener("mouseout",(e)=>{
    $('#m2 div  .dropdown-side').hide();
});
document.querySelector("#m3").addEventListener("mouseover",(e)=>{
    $('#m3 div  .dropdown-side').show();
})    ;
document.querySelector("#m3").addEventListener("mouseout",(e)=>{
    $('#m3 div  .dropdown-side').hide();
});
document.querySelector("#m4").addEventListener("mouseover",(e)=>{
    $('#m4 div  .dropdown-side').show();
})    ;
document.querySelector("#m4").addEventListener("mouseout",(e)=>{
    $('#m4 div  .dropdown-side').hide();
});
 
// document.querySelector("#m2").addEventListener("click",(e)=>{
//     $('#m2 div  .dropdown').hide();
// })
function playPauseVideo() {
    let videos = document.querySelectorAll("video");
    videos.forEach((video) => {
        // We can only control playback without insteraction if video is mute
        video.muted = true;
        // Play is a promise so we need to check we have it
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then((_) => {
                let observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (
                                entry.intersectionRatio !== 1 &&
                                !video.paused
                            ) {
                                video.pause();
                            } else if (video.paused) {
                                video.play();
                            }
                        });
                    },
                    { threshold: 0.2 }
                );
                observer.observe(video);
            });
        }
    });
}

// And you would kick this off where appropriate with:
playPauseVideo();
window.addEventListener("keypress",function(){
    if (event.key=="n"){
    // if(this.event.)
let $target=$('.ACTIVE').next('.toscroll');
    if ($target.length == 0)
        $target = $('.toscroll:first');
    $('html, body').animate({
        scrollTop: $target.offset().top
    }, 'slow');

    $('.ACTIVE').removeClass('ACTIVE');
    $target.addClass('ACTIVE');
}   else if (this.event.key=="p"){
    let $target=$('.ACTIVE').prev('.toscroll');
        if ($target.length == 0)
            $target = $('.toscroll:last');
        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 'slow');
    
        $('.ACTIVE').removeClass('ACTIVE');
        $target.addClass('ACTIVE');
}

})
$(function() {
    //caches a jQuery object containing the header element
    var nav = $("#menu");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 550) {
            nav.fadeIn();
        } else {
            nav.fadeOut();
        }
    });
});

function test() {

    let observer = new IntersectionObserver((divs, observer) => { 
        divs.forEach(div => {
            console.log(div.target.id);

            let selector='.'+div.target.id;
            if (div.target.id.length!=0){
        let bedel=document.querySelector(selector);
        if (bedel!=null){
        if(div.isIntersecting){
          div.target.src = div.target.dataset.src;
          bedel.classList.remove("notinview");
          bedel.classList.add("inview");
        }else{
            bedel.classList.remove("inview");
            bedel.classList.add("notinview");
        }}}
        });
      },{
        threshold: 0.3,
      });
      document.querySelectorAll('.toscroll').forEach(img => { observer.observe(img) });
}
test();
// let inn=document.querySelectorAll(".notinview");
// inn.forEach(item =>{
//     addEventListener("mouseenter",()=>{
//         console.log(item);
//         item.classList.add("inview");
// })});
// inn.forEach(item =>{
//     addEventListener("mouseleave",()=>{
//         console.log(item);
//         item.classList.remove("inview");
// })});