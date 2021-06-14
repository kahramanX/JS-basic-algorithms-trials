// değişken yerine function kullandığımda clearTimeout çalışmadı.
console.log("Random sayı üretme başlatıldı");
let run = window.setInterval(function () {
  let value = Math.floor(Math.random() * 31 + 1);

  console.log(`Sayı: ${value}`);
}, 1000);

// zamanlayıcı silmeyi çalıştırmak için onu func içine aldım
function clear() {
  clearTimeout(run); //zamanlayıcıyı durdurur.
  console.log("Random sayı üretme durduruldu");
}

// zamanlayıcı silici 5 saniye sonra çalıştırılacak
setTimeout(clear, 5000);
