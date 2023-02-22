const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => res.send("hello world!"));

app.get("/stream", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");

    res.write("data: " + "hello!\n\n");
});

app.listen(port);
console.log("Listening on ${port}!");