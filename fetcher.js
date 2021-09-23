const request = require('request');
const fs = require('fs');

const input = process.argv.slice(2);
const link = input[0];
const path = input[1];



const response = request.get(link, (error, response, body) => {

  const file = fs.writeFile(path, body, possibleError => {
    if (possibleError) {
      console.error(possibleError);
      return
    }
    let stats = fs.statSync(path);
    var size = stats.size;
    console.log(`Downloaded and saved ${size} bytes to ./index.html`)
  })

})
