const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function datebiog(Language) {
  var sdn = 'RUN git clone https://github.com/Aqua-Snake/CBot /root/CBot' + '\n'
  exec('sed -n 3p /root/CBot/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!Language) { throw new Error ('Missing Language!!') }
  const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  var data = new Date().toLocaleDateString(Language, get_localized_date)
  return data;
}
module.exports = datebiog
