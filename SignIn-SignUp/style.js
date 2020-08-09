$(document).ready(function () {
    $("#sign-up").click(function () {
      $("#sign-in").removeClass("active");
      $("#sign-in-form").hide();
      $("#sign-up").addClass("active");
      $("#sign-up-form").show();
    });
    $("#sign-in").click(function () {
      $("#sign-in").addClass("active");
      $("#sign-in-form").show();
      $("#sign-up").removeClass("active");
      $("#sign-up-form").hide();
    });
});
  