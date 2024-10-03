//* map adalah proses untuk mengulang nilai variabel yang dulu menjadi ke nilai yang baru
// const nama = ["Al Mahrusiyah"];
// const namaBaru = nama.map(function (namaBaruPondok) {
//   return "Al - Mahrusiyah";
// });

// * forEach adalah function yang menjadalankan function lagi untuk menganalisis nilai array dan kemudian di jalankanlah kondisi
// const angka = ["Al Mahrusiyah"];
// angka.forEach(function (angle) {
//   if (angle === "Al Mahrusiyah") {
//     console.log("Kita Cocok, Soalnya Satu Pondok :3");
//   }
// });

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// angka.forEach(function (get) {
//   if (get % 2 === 0) {
//     console.log(get);
//   }
// });

// const film = [
//   { judul: "The Shawshank Redemption", durasi: 142, genre: "Crime, Drama" },
//   { judul: "Pulp Fiction", durasi: 154, genre: "Crime, Drama" },
//   { judul: "The Godfather", durasi: 175, genre: "Crime, Drama" },
//   { judul: "The Dark Knight", durasi: 152, genre: "Action, Adventure, Crime" },
//   {
//     judul: "Inception",
//     durasi: 148,
//     genre: "Action, Adventure, Crime, Mystery, Sci-Fi",
//   },
//   {
//     judul: "Eternal Sunshine of the Spotless Mind",
//     durasi: 108,
//     genre: "Drama",
//   },
// ];

// film.forEach(function (get) {
//   console.log(`${get.judul}`);
// });

//* mengubah nilai var ke nilai yang baru dengan teknik maping atau menganalisi kembali nilai variabel dulu ke baru
// const filmBaru = film.map(function (FB) {
//   return FB.judul.toUpperCase();
// });

// * mengambil nilai dari variabel dan kemudian di tampilkan di konsol
// film.forEach(function (film) {
//   console.log(
//     `Judul ${film.judul}, Durasi (${film.durasi}) Menit, Genre ${film.genre}`
//   );
// });

//* return secara efektif menggunakan arrow function dengan tanpa menampilkan key func atau return

// const arrowFunc = () => Math.floor(Math.random() * 1000) + 1;

// const zidan = (x) => Math.floor(Math.random() * 1000000) + 1;

// const zidan = {
//   nama: "Muhamad Zidan",
//   perkenalan: () => {
//     console.log(`Perkenalkan Nama Saya Adalah ${this.nama}`);
//   },
// };

// const angka = () => Math.floor(Math.random() * 1000) + 1;

// const perkalian = (a, b) => a * b;
// * setTimeout dan setInterval

// console.log("Helo... ");
// setTimeout(() => console.log("Kamu Tau Ngga ?"), 3000),
//   setTimeout(() => console.log("Aku Suka Kamu Dari Dulu :)"), 6000);

// * setInterval

// const interval = setInterval(() => {
//   console.log(Math.floor(Math.random() * 1000));
// }, 100);

// * Memiilh Data Tertentu Di Dalam Array Dengan Filter Method

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const angkaGanjil = angka.filter((AG) => {
//   return AG % 2 !== 0;
// });

// const filmBagus = film.filter((film) => film.durasi >= 148);
// const durasiFilmBagus = filmBagus.map((film) => film.durasi);
// const namaFilmBagusDiTahun2024 = filmBagus.map((film) => film.judul);
// const filmSedikitBagus = film.filter((film) => film.durasi <= 108);
// const filmDrama = film.filter(
//   (film) => film.genre === "Crime, Drama" || film.genre === "Drama"
// );

// * Menentukan Benar Atau Salah Pada Array Dengan Every Dan Some Method
// *every
// const nilaiUjian = [79, 80, 85, 90, 95, 100];
// const yangLulus = nilaiUjian.every((skor) => skor >= 80);
// console.log(yangLulus);

// *some
// const film = [
//   { judul: "The Shawshank Redemption", durasi: 142, genre: "Crime, Drama" },
//   { judul: "Pulp Fiction", durasi: 154, genre: "Crime, Drama" },
//   { judul: "The Godfather", durasi: 175, genre: "Crime, Drama" },
//   { judul: "The Dark Knight", durasi: 152, genre: "Action, Adventure, Crime" },
//   {
//     judul: "Inception",
//     durasi: 148,
//     genre: "Action, Adventure, Crime, Mystery, Sci-Fi",
//   },
//   {
//     judul: "Eternal Sunshine of the Spotless Mind",
//     durasi: 108,
//     genre: "Drama",
//   },
// ];

// const iniAdalahGenreFilm = film.some(
//   (filem) => filem.genre === "Drama" || filem.genre === "Crimeae, Drama"
// );
// console.log(iniAdalahGenreFilm);

// * filter mode

// const filmEternal = film.filter(
//   (film) => film.judul === "Eternal Sunshine of the Spotless Mind"
// );

// * reduce, melakukan aksi sebanyak element suatu array dengan nilai balik single value

// const subtotal = [20000, 10000, 7000, 61000, 90101];

// const total = subtotal.reduce(
//   (nilaiAwal, nilaiHasil) => (nilaiAwal * nilaiHasil) / nilaiHasil
// );

// const durasiTerlama = film.reduce((terlama, tercepat) => {
//   if (tercepat.durasi > terlama.durasi) {
//     return tercepat;
//   }
//   return terlama;
// });

// *this mengambil nilai object

// const person = {
//   namaPertama: "Zidan",
//   namaKedua: "Ira ",
//   asal: "Itu Dari Indramayu",
//   fullName: function () {
//     return `${this.namaPertama} ${this.namaKedua} ${this.asal}`;
//   },
// };

// function lemparDadu(a = 10, b = 100) {
//   return Math.floor(Math.random() * a, b) + 1;
// }

// * Mengubah Array Atau Object Menjadi Deret Value Argument Function

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Math.max(angka); // NaN, karena array bukan number
// Math.max(...angka); // 10, karena angka tertinggi adalah 10 (...) adalah
// console.log(...angka);

// * menggabungkan nilai array dengan array lainnya dengan spread operator

// const namaAwal = ["Muhamad"];
// const namaAkhir = ["Zidan"];
// const gabungan = [...namaAwal, ...namaAkhir]; // nilai manipulasi tanpa mengubah nilai variabel asli

// * menggabungkan nilai object dengan array lainnya dengan spread operator

// const user = {
//   nama: "Zidan",
//   umur: 25,
// };
// const akun = {
//   password: "ksassa",
//   token: "sadsdsdsfsf",
// };
// const userBaru = { ...user, ...akun };

// * Malas Bikin Parameter Banyak Bisa Pakai Rest Param

const param = (...string) => {
  return string.reduce((total, el) => total + " " + el);
};

// * Bongkar Element Array Ke Masing-Masing Variabel Dengan Mudah

// const nama = [
//   { judul: "The Shawshank Redemption", durasi: 142, genre: "Crime, Drama" },
//   { judul: "Pulp Fiction", durasi: 154, genre: "Crime, Drama" },
//   { judul: "The Godfather", durasi: 175, genre: "Crime, Drama" },
//   { judul: "The Dark Knight", durasi: 152, genre: "Action, Adventure, Crime" },
//   {
//     judul: "Inception",
//     durasi: 148,
//     genre: "Action, Adventure, Crime, Mystery, Sci-Fi",
//   },
//   {
//     judul: "Eternal Sunshine of the Spotless Mind",
//     durasi: 108,
//     genre: "Drama",
//   },
// ];

// const pemenang = (gold, silver, bronze, ...pesertaYangKalah) => {
//   console.log(`Juara Satu Di Raih Oleh ${gold}`);
//   console.log(`Juara Dua Di Raih Oleh ${silver}`);
//   console.log(`Juara Tiga Di Raih Oleh ${bronze}`);
//   console.log(`Peserta Yang Kalah : ${pesertaYangKalah}`);
// };

// const [filmKe1, filmKe2, filmKe3, ...filmLainnya] = nama;

// * Bongkar Juga Properti Object Ke Masing-Masing Variabel

// const user = {
//   nama: "Ira",
//   umur: 25,
// };

// const { nama: panggilan, umur } = user;

// * Bongkar Properti Object Bisa Dilakukan Di Dalam Function

// const user = {
//   nama: "Muhamad Zidan",
//   asal: "Dari Indramayu",
//   materiYangSudahDiTonton: "Sudah Menonton " + 100 + " Materi",
// };

// const userFullStack = ({ nama, asal, materiYangSudahDiTonton }) => {
//   return `${nama} ${asal} ${materiYangSudahDiTonton}`;
// };

// const film = [
//   { judul: "The Shawshank Redemption", durasi: 142, genre: "Crime, Drama" },
//   { judul: "Pulp Fiction", durasi: 154, genre: "Crime, Drama" },
//   { judul: "The Godfather", durasi: 175, genre: "Crime, Drama" },
//   { judul: "The Dark Knight", durasi: 152, genre: "Action, Adventure, Crime" },
//   {
//     judul: "Inception",
//     durasi: 148,
//     genre: "Action, Adventure, Crime, Mystery, Sci-Fi",
//   },
//   {
//     judul: "Eternal Sunshine of the Spotless Mind",
//     durasi: 108,
//     genre: "Drama",
//   },
// ];

// const filem = film.map(({ judul, durasi, genre }) => {
//   return `${judul} (${durasi} Menit) dan bergenre ${genre}`;
// });
