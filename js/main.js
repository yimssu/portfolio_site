var lastScrollTop = 0;

window.addEventListener('DOMContentLoaded', function () {

    var scrollTop = $(this).scrollTop();

    setTimeout(() => {
        $('#section01 .heart02_01').addClass('on');
    },100)
    setTimeout(() => {
        $('#section01 .heart03_01').addClass('on');
    },200)
    setTimeout(() => {
        $('#section01 .heart01_01').addClass('on');
    },400)
    setTimeout(() => {
        $('#section01 .heart06_01').addClass('on');
        $('#section01 .heart07_01').addClass('on');
        $('#section01 .title01_01').addClass('on');
        $('#section01 .title02_01').addClass('on');
        $('#section01 .title_ac01_01').addClass('on');
        $('#section01 .subtitle02_01').addClass('on');
    },900)



    $("#container").each(function () {
        var contentIndex = $(this).attr("id");
        if(scrollTop >= $(this).offset().top) {
            $(".scroll_03 a").removeClass("on");
            $(".scroll_03 a[href=#"+contentIndex+"]").addClass("on");
        }
    })



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if(scrollTop >= 0){
            $('.title03_01').addClass('on');
        }
        if(scrollTop >= 0){
            $('.title_ac02_01').addClass('on');
        }
        if(scrollTop >= 100){
            $('.title03_01').addClass('on');
        }
        if(scrollTop >= 100){
            $('.title04_01').addClass('on');
        }
        if(scrollTop >= 100){
            $('.title05_01').addClass('on');
        }
        if(scrollTop >= 100){
            $('.title_ac03_01').addClass('on');
        }

        if(scrollTop >= 372){
            $('.text03_01').addClass('on');
        }
        if(scrollTop >= 540){
            $('.text04_01').addClass('on');
        }
        if(scrollTop >= 550){
            $('.text05_01').addClass('on');
        }
        if(scrollTop >= 666){
            $('.heart04_01').addClass('on');
        }

        if(scrollTop >= 1390){
            $('.a_02').addClass('on');
        }
        if(scrollTop >= 1390){
            $('.b_02').addClass('on');
        }
        if(scrollTop >= 1585){
            $('.o_02').addClass('on');
        }
        if(scrollTop >= 1759){
            $('.u_02').addClass('on');
        }
        if(scrollTop >= 1759){
            $('.t_02').addClass('on');
        }
        if(scrollTop >= 1939){
            $('.m_02').addClass('on');
        }
        if(scrollTop >= 1939){
            $('.e_02').addClass('on');
        }
        if(scrollTop >= 2500){
            $('.text05_02').addClass('on');
        }
        if(scrollTop >= 2800){
            $('.text06_02').addClass('on');
        }
        if(scrollTop >= 2452){
            $('.text07_02').addClass('on');
        }
        if(scrollTop >= 2817){
            $('.text08_02').addClass('on');
        }
        if(scrollTop >= 3310){
            $('.heart01_03').addClass('on');
        }
        if(scrollTop >= 3310){
            $('.title02_03').addClass('on');
        }
        if(scrollTop >= 7280){
            $('.title01_footer').addClass('on');
        }
        if(scrollTop >= 7460){
            $('.title02_footer').addClass('on');
        }




        if(scrollTop >= 100) { // 숫자에 따라 아래로 스크롤 했을 때 사라지는 영역의 크기가 바뀝니다.
            if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) { /* &&: AND, 두 값이 모두 참이어야 값이 출력 */
                /* 화면에 나오지 않을 때: top값을 마이너스로 요소가 보이지 않게 사용해야함 */
                $("#header").css("top","-100px");
            } else {
                $("#header").css("top","0px");
            }
    
            lastScrollTop = scrollTop;
        } 
    



    });

    /*  slide,click event section */
    gsap.to(".side_text01", {
        // 사진 가로 크기
        y: -1943, 
        ease: "none",
        duration: 20,
        repeat: -1,
      });

    gsap.from(".side_text02", {
        // 사진 가로 크기
        y: -1326, 
        ease: "none",
        duration: 15,
        repeat: -1,
      });
      gsap.to(".bottom_text_02", {
        // 사진 가로 크기
        x: -2027, 
        ease: "none",
        duration: 30,
        repeat: -1,
      });





   














})


