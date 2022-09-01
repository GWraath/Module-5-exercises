const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');


const express = require('express')
//const testRoute = require('./routes/myTestRoute')
const calculatorRoute = require('./app/routes/calculatorRoute')
// const router = express.Router();
const app = express()
// const app = swaggerUi
const port = 3000
app.use('/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);
app.use('/calculatorRoute', calculatorRoute) //http://localhost:3000/calculatorRoute/
// router.get('/test', (req, res) => {
//     res.send('Hello World!') //sends the string Hello World! to the browser screen
//     })

// router.get('/test2', (req, res) => { //sends the string Second test to the browser screen
//     res.send('Second test')
//     })

// module.exports = router

// const express1 = require('express')
// const app1 = express1()
//const port1 = 8080


// app.get('/', (req, res) => {
// res.send('Hello World 3000!')
// })
//let server = express()

app.use('/', express.static('public')) //where the server will be hosted on
// server.use('/static', express.static('public'))

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`) //
})

// app1.get('/', (req, res) => {
// res.send('Hello World 8080!')
// })
    
// app1.listen(port1, () => {
// console.log(`Example app listening at http://localhost:${port1}`)
// })