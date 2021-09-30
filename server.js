const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';
const BASE_URL = process.env.BASE_URL || `http://${HOST}:${PORT}`;

app.listen(PORT, () => {
    console.log(`Vue server is running on port: ${PORT}, Please kindly visit ${BASE_URL}`);
});