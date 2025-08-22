var express = require("express");
var path = require("path");

var app = express();
var port = 8080;

app.use(express.static(path.join(__dirname, "public")));

// fallback: catch all unmatched routes
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, function(){
  console.log("server is running on port:" + port);
});
