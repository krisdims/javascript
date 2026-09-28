/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI PSTI KAMPUS PURWAKARTA===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"
console.log("Skrip app.Js berhasil terhubung!!!");



// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus Purwakarta").
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().
const NAMA_KEDAI = "KOPI PSTI Kampus Purwakarta";
let NAMA_KASIR = "Kak EKo";
let SHIFT_KERJA = "Shift Sore";
console.log("KEDAI : " + NAMA_KEDAI);
console.log("KASIR : " + NAMA_KASIR);
console.log("SHIFT KERJA : " + SHIFT_KERJA);




// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.
NAMA_KASIR = "Kak Dimas Krisna";  
console.log("Kasir Pengganti (Setelah diubah dengan variabel let); "+ NAMA_KASIR); 



// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.
alert("Selamat Datang di KOPI PSTI Kampus Purwakarta🤩🎈");
let NAMA_PELANGGAN = prompt("Halo!! Selamat Datang. Masukan nama kamu untuk memulai Experience Yang Menyenangkan : ");
if (NAMA_PELANGGAN) {
    // jika user mengisi nama:
    alert("Halo, " + NAMA_PELANGGAN + "! Yuk jajan di KOPI PSTI Kampus Purwakarta.");
    console.log("Pelanggan yang aktif:" + NAMA_PELANGGAN); //Tampilkan nama pelanggan yang aktif
}
else{
    //jika user tidak memasukan nama :
    alert("Sayang sekali, kamu tidak memasukan nama, kamu dipanggil Pelanggan Setia saja yaa😍🤗");
    NAMA_PELANGGAN = "Pelanggan Setia"; // jika user tidak memasukan nama maka akan di set default menjadi Anonymous
    console.log("Pelanggan yang aktif:" + NAMA_PELANGGAN); //Tampilkan nama mahasiswa yang aktif
}



// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().
let POIN_KOPI = 45; 
let POIN_MAKANAN = 35; 
let POIN_MERCHANDISE = 15; 
let JUMLAH_POINT = POIN_KOPI + POIN_MAKANAN + POIN_MERCHANDISE;

console.log("POINT " + NAMA_PELANGGAN + "Kak Dimas Krisna");
console.log("KOPI : "+ POIN_KOPI);
console.log("MAKANAN : "+ POIN_MAKANAN);
console.log("MERCHANDISE : "+ POIN_MERCHANDISE);

console.log("Jumlah POINT kamu adalah " + JUMLAH_POINT);


// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().
let tierMember = "";
let benefit = "";

if (JUMLAH_POINT >= 100) {
    tierMember = "Platinum";
    benefit = "Diskon 20% + Gratis 1 Minuman Signature";
}
else if (JUMLAH_POINT >= 70) {
    tierMember = "Gold";
    benefit = "Diskon 10% di setiap transaksi";
}
else if (JUMLAH_POINT >= 40) {
    tierMember = "Silver";
    benefit = "Diskon 5% untuk menu minuman";
} 
else {
    tierMember = "Bronze";
    benefit = "Member Reguler (kumpulkan poin untuk naik tier)"; 
}

console.log("TIER MEMBER : " + tierMember + " - " + benefit);

alert(
    "JUMLAH POINT " + NAMA_PELANGGAN + "\n" +
    "TIER MEMBER " + tierMember + " (" + benefit + ")"
);



// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.
function hitungTotallPoint(n1, n2, n3) {
    let JUMLAH = n1 + n2 + n3;
    return JUMLAH; 
}



// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.
function tentukanTierMember(poin) {
    if (poin >= 100) {
        return "Platinum - Diskon 20% + Gratis 1 Minuman Signature";
    } else if (poin >= 70) {
        return "Gold - Diskon 10% di setiap transaksi";
    } else if (poin >= 40) {
        return "Silver - Diskon 5% untuk menu minuman";
    } else {
        return "Bronze - Member Reguler (kumpulkan poin untuk naik tier)";
    }
}



// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.
// Pelanggan B
let totalB = hitungTotallPoint(35, 25, 20);
console.log("--- Pelanggan B ---");
console.log("Total Poin : " + totalB);
console.log("Tier       : " + tentukanTierMember(totalB));

// Pelanggan C
let totalC = hitungTotallPoint(15, 10, 5);
console.log("--- Pelanggan C ---");
console.log("Total Poin : " + totalC);
console.log("Tier       : " + tentukanTierMember(totalC));



// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.
let menuRekomendasi = [
    "Kopi susu", 
    "Americano", 
    "Nasi Uduk", 
    "Nasi Goreng", 
    "Mix Platter", 
];



// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.
for (let i = 0; i< menuRekomendasi.length; i++) {
console.log((i + 1) + ". " + menuRekomendasi[i]);
}




// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");
console.log("Total menu: " + menuRekomendasi.length);
console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");
