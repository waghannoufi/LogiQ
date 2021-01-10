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
                    

                          function showTime(){
                            var date = new Date();
                            var h = date.getHours(); // 0 - 23
                            var m = date.getMinutes(); // 0 - 59
                            var s = date.getSeconds(); // 0 - 59
                            var session = "AM";
                            
                            if(h == 0){
                                h = 12;
                            }
                            
                            if(h > 12){
                                h = h - 12;
                                session = "PM";
                            }
                            
                            h = (h < 10) ? "0" + h : h;
                            m = (m < 10) ? "0" + m : m;
                            s = (s < 10) ? "0" + s : s;
                            
                            var time = h + ":" + m + ":" + s + " " + session;
                            document.getElementById("MyClockDisplay").innerText = time;
                            document.getElementById("MyClockDisplay").textContent = time;
                            
                            setTimeout(showTime, 1000);
                            
                        }
                        
                        showTime();

                      
                      
                      
                  