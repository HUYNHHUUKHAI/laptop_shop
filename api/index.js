const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const router = require('./src/router/index')
const initDB = require('./src/db/initDB')
app.use(express.static(path.join(__dirname, 'src/views')));
app.use(express.urlencoded())
app.use(express.json())
router(app)
initDB()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
