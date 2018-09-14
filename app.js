const  nodemailer = require("nodemailer"),
       express    = require ("express"),  
       app        = express(),
       bodyParser = require('body-parser'),
       flash = require('connect-flash');
 
app.use(bodyParser.urlencoded({ extended: true }));      
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


app.use(require("express-session")({
    secret:"I have to make it",
    resave:false,
    saveUninitialized: false
}));
app.use(flash());

app.use( (req, res, next) =>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error"); 
    
    next();
});



app.get("/", function(req, res){
  res.render("index");  
});


app.post("/send" , enviarEmail, (req, res) =>{
        req.flash('success', 'The email has been sent');
        res.redirect("/#contact");
});

app.get("*", (req, res)=>{
    res.redirect("/");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The app is up and running");
});

function enviarEmail(req, res , next){
 
    const emailTemplate = `
    <p>You have a new contact request from the portfolio App</p>
    <h3>Contact Details</h3>
    <ul>
        <li>User First Name: ${req.body.firstName}</li>
        <li>User Surname: ${req.body.surname}</li>
        <li>User Email: ${req.body.email}</li>
        <li>User type of need: ${req.body.need}</li>
    </ul>
    <p>Message: ${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
                type: 'OAuth2',
                user: 'feac80@gmail.com',
                clientId: '196934756727-aofqg754ao12g89c1df596vhnb9jr4qm.apps.googleusercontent.com',
                clientSecret: 'Axkw-elZGO7uAoHmpOUT7Jcj',
                refreshToken:'1/sVKV5Zpq1NUaTn9jjipplVoY1BAkwgFxYmXDbfSlFLA', 
                accessToken:'ya29.GlsXBrG4jUk56d_kphdIMMn5CiJkbrP9Xi1bIYns3YHuRyyY5InxOFL2hEDoBrB1ah2wK8ztfY7QpqtWOwAYT4Mfm6oy3peDE5yMuER_nOgANCuAFaQ73KyZac1H',
                expires: 1484314697598
            }
        
    });

    const mailOptions = {
        from: 'Portfolio <feac80@gmail.com>',
        to: 'feac80@gmail.com',
        subject: 'Send email Portfolio',
        html: emailTemplate
    };
    


    transporter.sendMail(mailOptions, function (err, res) {
        if(err){
           
 
        return next();
        } else {
            
          

        return next();
         
        }
   

      });
    


 
}
