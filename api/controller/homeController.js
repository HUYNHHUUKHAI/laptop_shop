const path = require('path')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient
class HomeController {
    index(req, res) {
        res.sendFile(path.join(__dirname, '../views/page/home.html'))
    }

    async getAllLaptop(req, res) {
        const listlaptops = await prisma.laptop.findMany()
        res.json(listlaptops);
    }

}

module.exports = new HomeController