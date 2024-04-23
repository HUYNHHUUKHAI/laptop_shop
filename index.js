const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const router = require('./src/router/index')
const initDB = require('./src/db/initDB')
app.use(express.static(path.join(__dirname, 'src/views')));
app.use(express.urlencoded())
app.use(express.json())
app.get("/", async (req, res, next) => {
    return res.status(200).json({
        title: "Express Testing",
        message: "The app is working properly!",
    });
});

const homeController = require("./src/controller/homeController")
app.get('/api/getalllaptop', homeController.getAllLaptop)

initDB()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
