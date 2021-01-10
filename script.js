const app = {
    navMode: false,

    initialize: function () {
        app.homeNav();
        app.homeHover();
    },

    homeNav: function () {
        //        $(document).ready(function () {
        //            $(window).scroll(function () {
        //                console.log(this.pageYOffset)
        //                
        //                if (window.pageYOffset >= 450 && window.pageYOffset <= 500) {
        //                        console.log("fading in")
        //                        $('.homeNav').animate({
        //                            'opacity': '1'
        //                        }, 200);
        //                        console.log("fading in DONE")
        //                    } else if (window.pageYOffset < 450){
        //                        console.log("fading out")
        //                        $('.homeNav').animate({
        //                            'opacity': '0'
        //                        }, 200);
        //                        console.log("fading out DONE")
        //                    }
        //            });
        //        });

        window.addEventListener("scroll", function () {
            if ($(".homeIntro").css("height") == "550px") {
                if (this.pageYOffset >= 495) {
                    $('.homeNav').removeClass('hide');
                    console.log("page offset")
                } else {
                    $('.homeNav').addClass('hide');
                }
            } else if ($(".homeIntro").css("height") == "480px") {
                if (this.pageYOffset >= 425) {
                    $('.homeNav').removeClass('hide');
                    console.log("page offset")
                } else {
                    $('.homeNav').addClass('hide');
                }
            } else if ($(".homeIntro").css("height") == "600px") {
                if (this.pageYOffset >= 545) {
                    $('.homeNav').removeClass('hide');
                    console.log("page offset")
                } else {
                    $('.homeNav').addClass('hide');
                }
            }
        });
    },

    homeHover: function () {
        $('.projectGrid').hover(function () {
            $(this).find('.filter').toggleClass('hide');
            $(this).find('.noFilter').toggleClass('hide');
        });

        $('.homeArrows').hover(function () {
            $(this).find('.whiteArrow').toggleClass('hide');
            $(this).find('.redArrow').toggleClass('hide');
        });
    },
}
