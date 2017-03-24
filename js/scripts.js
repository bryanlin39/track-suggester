$(document).ready(function() {

  $("#name").submit(function(event) {
    event.preventDefault();
    var name = $("#name-input").val();
    $("#submitted-name").text(name);

  });

});
