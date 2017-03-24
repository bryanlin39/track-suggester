$(document).ready(function() {

  $("#name").submit(function(event) {
    event.preventDefault();

    $("#heading, #start").fadeOut();
    $("#survey-form").fadeIn();

    var name = $("#name-input").val();
    $("#submitted-name").text(name);
  });

  $("#survey").submit(function(event) {
    event.preventDefault();

    var creative = $("input:radio[name=creative]:checked").val();
    var company = $("input:radio[name=company]:checked").val();
    var devType = $("input:radio[name=dev-type]:checked").val();
    var games = $("input:radio[name=games]:checked").val();
    var build = $("input:radio[name=build]:checked").val();

    if (creative, company, devType, games, build === undefined) {
      alert("For an accurate suggestion, please select an answer for each question.");
    } else if (creative === "yes") {
      $(".suggestion").text("CSS/Design")
      $("#design-links").show()
    } else if (build === "business") {
      $(".suggestion").text("C#")
      $("#csharp-links").show()
    } else if (build === "android") {
      $(".suggestion").text("Java")
      $("#java-links").show()
    } else if (build === "content") {
      $(".suggestion").text("PHP")
      $("#php-links").show()
    } else if (build === "interactive") {
      $(".suggestion").text("Ruby")
      $("#ruby-links").show()
    }

    $("#survey-form").slideUp();
    $("#result").slideDown();

    var email = $("#email-input").val();
    $("#submitted-email").text(email);
  });

});
