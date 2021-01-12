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
                  $("#reset").click(function(){
                    $("#canvas").empty();
                  });
                });




                    function EigenschappenFunc() {
                      var person = {
                          eigenschap1 : document.getElementById('fname').value,
                          eigenschap2 : document.getElementById('lname').value

                      };
                      localStorage.setItem("eigenschap", JSON.stringify(person));
                      }

                      function EigenschappenInladen() {
                          var a = JSON.parse(localStorage.getItem('eigenschap'));

                          document.getElementById("eigenschappen").innerHTML = a.eigenschap1 + "  "+ a.eigenschap2;
                        }
                  