//section으로 스크롤 다운
var winH = $(window).height();
if(winH < 700) {
    winH = 700;
} else {};
    
$('#nav a, #m_nav a').click(function(event){
    event.preventDefault;
    console.log(winH);
    var index = $(this).parent('li').index();
    $('html').animate({scrollTop:winH*index},500,'swing')
});

var secH = winH - 60;

$(window).scroll(function(){
    var yPos = $(window).scrollTop();

    if(yPos < winH) {
        $('#nav li').removeClass('now_on');
        $('#nav li').eq(0).addClass('now_on');
    } else if(yPos >= secH && yPos < secH*2) {
        $('#nav li').removeClass('now_on');
        $('#nav li').eq(1).addClass('now_on');
    } else if(yPos >= secH*2 && yPos < secH*3) {
        $('#nav li').removeClass('now_on');
        $('#nav li').eq(2).addClass('now_on');
    } else  {
        $('#nav li').removeClass('now_on');
        $('#nav li').eq(3).addClass('now_on');
    } 
});


//클래스 명을 추출해서 같은 클래스명이 붙은 팝업창을 불러옴
$('.img_box').on('click',function(){
    var popName = $(this).parent('li').attr('class');
    $('.dim_pop , .popup_list .'+popName).fadeIn(300,'swing');
});

$('.close_btn').on('click',function(e){
    e.preventDefault();
    popClose();
});

$('.dim_pop').on('click',function(){
    popClose();
});

function popClose() {
    $('.popup_wrap, .dim_pop').fadeOut(300,'swing');
};


//메뉴 버튼을 누르면 메뉴가 보임

var open = 1;
$('.tab_menu_btn').on('click',function(){

    if(open==1){
        $('.tab_menu_btn').addClass('opened');
        $('#m_nav').fadeIn(300);
        open = 2;
    } else {
        $('.tab_menu_btn').removeClass('opened');
        $('#m_nav').fadeOut(300);
        open = 1;
    }
});


//모바일 nav a를 클릭하면 모바일 nav창이 닫히게
$('#m_nav a').on('click',function(){
    M_nav_menuClose();
});


$(window).resize(function(){
    var winW = $(window).width();
    if(winW >960) {
        M_nav_menuClose();
    } else {};
});


function M_nav_menuClose() {
    $('.tab_menu_btn').removeClass('opened');
    $('#m_nav').fadeOut(300);
    open = 1;
}