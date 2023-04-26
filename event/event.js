const inputNoKelas = document.getElementById("No Kelas");
const inputNama = document.getElementById("Nama");
const selectKehadiran = document.getElementById("Kehadiran");

inputNoKelas.addEventListener("input", function () {
  let noKelas = inputNoKelas.value;
  // Tambahkan angka 0 pada bagian depan jika panjang string < 2
  noKelas = noKelas.padStart(2, "0");
  // contoh data kelas
  const dataKelas = [
    { no: "01", nama: "ALBERT SANJAYA", kehadiran: "🟢 - Hadir" },
    { no: "02", nama: "ANDREW", kehadiran: "🟢 - Hadir" },
    {
      no: "03",
      nama: "ANGELICA CAHAYA LAZUARDI",
      kehadiran: "🔴 - Tidak Hadir",
    },
    { no: "05", nama: "CATHERINE CALISTA", kehadiran: "🟢 - Hadir" },
    { no: "06", nama: "CHILWIN", kehadiran: "🟢 - Hadir" },
    { no: "07", nama: "CINDY ANGELIA LEONARDY", kehadiran: "🟢 - Hadir" },
    { no: "08", nama: "CLARISSA ELLEN SIM", kehadiran: "🟢 - Hadir" },
    { no: "09", nama: "CORRINA CRISTY CHEN", kehadiran: "🟢 - Hadir" },
    { no: "10", nama: "CRESTELLA SURYA", kehadiran: "🟢 - Hadir" },
    { no: "11", nama: "CRISYE YOUNG", kehadiran: "🟢 - Hadir" },
    { no: "12", nama: "DARREN LYSS CHANDRA", kehadiran: "🟢 - Hadir" },
    { no: "13", nama: "DARREN WONG", kehadiran: "🟢 - Hadir" },
    { no: "14", nama: "DAVID", kehadiran: "🟢 - Hadir" },
    { no: "15", nama: "DHARMA SATRIYA GAUTAMA", kehadiran: "🟢 - Hadir" },
    { no: "16", nama: "DODVIN ANGDERICO", kehadiran: "🟢 - Hadir" },
    { no: "17", nama: "EARLEANE CALISTA", kehadiran: "🔴 - Tidak Hadir" },
    { no: "18", nama: "EDDRICK", kehadiran: "🟢 - Hadir" },
    { no: "19", nama: "ELQYRO RAPHAEL YU", kehadiran: "🟢 - Hadir" },
    { no: "20", nama: "EVAN STANLEY", kehadiran: "hadir" },
    {
      no: "21",
      nama: "FELICE DAVINCCI WILIDYO",
      kehadiran: "🔴 - Tidak Hadir",
    },
    { no: "22", nama: "FELYCHIA ZUFTI", kehadiran: "🟢 - Hadir" },
    { no: "23", nama: "GRACE CORRINE", kehadiran: "🟢 - Hadir" },
    { no: "24", nama: "GRACE OCTAVIUS HAVILAH", kehadiran: "🟢 - Hadir" },
    { no: "25", nama: "HARVANY LIEWIN", kehadiran: "🔴 - Tidak Hadir" },
    {
      no: "26",
      nama: "JEFF HANSENN ESTOMIHI SILALAHI",
      kehadiran: "🟢 - Hadir",
    },
    { no: "27", nama: "JESSLYN", kehadiran: "🟢 - Hadir" },
    { no: "28", nama: "JESSY TANAYA", kehadiran: "🔴 - Tidak Hadir" },
    { no: "29", nama: "JOLIVIA", kehadiran: "🔴 - Tidak Hadir" },
    { no: "30", nama: "JONG FILBERT ANTONIUS", kehadiran: "🟢 - Hadir" },
    { no: "31", nama: "JOVAN PUTRA PANDAWA", kehadiran: "🟢 - Hadir" },
    { no: "32", nama: "JUSTIN ETHAN", kehadiran: "🔴 - Tidak Hadir" },
    { no: "33", nama: "KAYLA RAINE WIDJAJA", kehadiran: "🔴 - Tidak Hadir" },
    {
      no: "34",
      nama: "MARGARETH JOY FEBRIANTY PAKPAHAN",
      kehadiran: "🟢 - Hadir",
    },
    { no: "35", nama: "ORLANDO EDWARD ONGAH", kehadiran: "🟢 - Hadir" },
    { no: "36", nama: "RICHARD ANDERSON", kehadiran: "🟢 - Hadir" },
    { no: "37", nama: "RITCHIE GUANCHELO", kehadiran: "🟢 - Hadir" },
    { no: "38", nama: "SHAWN HUBERT", kehadiran: "🟢 - Hadir" },
    { no: "39", nama: "SHEZA CHEN", kehadiran: "🔴 - Tidak Hadir" },
    { no: "40", nama: "VINCENT WESLEY", kehadiran: "🟢 - Hadir" },
    { no: "41", nama: "WILBERT YANG JAYA", kehadiran: "🟢 - Hadir" },
    { no: "42", nama: "WILSON MASLIE", kehadiran: "🟢 - Hadir" },
    { no: "43", nama: "YOHANES ZEFANYA WILLIEM", kehadiran: "🟢 - Hadir" },
    // tambahkan data kelas lainnya di sini
  ];
  // mencari data kelas dengan nomor kelas yang sesuai
  const data = dataKelas.find((d) => d.no === noKelas);
  if (data) {
    inputNama.value = data.nama;
    selectKehadiran.value = data.kehadiran;
  } else {
    inputNama.value = "";
    selectKehadiran.value = "";
  }
});
