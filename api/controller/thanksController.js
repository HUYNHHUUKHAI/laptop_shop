const axios = require('axios')
const path = require('path')
const { PrismaClient } = require("@prisma/client")
const { json } = require('express')
const prisma = new PrismaClient
class ThanksController {
    index(req, res) {
        res.sendFile(path.join(__dirname, '../views/page/thanks.html'))
    }

    async completePurechase(req, res) {
        let response = await prisma.historyOder.update({
            where: {
                orderId: req.body.orderId.toString()
            },
            data: {
                status: 'COMPLETE'
            }
        })
        res.json({})
    }
}

module.exports = new ThanksController