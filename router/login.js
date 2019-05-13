const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const {userData} = require('../datas/data.json')

router.get('/logout', function(req, res){
	console.log(req.body)
})

router.post('/islogin', function(req, res){
	let {user, pass} = req.body
	res.render('isLogin.ejs', {pps:req.body})
	// userData.forEach(item => {
	// 	if(item.user == user && item.pass == pass){
	// 		res.render('isLogin.ejs', {pps:req.body})
	// 	}
	// })
})

module.exports = router