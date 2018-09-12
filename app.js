// const static = require('node-static'),
//       file = new static.Server('./public'),
const  nodemailer = require('nodemailer'),
       express    = require ("express"),  
       app        = express();
      

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

console.log(__dirname);

app.use("/", function(req, res){
  res.render("index");  
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The app is up and running");
});


// require('http').createServer(function(request, response) {
 
  
//   request.addListener('end', function() {
//     file.serve(request, response);
       
     
//     }).resume();
  
 
// }).listen(process.env.PORT);