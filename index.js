// const express = require('express')
// const app = express()
// const path = require('path')
// const port = 3000
// const router = require('./router/index')
// const initDB = require('./db/initDB')

// const homeController = require("./src/controller/homeController")
// const purchaseController = require("./src/controller/purchaseController")
// const thanksController = require("./src/controller/thanksController")
// const historyOder = require("./src/controller/historyOderController")
// const searchController = require("./src/controller/searchController")
// const brandController = require("./src/controller/brandController")

// app.use(express.static(path.join(__dirname, 'src/views')));
// app.use(express.urlencoded())
// app.use(express.json())

// // router(app)
// app.get('/', homeController.index) 
// app.get('/purchase', purchaseController.index)
// app.get('/thanks', thanksController.index)
// app.get('/historyoder', historyOder.index)
// app.get('/search',searchController.index)
// app.get('/brand',brandController.index)
// //route api

// app.post('/api/purchase', purchaseController.payWithMoMoAtm)
// app.get('/api/getalllaptop', homeController.getAllLaptop)
// app.post('/api/getlaptop', purchaseController.getLaptop)
// app.get('/api/historyoder', historyOder.getHistoryOder)
// app.post('/api/completeorder',thanksController.completePurechase)
// initDB()
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// Import packages
const express = require("express");
const home = require("./src/router/index");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));