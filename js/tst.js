// $(".next").click(function(){
//     console.log("test");
//     // var $target = $('.ACTIVE').next('.toscroll');
//     // if ($target.length == 0)
//     //   $target = $('.toscroll:first');
//     //   $('html, body').animate({
//     //   scrollTop: $target.offset().top
//     // }, 'slow');
  
//     // $('.active').removeClass('active');
//     // $target.addClass('active');
//   });
// document.querySelector(".next").addEventListener("click",function(){
window.addEventListener("keypress",function(){
    if (event.key=="n"){
    // if(this.event.)
    let $target;
let $childs=$('.ACTIVE').children('.toscroll:first');
        if ($childs.length!=0)
        {
            $target=$childs;
            // console.log($target);
        }
        else if($target.parent().next('.toscroll').length==0){
            console.log($target);
            $target.prev().parent().next('toscroll');
        }
        else{
     $target=$('.ACTIVE').next('.toscroll'); }

    // console.log($target);
    if ($target.length == 0)
        $target = $('.toscroll:first');
    $('html, body').animate({
        scrollTop: $target.offset().top
    }, 'slow');

    $('.ACTIVE').removeClass('ACTIVE');
    $target.addClass('ACTIVE');
    
     if ($target.next()==0){
        //  $target=$target.parent('.toscroll').next('.toscroll');
     }
    
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
document.querySelector(".prev").addEventListener("click",function(){
    // window.addEventListener("keypress",function(){
    //     console.log(event.key);
    let $target=$('.ACTIVE').prev('.toscroll');
        if ($target.length == 0)
            $target = $('.toscroll:last');
        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 'slow');
    
        $('.ACTIVE').removeClass('ACTIVE');
        $target.addClass('ACTIVE');
    
    })