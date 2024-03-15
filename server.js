
const express = require("express");
const { use } = require("express/lib/application");
const path = require("path");
const app = express();
const staticpath=path.join(__dirname + "/src");
app.use(express.static(staticpath));
app.get("/", (req, res) => {
    Connect();
    res.sendFile(staticpath);
})

const server = app.listen(3000);
const portNumber = server.address().port;
console.log(`Open on localhost:${portNumber}`);