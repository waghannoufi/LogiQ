$(function () {
    $("#canvas .items").sortable({
            connectWith: "ul"  
    });
     
    $("ul[id^='control']").draggable({
        helper: "clone",
        connectToSortable: ".items"
    });
});

$(document).ready(function(){
    $("#button1").click(function(){
    $("#eigenschappen").load("data.html #button1");
    });
    });
    // Load Functie om data in te laden van de "data.html voor button 1"

    $(document).ready(function(){
        $("#button2").click(function(){
        $("#eigenschappen").load("data.html #button2");
        });
        });
        // Load Functie om data in te laden van de "data.html voor button 2"

        $(document).ready(function(){
            $("#button3").click(function(){
            $("#eigenschappen").load("data.html #button3");
            });
            });
            // Load Functie om data in te laden van de "data.html voor button 3"

            $(document).ready(function(){
                $("#button4").click(function(){
                $("#eigenschappen").load("data.html #button4");
                });
                });
                // Load Functie om data in te laden van de "data.html voor button 4"


         $(document).ready(function(){
                    $("#reset").click(function(){
                      $("#canvas").empty();
                    });
                  });        