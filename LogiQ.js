
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

  const proplist = document.getElementById("proplist");


  const valuelist = proplist.children[1];
  const newvaluelist = document.createElement("Li");
  newvaluelist.textContent = property.value;
  proplist.replaceChild(newvaluelist, valuelist);


  const naamlist = proplist.children[0];
  const newnamelist = document.createElement("Li");
  newnamelist.textContent = property.naam;
  proplist.replaceChild(newnamelist, naamlist)

  const tekstlist = proplist.children[2];
  const newtekstlist = document.createElement("Li");
  newtekstlist.textContent = property.tekst;
  proplist.replaceChild(newtekstlist, tekstlist);


  var firstDivContent = document.getElementById('proplist');
      var secondDivContent = document.getElementById('eigenschappen');
      secondDivContent.innerHTML = firstDivContent.innerHTML;
    
}


       $(document).ready(function(){
                  $("#reset").click(function(){
                    $("#canvas").empty();
                  });
                });


                        var d = new Date();
document.getElementById("demo").innerHTML = d;