const exec = require('child_process').exec;
const os = require("os");
async function unit_msg(Language) {
  var sdn = 'RUN git clone https://github.com/Aqua-Snake/CBot /root/CBot' + '\n'
  exec('sed -n 3p /root/CBot/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = {
    success: '',
    unsuccess: '',
    values: ''
  }
  data.values = '\n\n*.unit <number> <unit1> <unit2>* \n*Unit Values:* _mg, g, kg, t, ct, oz, q, lb_\n\n*mg* = Miligram \n*g* = Gram\n*kg* = Kilogram\n*t* = Ton\n*ct* = Carat\*oz* = Ons \n*lb* = Pound \n*q* = Quintal'
  data.success = '{number}' + '{unit1} *=* ' + '{result}' + '{unit2}'
  if (Language == 'TR') {
    data.unsuccess = '*Çeviri Yapılırken Hata Oluştu! Lütfen Aşağıdaki Bulunan Değerleri Kullanın.*'
  } 
  else if (Language == 'EN') {
    data.unsuccess = '*Error Occurred While Translating! Please Use the Values ​​Found Below.*'
  } 
  else if (Language == 'AZ') {
    data.unsuccess = '*Tərcümə edərkən xəta baş verdi! Zəhmət olmasa aşağıda tapılan dəyərlərdən istifadə edin.*'
  } 
  else if (Language == 'ML') {
    data.unsuccess = '*വിവർത്തനം ചെയ്യുമ്പോൾ പിശക് സംഭവിച്ചു! ദയവായി താഴെ കാണുന്ന മൂല്യങ്ങൾ ഉപയോഗിക്കുക.*'
  } 
  else if (Language == 'HI') {
    data.unsuccess = '*अनुवाद करते समय हुई त्रुटि! कृपया नीचे पाए गए मानों का उपयोग करें।*'
  } 
  else if (Language == 'RU') {
    data.unsuccess = '*При переводе произошла ошибка! Пожалуйста, используйте значения, указанные ниже.*'
  } 
  else if (Language == 'ES') {
    data.unsuccess = '*¡Ocurrió un error al traducir! Utilice los valores que se encuentran a continuación.*'
  } 
  else if (Language == 'ID') {
    data.unsuccess = '*Terjadi Kesalahan Saat Menerjemahkan! Silakan Gunakan Nilai Ditemukan Di Bawah Ini.*'
  } 
  else if (Language == 'PT') {
    data.unsuccess = '*Ocorreu um erro durante a tradução! Use os valores encontrados abaixo.*'
  } 
  else {
    data.unsuccess = '*Error Occurred While Translating! Please Use the Values Found Below.*'
  }
  return data;
}
module.exports = unit_msg
  
  
  
  
  

