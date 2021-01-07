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
 
                  
                  function EigenschappenFunc() {
                    var person = prompt("Please enter your name", person);
                    localStorage.setItem("Eigenschap", person);
                    }

                    function EigenschappenInladen() {
                        var x = localStorage.getItem("Eigenschap");
                        document.getElementById("eigenschappen").innerHTML = x;
                      }
                   

                       
                  
                  