const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express(),
    DIST_DIR = __dirname,
    HTML_FILE = path.join(DIST_DIR, "html/index.html");

app.use(express.static(DIST_DIR));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
    origin: "http://localhost:8081",
};

app.use(cors(corsOptions));



const db = require("./models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to TNPOLY application." });
});

require("./routes/auth.route")(app);
require("./routes/customer.route")(app);
require("./routes/user.route")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});