// Method pada array

// 1. join
// var arr = ["Sigit", "Julianto", "koding"];
// console.log(arr.join(" - "));

// 2. push & pop
// arr.push("script", "js");
// arr.pop();
// arr.pop();
// console.log(arr.join(" - "));

// 3. unshift & shift
// arr.unshift("script");
// arr.shift();
// console.log(arr.join(" - "));

// 4. splice
// var arr = ["Sigit", "Julianto", "koding"];
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(1, 2, "script", "js");
// console.log(arr.join(" - "));

// 5. slice
// slice(awal,akhir);
// var arr = ["Sigit", "Juliantto", "script", "koding", "js"];
// var arr2 = arr.slice(1, 4);
// console.log(arr.join("  "));
// console.log(arr2.join(" - "));

// 6. forEach
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
var nama = ["Sigit", "Julianto", "koding"];
// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }

// angka.forEach(function (e) {
//   console.log(e);
// });

// nama.forEach(function (e, i) {
//   console.log("Mahasiswa ke-" + (i + 1) + " adalah : " + e);
// });

// 7. map
// var angka = [1, 2, 5, 3, 6, 8, 4];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

// 8. sort
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

// 9. filter
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// var angka2 = angka.filter(function (x) {
//   return x > 5;
// });
// console.log(angka2.join(" - "));

// 10. find
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.find(function (x) {
  return x > 5;
});
console.log(angka2);
