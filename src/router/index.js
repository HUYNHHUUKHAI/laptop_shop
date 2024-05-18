const homeController = require("../controller/homeController")
const purchaseController = require("../controller/purchaseController")
const thanksController = require("../controller/thanksController")
const historyOder = require("../controller/historyOrderController")
const searchController = require("../controller/searchController")
const brandController = require("../controller/brandController")
const detailedController = require("../controller/detailedController")
const laptop_managerController = require("../controller/laptop_managerController")
const addLaptopController = require("../controller/addLaptopController")

function router(app) {
    //route page
    app.get('/', homeController.index)
    app.get('/purchase', purchaseController.index)
    app.get('/thanks', thanksController.index)
    app.get('/search', searchController.index)
    app.get('/brand', brandController.index)
    app.get('/detailed', detailedController.index)
    app.get('/admin/historyorder', historyOder.index)
    app.get('/admin/laptopmanager', laptop_managerController.index)
    app.get('/admin/addlaptop', addLaptopController.index)

    //route api

    app.post('/api/purchase', purchaseController.payWithMoMoAtm)
    app.get('/api/getalllaptop', homeController.getAllLaptop)
    app.post('/api/getlaptop', purchaseController.getLaptop)
    app.get('/api/historyorder', historyOder.getHistoryOrder)
    app.post('/api/completeorder', thanksController.completePurechase)
    app.post('/api/addlaptop', addLaptopController.addLaptop)


}


module.exports = router