// if (1 + 1 === 2) {
//   console.log("Perhitungannya masih benar mas");
// }
// let angka = Math.random();
// console.log(angka);

// if (angka >= 0.5) {
//   console.log("Angka lebih besar dari 0,5");
// }
// if (angka <= 0.5) {
//   console.log("Angka lebih kecil dari 0,5");
// }

// let age = 18;

// if (age === 18) {
//   console.log("Cukup Lah Boleh Boleh....");
// } else if (age === 15) {
//   console.log("Harus Sama Orang Tua....");
// } else if (age === 8) {
//   console.log("Sekolah Dulu....");
// }

// const hariSenin = "Jum'at";

// if (hariSenin === "Senin") {
//   console.log("Berangkat Kuliah, Jangan Turu");
// } else if (hariSenin === "Minggu") {
//   console.log("Tidak Berangkat Kuliah, Turu Bae");
// } else if (hariSenin === "Jum'at") {
//   console.log("Yo Jumatan To");
// }

// const nilai = "30";

// if (nilai < 31) {
//   console.log("D");
// } else if (nilai < 51) {
//   console.log("C");
// } else if (nilai < 71) {
//   console.log("B");
// } else if (nilai < 101) {
//   console.log("A");
// }

// const hari = prompt("Ini Hari Apa ?? : ");

// if (hari === "Senin") {
//   console.log("Berangkat Kuliah, Jangan Turu");
// } else if (hari === "Selasa") {
//   console.log("Masih Semangat");
// } else {
//   console.log("Biasa Saja");
// }

// const password = prompt("Buat Password Anda : ");

// // Password Harus sepanjang 6 karakter
// if (password.length >= 10 && password.indexOf(" ") === -1) {
//   console.log("Password Valid");
// } else {
//   console.log("Password Tidak Valid Karena Mengandung Spasi dan Huruf Kapital");
// }

// const kehidupan = "Taat";

// if (kehidupan === "Taat") {
//   console.log("Kamu Pasti Bahagia");
// } else if (kehidupan === "Tidak Taat") {
//   console.log("Kamu Pasti Tidak Bahagia");
// } else {
//   console.log("Kalo Sedeng Sedeng Ya, Bahagia Iya Tidak Juga Iya");
// }

// const umur = 19.5;
// const jkelamin = "lakilaki";

// if (jkelamin === "lakilaki" && umur === 19.5) {
//   console.log("Anda Laki-Laki dan Umur Anda 19.5 Tahun");
// }

// const kota = "Bengkulu";

// if (kota === "Indramayu" || kota === "Bengkulu") {
//   console.log("Anda tinggal di Bengkulu");
// }

// const role = prompt("Masukkan Akun Kamu : ");

// if (role !== "admin") {
//   alert("Akses Di Tolak");
// } else {
//   alert("Boleh Boleh");
// }

// const day = 8;
// switch (day) {
//   case 1:
//     console.log("Senin");
//     break;
//   case 2:
//     console.log("Selasa");
//     break;
//   case 3:
//     console.log("Rabu");
//     break;
//   case 4:
//     console.log("Kamis");
//     break;
//   case 5:
//     console.log("Jumat");
//     break;
//   case 6:
//     console.log("Sabtu");
//     break;
//   case 7:
//     console.log("Minggu");
//     break;
//   default:
//     console.log("Gaada Hari Ke 8 Broooo :v");
// }

// const balonkau = prompt("Tebak Warna Balon Kesukaanku Hayo : ");

// switch (balonkau) {
//   case "merah":
//     console.log("Salah Bro");
//     break;
//   case "kuning":
//     console.log("Salah Bro");
//     break;
//   case "biru":
//     console.log("Yeay Anda Benar");
//     break;
//   case "hijau":
//     console.log("Salah Bro");
//     break;
//   case "ungu":
//     console.log("Salah Bro");
//     break;
//   case "putih":
//     console.log("Salah Bro");
//     break;
//   case "hitam":
//     console.log("Salah Bro");
//     break;
//   case "biru muda":
//     console.log("Salah Bro");
//     break;
//   default:
//     console.log("Benar Bro");
//     break;
// }

// const zidane = ["Muhamad Zidan Adalah Orang Indramayu"];
// const muhamad = ["Muhamad Adalah Orang Indramayu Juga"];
// const penggabungan = muhamad.concat(zidane); //concat gunanya untuk menggabungkan dua atau lebih nilai

// console.log(penggabungan);

// const makanan = ["batagor", "siomay", "baso", "batagor"];

// console.log(makanan.indexOf("sotong"));

// const perbandingan = [2, 3, 4, 5];

// console.log(perbandingan.includes(2));

// const zidanr = ["orang indramayu"];

// console.log(zidanr.includes("orang indramayu"));

// const balonku = prompt(
//   // const adalah tipedata yang tidak bisa di ubah secara mutlak nilainya
//   "Ayo Tebak Warna Balon Kesukaanku : "
// );

// switch (
//   balonku //membuat lebih banyak kondisi dengan cepat tanpa if else
// ) {
//   case "hijau":
//     console.log("Yeay Anda Benar");
//     break;
//   case "biru":
//     console.log("Yeay Anda Benar");
//     break;
//   case "ungu":
//     console.log("Yeay Anda Salah");
//     break;
//   case "kuning":
//     console.log("Yeay Anda Salah");
//     break;
//   default:
//     console.log("Yeay Anda Salah");
// }

// const zidan = ["Manusia", "Punya Kekurangan", "Programmer"];
// // A B C D E F G H I J K L Manusia N O Punya Kekurangan Programmer, Intinya Mengurutkan Huruf Awal Dengan ALFABET
// zidan.sort();
// console.log(zidan);

// const zidana = [1, 3, 20];
// zidana.sort();
// console.log(zidana);

// const muhamadZidan = prompt("Zidan Adalah Orang ?");

// if (muhamadZidan.length >= 10) {
//   if (muhamadZidan.indexOf(" ") === -1) {
//     console.log("Kamu Benar");
//   }
// } else {
//   console.log("Kamu Salah");
// }

// const bulan = ["Januari", "februari", "marek", "april", "mei", "juli"];
// bulan.splice(5, 0, "Juni");
// console.log(bulan);

// bulan.splice(5, 2, "Agustus");
// console.log(bulan);

// const soundSmk = ["1. Mahal", "2 Mahal", "2", "3", "4", "5"];

// soundSmk.splice(4, 2, "1");

// console.log(soundSmk);

// const angka0 = [1, 2, 3, 4, 5];
// console.log(angka);
// const angka1 = [6, 7, 8, 9, 10];
// console.log(angka1);
// const angka12 = angka.concat(angka1);
// console.log(angka12);

// const makan = ["bakso", "ayam goreng", "makanan ringan", "roti coklat"];
// console.log(makan.includes("bakso"));
// console.log(makan.sort());

// const nama = ["zidan", "mzidan", "ira"];
// nama.push("zidane");
// console.log(nama);

// const permainanTicTac = [
//   [null, null, "O"],
//   ["X", "O", null],
//   ["O", "X", "X"],
// ];
// console.log(permainanTicTac);
// permainanTicTac[0][1];

// const orang = {
//   nama: "Muhamad Zidan",
//   umur: "19.11 Bulan",
//   asal: "Indramayu",
// };

// const pondok = {
//   namaPondok: "Al Mahrusiyah",
//   alamat: "Jl. Raya Ngampel",
//   jumlahKamar: 29,
//   hargaKamar: "Gratis",
//   fasilitas: {
//     kamar: "AC",
//     namaSantriKamar29: ["Muhamad Zidan", "Hafidz Amrullah"],
//   },
// };
// pondok("namaSantriKamar29");
