$(document).ready(function () {
  $("#actionButton").click(function () {
    $("h1").text("I have bee changed");
    $("#ourAwesomeDiv").html(`<div><h3>Hi i was generated</h3></div>`);
  });
  $("#nukeButton").click(function () {
    $("body").remove();
  });
});
