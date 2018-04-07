
$(document).ready(function() {
  var profPic = $('<img>').attr("src","./images/profile-pic.jpg");
  profPic.attr("width",($('#testWidth').innerWidth() * 1));
  profPic.attr("height",($('#testWidth').innerWidth() * .75));
  $("#testWidth").append(profPic)
});

$("#liriInput").on("keyup", function(event){
event.preventDefault();
if(event.key === "Enter"){
  var liriInput = $("#liriInput").val();
  console.log(liriInput);
  $("#liriInput").val('');
}
});


$("#askLiri").on("click", function(event){
  event.preventDefault();
  var liriInput2 = $("#liriInput").val();
  console.log(liriInput2);
  $("#liriInput").val('');
  $("#testAnim").slideDown(750);

})