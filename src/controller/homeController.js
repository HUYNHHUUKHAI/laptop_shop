const path = require('path')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient
class HomeController {
    index(req, res) {
        res.sendFile(path.join(__dirname, '../views/page/home.html'))

    }

    async getAllLaptop(req, res) {
        const listlaptops = await prisma.laptop.findMany({
            select: {
                id: true,
                name: true,
                price: true,
                img: true,
                card: true,
                cpu: true,
                design: true,
                info: true,
                os: true,
                ram: true,
                rom: true,
                screen: true,
                size: true,
                time: true,
                usb: true,

            }
        })
        res.json(listlaptops);
    }

}

module.exports = new HomeController