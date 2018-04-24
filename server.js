//Vincent DeStefano

// ==========================================================
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");


var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ==========================================================

var test123 = [{
  test:"jarjar",
  test2:"why does this program hate me?",
  test3:"I need this to work or else my family is dead"
},
{
  test:"darklord",
  test2:"this is working"
}]

// ==========================================================

app.use(express.static('./FrontEnd'));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,"./FrontEnd/index.html"));
  
})

app.get('/api/test123', function(req, res){
  return res.json(test123);
})

app.get('/api/test123/:test', function(req, res){
  var chosen = req.params.test;
  console.log(chosen)

  for(var i = 0; i < test123.length; i++ ){
    if(chosen === test123[i].test){
      return res.send(test123[i]);
    }
  }
})



app.get('/:test', function(req, res){
var chosen = req.params.test;
console.log(chosen);

res.send("this is the:" + chosen);

res.end();
})

app.post("/api/test123", function(req, res) {
  var newcharacter = req.body;
  
  console.log(newcharacter);

  test123.push(newcharacter);

  res.json(newcharacter);
});


// ============================================================
app.listen(PORT, function(){
  console.log("App listening on Port: " + PORT);
})