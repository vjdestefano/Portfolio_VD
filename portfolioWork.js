


$(document).ready(function() {
  var profPic = $('<img>').attr("src","./images/profile-pic.jpg");
  profPic.attr("width",($('#testWidth').innerWidth() * 1));
  profPic.attr("height",($('#testWidth').innerWidth() * 1));
  $("#testWidth").append(profPic)
});