const path = require('path')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient
class SearchController {
    index(req, res) {
        res.sendFile(path.join(__dirname, '../views/page/search.html'))
    }

}

module.exports = new SearchController