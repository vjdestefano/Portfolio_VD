
function portfolioAnimation(el){

  el.animate({height: ($("#row1Body").innerHeight()), opacity: '0.5'}, 200);
  el.animate({height: ($("#row1Body").innerHeight()), opacity: '0.8'}, 300 );
  el.animate({height: ($("#row1Body").innerHeight()), opacity: '1'}, 300 );

}


$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

$(document).ready(function(){
  $('.parallax').parallax();
});

$(document).ready(function(){
$("#row1Body").attr("style", "opacity: 0;");
});


var options = [
  {selector: '#portfolioHeader', offset: 50, callback: function(el) {
    Materialize.toast("Welcome to my site!", 3000 );
  } },
  {selector: '#row1Body', offset: 500, callback: function(el) {
    portfolioAnimation($(el));
  } },
];
Materialize.scrollFire(options);


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