const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dotenv = require('dotenv')
const routes = require('./app/routes/index')


dotenv.config()
const port = process.env.PORT || 0


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// app.use(cookieParser())
// app.get('/', function(req, res){
//     res.send("Sup")
// })
app.use(routes)

app.listen(port)
console.log('Calling Zaddy on port 6661')