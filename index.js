const parse = require('csv-parse')
const fs = require('fs')

const nov2017toApr2018 = 'aspiration-lyft-nov2017-april2018.csv'
const may2018 = 'aspiration-lyft-may2018.csv'

fs.readFile('./data/' + may2018, function (err, fileData) {
  parse(fileData, {columns: false, trim: true}, function(err, rows) {
    // Your CSV data is in an array of arrys passed to this callback as rows.
    const x = rows.map(r => Number(r.undefined)).reduce((acc, r) => acc = r + acc, 0)
    console.log(x)
  })
})