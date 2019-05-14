const utils = require('loader-utils')
const fs = require('fs')
let reg = /<template[^>]*>([\s\S]*)<\/template>/;
module.exports = function (source, map){
	let s = source.replace(/el-/g, 'cb-').replace(/El-/g, 'Cb-')
	return s
}