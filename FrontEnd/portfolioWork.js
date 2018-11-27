
function portfolioAnimation(el){

  el.animate({opacity: '1'}, 800);
 
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
  var profPic = $('<img>').attr("src","./FrontEnd/images/profile-pic.jpg");
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
  $("#testAnim").text(LetterChanges(liriInput));
}
});


$("#askLiri").on("click", function(event){
  event.preventDefault();
  var liriInput2 = $("#liriInput").val();
  console.log(liriInput2);
  $("#liriInput").val('');
  $("#testAnim").slideDown(750);
  $("#testAnim").text(LetterChanges(liriInput2));

})

function LetterChanges(str) { 

  var string = str.toLowerCase().split('');
  let arr = [];
  for(let i = 0; i < string.length; i++){
      
  let numberIn = string[i].charCodeAt();
  
  if(numberIn >= 32 && numberIn <= 64 ){
      --numberIn;
  }
  if(numberIn >= 91 && numberIn <= 96 ){
     -- numberIn;
  }
  if(numberIn == 122){
      numberIn = 96;
  }
  if(numberIn >= 123 && numberIn <= 126 ){
      --numberIn;
  }
 // numberIn++;
  let letter = String.fromCharCode(++numberIn);

  if(letter == ("a") || letter == ("e") || letter == ("i") || letter == ("o") || letter == ("u")){
     let test = letter.toUpperCase();
      arr.push(test); 
  }
  else{
      arr.push(letter);
 
  }
}
return arr.join(''); 
       
}