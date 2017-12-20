const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dotenv = require('dotenv')
const routes = require('./app/routes/index')
const mongo = require('./app/mongodb')

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

mongo.connect(process.env.MONGODB_URL)
    .then(() => app.listen(port))
    .then(() => console.log(`Calling Zaddy on ${port}`))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
