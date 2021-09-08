const exec = require('child_process').exec;
const os = require("os");
const axios = require('axios');
async function announcement_full() {
  var sdn = 'RUN git clone https://github.com/Aqua-Snake/CBot /root/CBot' + '\n'
  exec('sed -n 3p /root/CBot/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = ''
  await axios.get('https://gist.githubusercontent.com/Aqua-Snake/ff44c663f4435d3fc998dbb98615214a/raw/').then(async (ann) => {
      data = ann.data
  })
  return data;
}
module.exports = announcement_full
