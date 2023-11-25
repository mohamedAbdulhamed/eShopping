$(document).ready(function(){
    $(`nav .links ul li a`).click(function(){
        $(this).addClass(`active`).parents().siblings().children().removeClass(`active`);
        $(`.fas-bars`).removeClass(`fa-times`);
        $(`nav`).removeClass(`mob-nav`);
    });
    $(`.fa-bars`).click(function(){
        $(this).toggleClass(`fa-times`);
        $(`nav`).toggleClass(`mob-nav`);
    });
    $('#gallery ul.controls li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('#gallery h3.main span').html($(this).html());

        let filter = $(this).attr(`data-filter`);
        if(filter == `all`){
            $(`#gallery .all-product`).show();
        }else{
            $(`#gallery .all-product`).not('.'+filter).hide();
            $(`#gallery .all-product`).filter('.'+filter).show();
        }
    });
    $('.fa-search').click(function() {
        $(this).parents('.box').siblings('.popup-overlay').show();
        $(`body`).css(`overflow`, 'hidden');  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Look Later
    });
    $(`.fa-times`).click(function(){
        $(this).parents(`.popup-overlay`).hide();
        $(`body`).css(`overflow`, 'auto');
        let bigSrc = $(this).siblings(`.images`).children(`.small-images`).children(`.first`).children(`img`).attr(`src`);
        $(`.first img`).addClass(`active`).parent().siblings().children().removeClass(`active`);
        $(this).siblings(`.images`).children(`.big-image`).children(`img`).attr(`src`, bigSrc);
    });
    $(`.small-img img`).click(function(){
        $(this).addClass(`active`).parent().siblings().children().removeClass(`active`);
        let smallSrc = $(this).attr('src');
        $(this).parents(`.images`).children(`.big-image`).children(`img`).attr(`src`, smallSrc);
    });
    $(`.accordion-item`).click(function(){
        $(this).toggleClass(`open`);
    });

    $(window).on(`scroll load`, function () {
        $(`section`).each(function(){
            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr(`id`);
            if(top >= offset && top < offset + height){
                $(`nav .links ul li a`).removeClass(`active`);
                $(`nav`).find(`[href='#${id}']`).addClass(`active`);
            }
            else if(top < 400){
                $(`nav .links ul li a`).removeClass(`active`);
                $(`nav`).find(`[href="index.html"]`).addClass(`active`);
            }
        });


        if ($(window).scrollTop() > 180) {
            $(`nav`).addClass(`fixed-header`);
            $(`#top-link`).addClass(`up`);
        }
        else{
            $(`nav`).removeClass(`fixed-header`);
            $(`#top-link`).removeClass(`up`);
        }
        $(`.fas-bars`).removeClass(`fa-times`);
        $(`nav`).removeClass(`mob-nav`);
    });
});

pro.onclick = function(){
    "use strict";
    window.location.href = "#hire";
}
let buttonOne = document.querySelector("body .cv-container .btns .pdf");
buttonOne.addEventListener("click",()=>{
    const spanOne = document.querySelector("body .cv-container .btns .pdf span");
    buttonOne.style.paddingRight = '10px;';
    spanOne.style.visibility = "visible";
    setTimeout(()=>{
        spanOne.style.visibility="hidden;";
        buttonOne.style.transition = ".3s ease-in-out";
        buttonOne.style.paddingRight = "0px;";
    },3000);
});



let buttonTwo = document.querySelector("body .cv-container .btns .word");
buttonTwo.addEventListener("click",()=>{
    const spanTwo = document.querySelector("body .cv-container .btns .word span");
    buttonTwo.style.paddingRight = '10px;';
    spanTwo.style.visibility = "visible";
    setTimeout(()=>{
        spanTwo.style.visibility="hidden;";
        buttonTwo.style.transition = ".3s ease-in-out";
        buttonTwo.style.paddingRight = "0px;";
    },3000);
});