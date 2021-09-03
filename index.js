#!/usr/bin/env node

const https = require('https')
const fs = require('fs')

var dir = './static/admin'
var fileName = 'config.yml'

if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir, { recursive: true })
}

const file = fs.createWriteStream(dir + '/' + fileName)
const request = https.get(
	'https://raw.githubusercontent.com/ElegantStack/gatsby-recipes/master/src/flexiblog-netlify-cms/config.yml',
	function (response) {
		response.pipe(file)
	}
)
