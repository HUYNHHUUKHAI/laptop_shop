const path = require('path')
const { PrismaClient } = require("@prisma/client")
const { log } = require('console')
const prisma = new PrismaClient
class HomeController {
    index(req, res) {
        res.sendFile(path.join(__dirname, '../views/page/historyorder.html'))
    }

    async getHistoryOrder(req, res) {
        let historyOder = await prisma.historyOder.findMany({
            include: {
                user: true,
                laptop: true,
            }

        })
        res.json(historyOder.reverse())
    }

}

module.exports = new HomeController