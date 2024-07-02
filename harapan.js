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
//     console.log("Sa0.0lah Bro");
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

// if (muhamadZidan === "indramayuJawaBarat") {
//   if (muhamadZidan.length >= 10) {
//     if (muhamadZidan.indexOf(" ") === -1) {
//       console.log("Kamu Benar");
//     }
//   }
// } else {
//   console.log("Kamu Salah");
// }

// const bulan = ["Januari", "februari", "marek", "april", "mei", "juli"];
// bulan.splice(5, 0, "Juni");
// console.log(bulan);

// bulan.splice(5, 2, "Agustus");
// console.log(bulan);

// const soundSmk = ["1. Mahal", "2 Mahal"];

// soundSmk.splice(1, 1, "Murah Kalo Banyak Uang");
// soundSmk.splice(0, 1, "Mahal Untuk Yang Bajet Rendah Dari Client :v");
// console.log(soundSmk);

// const angka0 = [1, 2, 3, 4, 5];
// console.log(angka0);
// const angka1 = [6, 7, 8, 9, 10];
// console.log(angka1);
// const angka12 = angka0.concat(angka1);
// console.log(angka12);

// const makan = ["roti coklat", "makanan ringan", "ayam goreng", "bakso"];
// console.log(makan.includes("makanan ringan"));
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

// for (let i = 10; i <= 160; i *= 2) {
//   console.log(i);
// }

// const mahendra = prompt("Mahendra Itu Orang Mana Hayoooo :v");

// if (mahendra === "Cirebon") {
//   if (mahendra.length >= 6) {
//     if (mahendra.indexOf(" ") === -1) {
//       if (mahendra.indexOf("*") === -1) {
//         console.log("Kamu Benar :) ");
//       }
//     }
//   }
// } else if (mahendra === "Indramayu") {
//   console.log("Kamu Salah :(");
// } else {
//   console.log("Kamu Salah Besar");
// }

// const aku = "emzet";
// // const kamu = "LFK";

// // if (aku === "emzet" || kamu === "LFK") {
// //   print("BENER ITU :)");
// // }

// const minuman = ["Es Teh", "Teh Anget", "Jus Jeruk", "Jus Aplukat"];

// for (let i = 0; i < minuman.length; i++) {
//   console.log(i + 1, minuman[i]);
// }

// const pilihan = "ABCD";
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}. Soal Nomor ${i}`);
//   for (let z = 0; z < pilihan.length; z++) {
//     console.log(`    ${pilihan[z]}. Pilihan Jawaban`);
//   }
// }
// const mahasiswa = [
//   ["Muhamad Zidan", "Mahendra", "Wildan", "Hafidz"],
//   ["Lutfi Fatimatul Khoir", "Sulis", "Helen"],
// ];

// for (baris of mahasiswa) {
//   for (kolom of baris) {
//     console.log(kolom);
//   }
// }
// for (let i = 0; i < mahasiswa.length; i++) {
//   console.log(`Baris Ke. ${i + 1}`);
//   const Baris = mahasiswa[i];
//   for (let z = 0; z < Baris.length; z++) {
//     console.log(Baris[z]);
//   }
// }

// const mahasiswi = [["Lutfi Fatimatul Khoir"], ["Sulis"], ["Helen"]];

// for (let i = 0; i <= 2; i++) {
//   console.log(`Mahasiswa Perempuan Ke ${i + 1}`);
//   const Baris = mahasiswi[i];
//   for (let z = 0; z < Baris.length; z++) {
//     console.log(Baris[z]);
//   }
// }

// const jawaban = "ABCD";

// for (let i = 1; i <= 50; i++) {
//   console.log(`${i}. Esai Nomor ${i}`);
//   for (let a = 0; a < jawaban.length; a++) {
//     console.log(`${jawaban[a]}. Jawaban`);
//   }
// }

// const Fatimatul = [["Lufi"], ["Fatimatul"], ["Khoir"]];

// for (let i = 0; i <= 2; i++) {
//   console.log(`Panggilan Khoir Ke ${i + 1}`);
//   const panggilan = Fatimatul[i];
//   for (let l = 0; l < panggilan.length; l++) {
//     console.log(panggilan[l]);
//   }
// }

// let num = 0;
// while (num < 10) {
//   console.log(num + 1);
//   num++;
// }

// const passworde = "zidan10987";
// let pass = prompt("Masukkan Password Yang Benar");
// while (pass !== passworde) {
//   pass = prompt("Ingat Dengan Benar, Jangan Sampe Salah");
// }
// alert("Password Benar :v");

// let input = prompt("Belajar Itu Susah");

// while (true) {
//   input = prompt(input);
//   if (input === "Bener") break;
// }
// alert("Bener Bener Susah");
// const cinta = "Cinta";
// let hati = prompt('Kamu Cinta Aku ???"');
// while (hati !== cinta) {
//   hati = prompt("Ingat Dengan Benar, Jangan Sampe Salah");
// }
// alert("Oke Siap :)");

// let maximum = parseInt(prompt("Masukkan Nilai Maksimal"));
// while (!maximum) {
//   maximum = parseInt(prompt("Masukkan Nilai Maksimal"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt("Isi Pertama Tebakan Kamu"));
// let percobaan = 1;
// while (parseInt(guess) !== targetNum) {
//   percobaan++;
//   if (guess > targetNum) {
//     guess = prompt("Nilai Terlalu Tinggi");
//   } else {
//     guess = prompt("Nilai Terlalu Rendah");
//   }
// }

// alert(
//   `Selamat Tebakan Anda Benar, Anda Telah Mencoba dalam ${percobaan} Kali Percobaan`
// );

// const buah = ["Banana", "Mangga"];

// for (let i = 0; i < buah.length; i++) {
//   console.log(`Buah ${buah[i]}`);
// }

const zidanea = {
  muhamadZidan: 1,
  lutfiFatimatulKhoir: 2,
  mahendra: 3,
  wildan: 4,
  hafidz: 5,
  sulis: 6,
};

for (zidaaas in zidanea) {
  console.log(`${zidaaas} adalah urutan ke ${zidanea[zidaaas]}`);
}

// function zidan() {
//   console.log("Muhamad Zidan");
// }

// zidan(); // Output: Muhamad Zidan
// zidan();

// function z(a, b) {
//   const asa = a + b;
//   console.log(asa);
// }

// asa(1, 2);
