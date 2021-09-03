#!/usr/bin/env node

var path = require('path')
var fs = require('fs')

var fileName = 'config.yml'
var destinationDir = path.join(process.cwd(), 'static', 'admin')
var destinationFile = path.join(destinationDir, fileName)
var sourceFile = path.join(__dirname, fileName)

if (!fs.existsSync(destinationDir)) {
	fs.mkdirSync(destinationDir, { recursive: true })
}

fs.copyFile(sourceFile, destinationFile, (err) => {
	if (err) throw err
	console.log(
		'\x1b[32m%s\x1b[0m',
		'Successfully created Netlify configuration at:\n',
		'\x1b[1m',
		destinationFile
	)
})
