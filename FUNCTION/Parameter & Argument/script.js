// contoh 1

// function tambah(a,b) {
// 	return a + b;
// }
// var a = parseInt(prompt('masukkan nilai 1 : '));
// var b = parseInt(prompt('Masukkan Nilai 2 : '));
// var hasil = tambah(a*2,b*2);
// console.log(hasil);


// conotoh 2

// function tambah(a,b) {
// 	return a + b;
// }
// function kali(a,b) {
// 	return a * b;
// }
// var hasil = kali(tambah(1,2), tambah(3,4));
// console.log(hasil);


// contooh 3
// function tambah(a,b,c,d) {
// 	return a + b + c + d;
// }
// var hasil = tambah(3,4,5,6);
// console.log(hasil);


// conotoh 4
function tambah() {
	var hasil = 0;
	for( var i = 0; i < arguments.length; i++ ) {
		hasil += arguments[i];
	}
	return hasil;
}
var coba = tambah(1,2,3,4,5);
console.log(coba);