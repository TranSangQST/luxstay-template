

const sliderSrcArr = [
    "/assets/img/slider/slider01.png",
    "/assets/img/slider/slider02.png"
]

const countSliderTabIcon = sliderSrcArr.length;

let selectedSliderTab;

const sliderTabIconEle = '<i class="fa-solid fa-circle home-page-slider-tab-icon"></i>';



$( document ).ready(function() {
    console.log( "ready!" );
    console.log( "countSliderTabIcon = ", countSliderTabIcon);
    console.log("homePageSliderTab: ", homePageSliderTab);
    selectedSliderTab = 0;

    $("#homePageSliderImg").attr("src", "/assets/img/slider/slider01.png");

    for (let i = 0; i < countSliderTabIcon; i++){
        // $(".home-page-slider-tab").append(sliderTabIconEle);

        const sliderImgSrc = sliderSrcArr[i];
        
        $("#homePageSliderTab").append(sliderTabIconEle);      

    
    }

    // console.log( "#homePageSliderTab .home-page-slider-tab-icon .first()", $("#homePageSliderTab .home-page-slider-tab-icon").first());
    $("#homePageSliderTab .home-page-slider-tab-icon").first().addClass("home-page-slider-tab-icon--active");
    

    $('.home-page-slider-tab-icon').click(function(e){
        console.log(".home-page-slider-tab-icon click");
        $('.home-page-slider-tab-icon.home-page-slider-tab-icon--active').removeClass("home-page-slider-tab-icon--active");

        console.log("e: ", e);
        console.log("index: ", $(e.target).index());



        selectedSliderTab = $(e.target).index();
        $("#homePageSliderImg").attr("src", sliderSrcArr[selectedSliderTab]);
        $(e.target).addClass("home-page-slider-tab-icon--active");

    });

});

setInterval(function(e){
    // console.log("change slider");
    $('.home-page-slider-tab-icon.home-page-slider-tab-icon--active').removeClass("home-page-slider-tab-icon--active");


    if(selectedSliderTab < countSliderTabIcon - 1){
        selectedSliderTab = selectedSliderTab + 1;
    }else{
        selectedSliderTab = 0;
    }

    $( "#homePageSliderTab .home-page-slider-tab-icon" ).eq(selectedSliderTab).addClass("home-page-slider-tab-icon--active");
    $("#homePageSliderImg").attr("src", sliderSrcArr[selectedSliderTab]);

},3000)






