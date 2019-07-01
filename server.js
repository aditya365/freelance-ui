const express = require('express')
const path    = require('path')

const app = express()

app.use(express.static('./dist/free'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/free/index.html'))
})

app.listen(process.env.PORT || 8080)

console.log("Server started on port 8080")