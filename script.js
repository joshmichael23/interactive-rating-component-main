$(document).ready(function(){
    let activeScore = 0;
    let previousScore = 0;

    $(".circle.btn").click(function(){
        
        activeScore = parseInt($(this).attr("data-rating"));

        if(activeScore != previousScore){
            $(`button[data-rating='${previousScore}']`).removeClass('active');
        }

        $(this).addClass('active');

        previousScore = activeScore
    });


    $("#btnSubmit").click(function(){
        if(activeScore != 0){
            $("#score").html(activeScore);
            $("div[data-step='one']").fadeOut(function(){
                $("div[data-step='two']").fadeIn();
            });
        }

    });
});