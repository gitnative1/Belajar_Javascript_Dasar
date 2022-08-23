// // contoh normal flow / alur normal
// var angka = prompt("Masukkan angka : ");
// alert("Angka yang anda masukkan adalah : " + angka);

// // contoh Control Flow
// // dengen syntax loop / pengulangan

// alert('Mulai');
// for (var i = 0; i < 5 ; i++){
// 	alert('Hello World!');
// }
// alert('Selesai');

// // contoh Control Flow dengan
// // syntax pengkondisian / percabangan

// var angka = prompt("Masukan Angka :");
// if (angka % 2 == 0) {
//   alert(angka + " adalah bilangan GENAP");
// } else {
//   alert(angka + " adalah bilangan GANJIL");
// }

const array = ["A", "B", "C"];
const emptyIt = (arr) => (arr.length = 0);
emptyIt(array);
console.log(array);
console.log(array.length);
