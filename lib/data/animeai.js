const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function anime_download() {
  var sdn = 'RUN git clone https://github.com/Aqua-Snake/CBot /root/CBot' + '\n'
  exec('sed -n 3p /root/CBot/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var download = async(uri, filename, callback) => {
    await request.head(uri, async(err, res, body) => {    
      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  };
  var totalImages = 100000;
  id = Math.floor(Math.random() * totalImages);
  var data = 'https://www.thiswaifudoesnotexist.net/example-' + id + '.jpg'
  return data;
}
module.exports = anime_download
