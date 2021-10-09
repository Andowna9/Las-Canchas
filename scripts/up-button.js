
$(document).ready(function() {

    console.log("Ready");

    var button = $("#scroll-to-top-btn");

    button.click(function() {

       window.scrollTo({top: 0, behavior: "smooth"});
        
    });

    $(window).on("scroll",()=> {

        let scrollTop = $(window).scrollTop();

        let winHeight = $(window).height();

        let docHeight = $(document).height();

        let percentage = scrollTop/(docHeight-winHeight) * 100;

        if (percentage >= 80) {

            button.fadeIn(1000);
        }

        else {

            button.fadeOut(1000);

        }


    });


});