$(init);

function init() {
  var diagram = [];
  var canvas = $(".canvas");




  $(".tool").draggable({
    helper: "clone",
    //cursor: "move",
    cancel: false,
  });
  canvas.droppable({
    drop: function(event, ui) {
        console.log(ui.helper.prop("outerHTML"))
              
      var new_signature = ui.helper.is('.ui-resizable') ?
          ui.helper
        :
          $(ui.helper).clone().removeClass('tool ui-draggable ui-draggable-handle ui-draggable-dragging');
      $(this).append(new_signature);
      new_signature.draggable({
        helper: false
      }).resizable()

    }
  });

}
  