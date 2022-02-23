

$( document ).ready(function() {
    const homePageSliderSource = $("#homePageSliderTemplate").html();        

    // console.log("homePageSliderSource: ", homePageSliderSource);
    const homePageSliderTemplate = Handlebars.compile(homePageSliderSource);

    // console.log("homePageSliderTemplate: ", homePageSliderTemplate);

    const sliderSrcs = [
        {
            src: "/assets/img/slider/slider01.png",
        },
        {
            src: "/assets/img/slider/slider02.png",
        },
        {
            src: "/assets/img/slider/slider03.png",
        }
    ];


    // console.log("sliderSrcs: ", sliderSrcs);
    
    const homePageSlider = $("#homePageSlider");

    const slider = homePageSliderTemplate({sliderSrcs});

    // console.log("slider: ", slider);

    homePageSlider.html(slider);


    const firstSlider = $( "#homePageSliderImgList .home-page-slider-img-item" ).eq(0);
    firstSlider.addClass('active');

    const firstSliderTab = $( "#homePageSliderTabList .home-page-slider-tab-item" ).eq(0);
    firstSliderTab.addClass('home-page-slider-tab--active');




    


    const homePagePlaceSliderSource = $("#homePagePlaceSliderTemplate").html();        

    console.log("homePagePlaceSliderSource: ", homePagePlaceSliderSource);
    const homePagePlaceSliderTemplate = Handlebars.compile(homePagePlaceSliderSource);

    console.log("homePagePlaceSliderTemplate: ", homePagePlaceSliderTemplate);

    class Place {
        constructor(name, img, accommodation) {
            this.name = name;
            this.img = img;
            this.accommodation = accommodation;
        }
    }
    
    const placeArr = [
        new Place("Hà Nội","/assets//img/place/HaNoi.png",2375),
        new Place("TP. Hồ Chí Minh","/assets/img/place/HoChiMinh.png",2034),
        new Place("Vũng Tàu","/assets/img/place/VungTau.png",357),
        new Place("Đà Lạt","/assets/img/place/DaLat.png",934),
        new Place("Đà Nẵng","/assets/img/place/DaNang.png",839),
        new Place("Nha Trang","/assets/img/place/NhaTrang.png",590),
        new Place("Quảng Ninh","/assets/img/place/QuangNinh.png",202),
        new Place("Hội An","/assets/img/place/HoiAn.png",317),
    ]


    console.log("placeArr: ", placeArr);
    
    const homePagePlaceSlider = $("#homePagePlaceSlider");

    const placeSlider = homePagePlaceSliderTemplate({placeArr});

    console.log("placeSlider: ", placeSlider);

    homePagePlaceSlider.html(placeSlider);

    $(".home-page-place-slider-list").slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: $('#homePagePlaceSliderPrevBtn'),
        nextArrow: $('#homePagePlaceSliderNextBtn')
});

});



//https://stackoverflow.com/questions/31561717/bootstrap-carousel-indicators-out-of-the-main-div-not-switching-automatically
$('#homePageSlider').on('slide.bs.carousel', function (e) {

    const oldSlider=$(e.target).find('.home-page-slider-tab-item.home-page-slider-tab--active'); //get the current active slide
    // console.log(oldSlider);

    const oldSliderIndex = e.from;
    const curSliderIndex = e.to;


    // console.log("old index: ", oldSliderIndex);
    // console.log("cur index: ", curSliderIndex);

    oldSlider.removeClass('home-page-slider-tab--active');

    const newSlider = $( "#homePageSliderTabList .home-page-slider-tab-item" ).eq(curSliderIndex);
    newSlider.addClass('home-page-slider-tab--active');

  })


// const sliderSrcArr = [
//     "/assets/img/slider/slider01.png",
//     "/assets/img/slider/slider02.png",
//     "/assets/img/slider/slider03.png"
// ]

// const countSliderTabIcon = sliderSrcArr.length;

// let selectedSliderTab;

// const sliderTabIconEle = '<i class="fa-solid fa-circle home-page-slider-tab-icon"></i>';



// $( document ).ready(function() {
//     console.log( "ready!" );
//     console.log( "countSliderTabIcon = ", countSliderTabIcon);
//     console.log("homePageSliderTab: ", homePageSliderTab);
//     selectedSliderTab = 0;

//     $("#homePageSliderImg").attr("src", "/assets/img/slider/slider01.png");

//     for (let i = 0; i < countSliderTabIcon; i++){
//         // $(".home-page-slider-tab").append(sliderTabIconEle);

//         const sliderImgSrc = sliderSrcArr[i];
        
//         $("#homePageSliderTab").append(sliderTabIconEle);      

    
//     }

//     // console.log( "#homePageSliderTab .home-page-slider-tab-icon .first()", $("#homePageSliderTab .home-page-slider-tab-icon").first());
//     $("#homePageSliderTab .home-page-slider-tab-icon").first().addClass("home-page-slider-tab-icon--active");
    

//     $('.home-page-slider-tab-icon').click(function(e){
//         console.log(".home-page-slider-tab-icon click");
//         $('.home-page-slider-tab-icon.home-page-slider-tab-icon--active').removeClass("home-page-slider-tab-icon--active");

//         console.log("e: ", e);
//         console.log("index: ", $(e.target).index());



//         selectedSliderTab = $(e.target).index();
//         $("#homePageSliderImg").attr("src", sliderSrcArr[selectedSliderTab]);
//         $(e.target).addClass("home-page-slider-tab-icon--active");

//     });

// });

// setInterval(function(e){
//     // console.log("change slider");
//     $('.home-page-slider-tab-icon.home-page-slider-tab-icon--active').removeClass("home-page-slider-tab-icon--active");


//     if(selectedSliderTab < countSliderTabIcon - 1){
//         selectedSliderTab = selectedSliderTab + 1;
//     }else{
//         selectedSliderTab = 0;
//     }

//     $( "#homePageSliderTab .home-page-slider-tab-icon" ).eq(selectedSliderTab).addClass("home-page-slider-tab-icon--active");
//     $("#homePageSliderImg").attr("src", sliderSrcArr[selectedSliderTab]);

// },3000)





// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /*---------------------------------------------Location------------------------------------------------------*/
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////






