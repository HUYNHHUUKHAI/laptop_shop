const path = require('path')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient
class BrandController {
    index(req, res) {
        res.sendFile(path.join(__dirname, '../views/page/brand.html'))
    }
}

module.exports = new BrandController