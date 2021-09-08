const exec = require('child_process').exec;
const os = require("os");
async function face_generator() {
  var sdn = 'RUN git clone https://github.com/Aqua-Snake/CBot /root/CBot' + '\n'
  exec('sed -n 3p /root/CBot/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = 'https://thispersondoesnotexist.com/image?' + (new Date).getTime()
  return data;
}
module.exports = face_generator
