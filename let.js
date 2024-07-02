// Definisi fungsi untuk menghitung luas persegi panjang
function hitungLuasPersegiPanjang(panjang, lebar) {
  // Menghitung luas dengan mengalikan panjang dan lebar
  var luas = panjang * lebar;
  // Mengembalikan hasil perhitungan luas
  return luas;
}

// Memanggil fungsi dengan nilai panjang 10 dan lebar 5
var panjang = 10;
var lebar = 5;
var luasPersegiPanjang = hitungLuasPersegiPanjang(panjang, lebar);

// Menampilkan hasil
console.log("Luas persegi panjang: " + luasPersegiPanjang);
