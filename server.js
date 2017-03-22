let express = require("express");
let mongoose = require("mongoose");

let app = express();
let server = require("http").createServer(app);


let port = process.env.PORT || 3000;

///////////////////////////////fb///////////////////////////////
// let passport_fb = require('passport');
// let passport    = require('./config/passport');
// app.use(session({ secret: 'keyboard cat', key: 'sid'}));
// app.use(passport.initialize());
// app.use(passport.session());

let mongoURI = process.env.MONGODB_URI ||"mongodb://localhost/utalent";
mongoose.connect(mongoURI);
db = mongoose.connection;
db.once("open", () => {
	console.log("mongoDB is open");
});

require("./server/config/middleware.js") (app,express);
require("./server/config/routes.js") (app,express);


///////////////////////database////////////////////////




////////////////////server////////////////////////////
app.listen(port, () => {
	console.log("App listening on port:", port);
});

module.exports = app;