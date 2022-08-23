// Membuat Object
// Object Literal
var mhs1 = {
  nama: "Sigit Julianto",
  nim: "11161990",
  email: "jsigit111@gmail.com",
  jurusan: "SIA",
};

var mhs2 = {
  nama: "riki",
  nim: "11161465",
  email: "riki@gmail.com",
  jurusan: "SIA",
};

// Function Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nim = nim;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}
var mhs3 = buatObjectMahasiswa("Rizal", "11161847", "rizal@gmail.com", "Sia");

// Constructor
function Mahasiswa(nama, nim, email, jurusan) {
  this.nama = nama;
  this.nim = nim;
  this.email = email;
  this.jurusan = jurusan;
}
var mhs4 = new Mahasiswa("Jors", "11161897", "jors@gmail.com", "SIa");
