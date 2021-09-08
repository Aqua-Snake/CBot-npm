const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function update(Language) {
  var sdn = 'RUN git clone https://github.com/Aqua-Snake/CBot /root/CBot' + '\n'
  exec('sed -n 3p /root/CBot/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = ''
  if (Language == 'TR') { data = '```Güncellemek İçin``` *.update now* ```Yazın.``` \n\n'
  } else if (Language == 'AZ') { data = '```CBotnı Yeniləmək üçün``` *.update now* \n\n'
  } else if (Language == 'EN') { data = '```To Update CBot``` use *.update now* \n\n'
  } else if (Language == 'RU') { data = '```Чтобы обновить CBot, используйте``` *.update now* \n\n'
  } else if (Language == 'HI') { data = '```CBot को अपडेट करने के लिए``` *.update now* ```का उपयोग करें``` \n\n'
  } else if (Language == 'ML') { data = '```CBot അപ്‌ഡേറ്റ് ചെയ്യുന്നതിന്``` *.update now* ```ഉപയോഗിക്കുക```'
  } else if (Language == 'ES') { data = '```Para actualizar CBot use``` *.update now* \n\n'
  } else if (Language == 'PT') { data = '```Para atualizar o CBot, use``` *.update now* \n\n'
  } else if (Language == 'ID') { data = '```Untuk Memperbarui CBot gunakan``` *.update now* \n\n'
  }
  return data;
}
module.exports = update
