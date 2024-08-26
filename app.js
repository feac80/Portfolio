const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const port = 3000;
const localHost = "http://127.0.0.1";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use(
  require("express-session")({
    secret: "I have to make it",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");

  next();
});

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/send", enviarEmail, (req, res) => {
  req.flash("success", "The email has been sent");
  res.redirect("/#contact");
});

app.get("*", (req, res) => {
  res.redirect("/");
});

//process.env.PORT
//process.env.IP
app.listen(port, async function () {
  console.log(`Application running at ${localHost}:${port}`);
});

function enviarEmail(req, res, next) {
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
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
  });

  const mailOptions = {
    from: "Portfolio <feac80@gmail.com>",
    to: "feac80@gmail.com",
    subject: "Send email Portfolio",
    html: emailTemplate,
  };

  transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
      return next();
    } else {
      return next();
    }
  });
}
