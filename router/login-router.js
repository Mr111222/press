const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const consolidate = require('consolidate')
const bodyParser = require('body-parser')
const data = require('../datas/data.json')

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'html') 
app.set('views', './www')
app.engine('html',consolidate.ejs)



var newObj = data.goods[0].foods
let modObj
app.get('/add',function(req, res){
	// 编 辑
	if(req.query && req.query.act == 'mod'){
		newObj.forEach(item =>{
			if(item.id == req.query.id){
				modObj =  item
			}
		})
		res.render('1.ejs', {modObj:modObj,data:newObj})
	// 删 除
	}else if(req.query && req.query.act == 'del'){
		newObj.forEach((item,index)=>{
			if(item.id == req.query.id){
				newObj.splice(index, 1)
			}
		})
		res.render('1.ejs', {data:newObj, modObj:[]})
	}else if (!req.query.mod){
		res.render('1.ejs', {data:newObj,modObj:[]})
	}
})


var ids = 11;
app.post('/add',function(req, res){
	if(req.body && !req.body.id) {
		let {name, price} = req.body
		newObj.push({
			"name":name,
			"price":price,
			"id":ids+=1
		})
	}else{
		let {name, price, id}  = req.body
		newObj.forEach(item=>{
			if(item.id == req.body.id){
					item.id = id
					item.name = name
					item.price = price
			}
		})
	}
	res.render('1.ejs', {data:newObj,modObj:[]})
})



app.get('/pps',function(req, res){
	res.render('2.ejs', {names:'pps'})
})

module.exports = app