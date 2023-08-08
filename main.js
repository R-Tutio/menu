$("#open").click(function (){
    $(".menu").css({
left:"0px"
    })
})
$("#close").click(function (){
    $(".menu").css({
        left:"-100%"
    })
})
$(".menu>nav>ul>li").click(function (){
    $(this).find("ul").slideToggle()
})