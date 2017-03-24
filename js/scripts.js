$(document).ready(function() {

  // $("#name").submit(function(event) {
  //   event.preventDefault();
  //
  //   var name = $("#name-input").val();
  //   $("#submitted-name").text(name);
  //
  //   $("#heading, #start").fadeOut();
  //   $("#survey-form").fadeIn();
  // });

  $("#survey").submit(function(event) {
    event.preventDefault();

    var creative = $("input:radio[name=creative]:checked").val();
    var company = $("input:radio[name=company]:checked").val();
    var devType = $("input:radio[name=dev-type]:checked").val();
    var games = $("input:radio[name=games]:checked").val();
    var build = $("input:radio[name=build]:checked").val();

    // $("#survey-form").slideUp();
    // $("#result").slideDown();
  });
});
