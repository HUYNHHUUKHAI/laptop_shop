const path = require('path')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient
class DetailedController {
    index(req, res) {
        res.sendFile(path.join(__dirname, '../views/page/detailed.html'))
    }

}


module.exports = new DetailedController