//section으로 스크롤 다운
var winH = $(window).height();
$(window).resize(function(){
    winH = $(window).height();
});
if(winH < 700) {
    winH = 700;
} else {};
    
var secH = winH - 80;
var sectionH = $('section').height();

$('#nav a, #m_nav a').click(function(event){
    event.preventDefault;
    var index = $(this).parent('li').index();
    $('html').animate({scrollTop:sectionH*index},500,'swing')
});


$(window).scroll(function(){
    var yPos = $(window).scrollTop();

    if(yPos < secH) {
        $('#nav li').removeClass('now_on');
        $('#nav li').eq(0).addClass('now_on');
    } else if(yPos >= secH && yPos < secH*2) {
        $('#nav li').removeClass('now_on');
        $('#nav li').eq(1).addClass('now_on');
        $('#section02 .h03, .site_list ul, #section02 .movebar').addClass('animationed');
    } else if(yPos >= secH*2 && yPos < secH*3) {
        $('#nav li').removeClass('now_on');
        $('#nav li').eq(2).addClass('now_on');
        $('#section03 .h03, .design_list ul , #section03 .movebar').addClass('animationed');
    } else  {
        $('#nav li').removeClass('now_on');
        $('#nav li').eq(3).addClass('now_on');
        $('#section04 .h03, .contact_num, .contact_em, .contact_img , #section04 .movebar').addClass('animationed');
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