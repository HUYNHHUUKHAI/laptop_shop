const path = require('path')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient
class LaptopManagerController {
    index(req, res) {
        res.sendFile(path.join(__dirname, '../views/page/laptop_manager.html'))
    }
}

module.exports = new LaptopManagerController