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
                        var person = document.getElementById('fname').value;
                        var jok = document.getElementById('lname').value;
                        localStorage.setItem("Test", person);
                        localStorage.setItem("Test 1", jok);
                        }

                        function EigenschappenInladen() {
                            var a = localStorage.getItem("Test");
                            var b = localStorage.getItem("Test 1");
    
                            document.getElementById("eigenschappen").innerHTML = a + " " + b;
                          }
                    

                     

                      
                      
                      
                  