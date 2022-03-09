$("document").ready(function(){
    $("div#gambar1").click(function(){
        $(this).css({
            "background-image" : "url('gambar/ayam.png')",
            "background-size" : "cover",
        });
    });
    $("#gambar1").click(function(){
        $("<audio></audio>").attr({
            src: "audio/suara-ayam-jao-berkokok.mp3",
            volume : 0.4,
            autoplay : "autoplay",
        });
    });
    $("div#gambar1").mouseout(function(){
        $(this).css({
            "background" : ""
        });
    });

    //------------------------elang-----------------------

    $("div#gambar2").click(function(){
        $(this).css({
            "background-image" : "url('gambar/elang.jpg')",
            "background-size" : "cover",
        });
    });
    $("div#gambar2").click(function(){
        $("<audio></audio>").attr({
            src: "audio/suara-burung-elang-hawk.mp3",
            volume : 0.4,
            autoplay : "autoplay",
        });
    });
    $("div#gambar2").mouseout(function(){
        $(this).css({
            "background" : ""
        });
    });

    //----------------------- gorila-------------------
    $("div#gambar3").click(function(){
        $(this).css({
            "background-image" : "url('gambar/gorila1.jpg')",
            "background-size" : "cover",
        });
    });
    $("div#gambar3").click(function(){
        $("<audio></audio>").attr({
            src: "audio/suara-gorilla-menggeram.mp3",
            volume : 0.4,
            autoplay : "autoplay",
        });
    });
    
    $("div#gambar3").mouseout(function(){
        $(this).css({
            "background" : ""
        });
    });

    //----------------------kambing------------------------

    $("div#gambar4").click(function(){
        $(this).css({
            "background-image" : "url('gambar/kambing.jpg')",
            "background-size" : "cover",
        });
    });
    $("div#gambar4").click(function(){
        $("<audio></audio>").attr({
            src: "audio/suara-kambing-bandot-mengembik-simomot-2.mp3",
            volume : 0.4,
            autoplay : "autoplay",
        });
    });
    
    $("div#gambar4").mouseout(function(){
        $(this).css({
            "background" : ""
        });
    });

    //---------------------sapi-----------------------
    $("div#gambar5").click(function(){
        $(this).css({
            "background-image" : "url('gambar/sapi.jpg')",
            "background-size" : "cover",
        });
    });
    $("div#gambar5").click(function(){
        $("<audio></audio>").attr({
            src: "audio/suara-sapi-melenguh-simomot-3.mp3",
            volume : 0.4,
            autoplay : "autoplay",
        });
    });
    
    $("div#gambar5").mouseout(function(){
        $(this).css({
            "background" : ""
        });
    });

    //--------- TUGAS KEDUA ------------------------
    $("div#company").click(function(){
        $("div#company1").slideToggle({
            duration : 350,
            easing : 'swing',
            
        });
    });
    $("div#visi").click(function(){
        $("div#visi1").slideToggle({
            duration : 350,
            easing : 'swing',
            
        });
    });
    $("#ds").click(function(){
        $("#ds1").slideToggle({
            duration : 350,
            easing : 'swing',
            
        });
    });

});