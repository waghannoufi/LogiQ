
$(function () {
  $("#canvas .items").sortable({
          connectWith: "ul",

          
  });

  $("#controlboard .controls").draggable({
      helper: "clone",
      connectToSortable: ".items",
      

  });

});



let SaveJson = () => {
    	 
  
  // This variable stores all the data.
  let data = document.getElementById("canvas").innerHTML;
      
  
  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'SaveProces.txt';	   // The file to save the data.

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

function LoadFile(){
  document.getElementById('upload').addEventListener('change', readFileAsString)
  function readFileAsString() {
      var files = this.files;
      if (files.length === 0) {
          alert('No file is selected');
          return;
      }
  
      var reader = new FileReader();
      reader.onload = function(event) {
          document.getElementById("canvas").innerHTML = event.target.result;
      };
      reader.readAsText(files[0]);







  }
  
}

function Properties(){

  var property = {
    naam : document.getElementById('naam').value,
    value : document.getElementById('valuecontrol').value,
    tekst : document.getElementById('tekst').value,
  };

  var node = document.createElement("P");
  var textnode = document.createTextNode(property.naam);            
  node.appendChild(textnode);                              
  document.getElementById("prop").appendChild(node); 

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