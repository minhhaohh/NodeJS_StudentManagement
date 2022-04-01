const express = require("express");
const router = require("./routers/root.router");
const app = express();
const port = 7777;

app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// Set up sequelize
const { sequelize } = require("./models");
sequelize.sync({ force: true });
