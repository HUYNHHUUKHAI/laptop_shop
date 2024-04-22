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

// Import packages
const express = require("express");

// Middlewares
const app = express();
app.use(express.json());
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient
// Routes
app.get("/", async (req, res, next) => {
    const listlaptops = await prisma.laptop.findMany()
    return res.json(listlaptops);
});
// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));