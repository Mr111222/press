const express = require('express')
const serveStatic = require('serve-static')
const ejs = require('ejs')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const consolidate = require('consolidate')
const examples = require('./router/login-router')
const login = require('./router/login')

app.use(bodyParser.urlencoded({ extended: false }))

app.engine('html', consolidate.ejs)
app.set('views', 'www')
app.set('view engine', 'html')


app.use('/menu', examples)
app.use('/login/', login)

app.use(serveStatic(path.join(__dirname, 'www')))
app.listen(5566,()=>{
	console.log('server is servering --port 5566')
})


