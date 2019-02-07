var path = require("path");
var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
        console.log(friends);
    });
    // POST ROUTE TO CREATE NEW FRIEND 
    app.post("/api/friends", function (req, res) {
        var data = req.body 
        var newFriend = {
            name: data.name,
        }
    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        tableData.length = [];
        waitListData.length = [];

        res.json({ ok: true });
    });
};