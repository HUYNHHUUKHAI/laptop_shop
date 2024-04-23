// const express = require('express')
// const app = express()
// const path = require('path')
// const port = 3000
// const router = require('./src/router/index')
// const initDB = require('./src/db/initDB')
// app.use(express.static(path.join(__dirname, 'src/views')));
// app.use(express.urlencoded())
// app.use(express.json())
// router(app)
// initDB()
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const express = require("express");
const app = express();
app.use(express.json());
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient
// Routes
app.get("/", async (req, res, next) => {
    return res.status(200).json({
        title: "Express Testing",
        message: "The app is working properly!",
    });
    // const listlaptops = await prisma.laptop.findMany()
    // return res.json(listlaptops);
});
// connection
const port =  3000;
app.listen(port, () => console.log(`Listening to port ${port}`));