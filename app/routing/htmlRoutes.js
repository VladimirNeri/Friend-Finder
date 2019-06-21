// Dependencies - Activity 16 

var path = require('path');

// Routing - Activity 16
module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    
}