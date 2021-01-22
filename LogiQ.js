var sPositions = localStorage.positions || "{}",
    positions = JSON.parse(sPositions);
$.each(positions, function (id, pos) {
    $("#" + id).css(pos)
})

$(function () {
  $("#canvas .items").sortable({
          connectWith: "ul",

          
  });

  $("ul[id^='control']").draggable({
      helper: "clone",
      connectToSortable: ".items",
      stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }

  });
});

let SaveJson = () => {
    	 
  
  // This variable stores all the data.
  let data = document.getElementById("canvas").innerHTML;
      
  
  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'formData.txt';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
  }

  newLink.click(); 
}




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