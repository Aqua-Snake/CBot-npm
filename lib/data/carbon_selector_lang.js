const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function carbons() {
  var sdn = 'RUN git clone https://github.com/Aqua-Snake/CBot /root/CBot' + '\n'
  exec('sed -n 3p /root/CBot/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var Language = new Array ()
  Language[0] = "Apache";
  Language[1] = "Python";
  Language[2] = "Javascript";
  Language[3] = "Bash";
  Language[4] = "cobol";
  Language[5] = "coffeescript";
  Language[6] = "Crystal";
  Language[7] = "Erlang";
  Language[8] = "GraphQL";
  var i = Math.floor(9*Math.random())
  var data = ''
  data = Language[i]
  return data;
}
module.exports = carbons
