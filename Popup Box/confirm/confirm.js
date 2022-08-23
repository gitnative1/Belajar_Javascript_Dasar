// var tes = confirm("kamu yakin??");
// alert(tes);

// // contoh pengkondisian
// var tes = confirm("kamu yakin?");
// if (tes === true) {
//   alert("user menekan OK!");
// } else {
//   alert("user menekan CANCEL!");
// }

// contoh pengulangan
alert("selamat datang..");
var lagi = true;

while (lagi) {
  var nama = prompt("masukan nama:");
  alert("halo " + nama);

  lagi = confirm("coba lagi?");
}
alert("terima kasih..");
