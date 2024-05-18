const path = require('path')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient
class AddLaptopController {
    index(req, res) {
        res.sendFile(path.join(__dirname, '../views/page/addlaptop.html'))
    }

    async addLaptop(req,res){
        console.log(req.body);
        const resp = await prisma.laptop.create({
            data:req.body
        })
        res.json(resp);
        
    }
}

module.exports = new AddLaptopController