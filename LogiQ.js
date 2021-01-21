$(function () {
  $("#canvas .items").sortable({
          connectWith: "ul",
          

  });

  $("ul[id^='control']").draggable({
      helper: "clone",
      connectToSortable: ".items"
  });
});



       $(document).ready(function(){
                  $("#reset").click(function(){
                    $("#canvas").empty();
                  });
                });




function EigenschappenFunc() {
                      var property = {
                        naam : document.getElementById('naam').value,
                        eigenschap1 : document.getElementById('fname').value,
                        eigenschap2 : document.getElementById('lname').value,
                        

                      };
                      localStorage.setItem(property.naam, JSON.stringify(property));
                      }

                      function EigenschappenInladen() {
                          var propertyload = JSON.parse(localStorage.getItem(property.naam));

                          document.getElementById("eigenschappen").innerHTML = propertyload.eigenschap1 + "  "+ propertyload.eigenschap2;
                        }

                        var d = new Date();
document.getElementById("demo").innerHTML = d;