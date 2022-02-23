const app = {
    initialize: function () {
        app.lightbox();
        app.mobileNavButton();
        app.mobileNavLinks();
    },

    lightbox: function () {
        $(app.document).ready(function () {
            $('.iframeLightbox').magnificPopup({
                type: 'iframe'
            });
        });
    },

    mobileNavButton: function () {
        $('.navButton').click(function () {
//            console.log("clicked");
            $('nav').toggleClass('hideClassFlex');
            
            $('.navButton').toggleClass('buttonShadow');
        });
    }, 
    
    mobileNavLinks: function () {
        $('#worksLink').click(function () {
//            console.log("clicked");
            $('nav').toggleClass('hideClassFlex');
            
            $('.navButton').toggleClass('buttonShadow');
        });
        
        $('#aboutLink').click(function () {
//            console.log("clicked");
            $('nav').toggleClass('hideClassFlex');
            
            $('.navButton').toggleClass('buttonShadow');
        });
    },
}
