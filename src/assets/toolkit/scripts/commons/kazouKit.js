$(".kazou-toggle-password").click(function () {
  $(this).toggleClass("kazou-toggle-password-unlock");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});