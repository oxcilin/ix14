// Data uang kas
var dataUangKas = [
  { kelas: "1", jumlah: 357000, terbayar: 368000 },
  { kelas: "2", jumlah: 357000, terbayar: 412000 },
  { kelas: "3", jumlah: 357000, terbayar: 360000 },
  { kelas: "5", jumlah: 357000, terbayar: 361000 },
  { kelas: "6", jumlah: 357000, terbayar: 369000 },
  { kelas: "7", jumlah: 357000, terbayar: 387000 },
  { kelas: "8", jumlah: 357000, terbayar: 375000 },
  { kelas: "9", jumlah: 357000, terbayar: 384000 },
  { kelas: "10", jumlah: 357000, terbayar: 357000 },
  { kelas: "11", jumlah: 357000, terbayar: 360000 },
  { kelas: "12", jumlah: 357000, terbayar: 357000 }, // { kelas:"12 ", jumlah: 357000,terbayar: 360000 }
  { kelas: "13", jumlah: 357000, terbayar: 360000 },
  { kelas: "14", jumlah: 357000, terbayar: 360000 },
  { kelas: "15", jumlah: 357000, terbayar: 378000 },
  { kelas: "16", jumlah: 357000, terbayar: 405000 },
  { kelas: "17", jumlah: 357000, terbayar: 357000 },
  { kelas: "18", jumlah: 357000, terbayar: 426000 },
  { kelas: "19", jumlah: 357000, terbayar: 357000 },
  { kelas: "20", jumlah: 357000, terbayar: 359000 },
  { kelas: "21", jumlah: 357000, terbayar: 357000 }, // { kelas: "21", jumlah: 357000, terbayar: 337000 },
  { kelas: "22", jumlah: 357000, terbayar: 360000 },
  { kelas: "23", jumlah: 357000, terbayar: 428000 },
  { kelas: "24", jumlah: 357000, terbayar: 357000 },
  { kelas: "25", jumlah: 357000, terbayar: 357000 }, // HARVANY DAH LUNAS
  { kelas: "26", jumlah: 357000, terbayar: 419000 },
  { kelas: "27", jumlah: 357000, terbayar: 373500 },
  { kelas: "28", jumlah: 357000, terbayar: 357000 },
  { kelas: "29", jumlah: 357000, terbayar: 357000 },
  { kelas: "30", jumlah: 357000, terbayar: 357000 }, // { kelas:"30 ", jumlah: 357000,terbayar: 356000 }
  { kelas: "31", jumlah: 357000, terbayar: 357000 }, // { kelas: "31", jumlah: 357000, terbayar: 364000 },
  { kelas: "32", jumlah: 357000, terbayar: 374000 },
  { kelas: "33", jumlah: 357000, terbayar: 357000 },
  { kelas: "34", jumlah: 357000, terbayar: 357000 },
  { kelas: "35", jumlah: 357000, terbayar: 368000 },
  { kelas: "36", jumlah: 357000, terbayar: 485000 },
  { kelas: "37", jumlah: 357000, terbayar: 368000 },
  { kelas: "38", jumlah: 357000, terbayar: 357000 }, // { kelas: "38", jumlah: 357000, terbayar: 334000 },
  { kelas: "39", jumlah: 357000, terbayar: 360000 },
  { kelas: "40", jumlah: 357000, terbayar: 372000 },
  { kelas: "41", jumlah: 357000, terbayar: 366000 },
  { kelas: "42", jumlah: 357000, terbayar: 363000 },
  { kelas: "43", jumlah: 357000, terbayar: 357000 }, // { kelas: "43", jumlah: 357000, terbayar: 333000 },
  { kelas: "12345", jumlah: 357000, terbayar: 0 },
];

// Function untuk mencari data uang kas berdasarkan nomor kelas
function cariDataUangKas(kelas) {
  for (var i = 0; i < dataUangKas.length; i++) {
    if (dataUangKas[i].kelas === kelas) {
      return dataUangKas[i];
    }
  }
  return null;
}

// Function untuk menampilkan popup rincian yang belum bayar
function tampilkanPopupRincian(kelas) {
  var data = cariDataUangKas(kelas);
  if (data !== null && data.terbayar < data.jumlah) {
    alert(
      "Anda belum membayar uang kas sebesar Rp " +
        numberWithCommas(data.jumlah - data.terbayar)
    );
  } else {
    alert("Anda sudah membayar uang kas semua.");
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Function untuk menangani submit form
function handleSubmit(event) {
  event.preventDefault();
  var inputKelas = document.getElementById("input-kelas").value;
  var data = cariDataUangKas(inputKelas);
  var warning = document.getElementById("warning");
  if (data === null) {
    warning.innerHTML =
      "<i>Oops, no kelas tidak ditemukan. Jika menu ini tidak berfungsi, silahkan hubungi bendahara.</i>";
  } else if (data.terbayar < data.jumlah) {
    warning.innerHTML =
      "<i>Kamu belum melunasi uang kas/uang dll, Harap menekan tombol dibawah agar mengetahui total yang harus dilunasi.</i>";

    var warningDiv = document.createElement("div");
    warningDiv.style.display = "flex";
    warningDiv.style.flexDirection = "column";
    warning.appendChild(warningDiv);

    var btnRincian = document.createElement("button");
    btnRincian.innerHTML = "TOTAL YANG HARUS DILUNASI";
    btnRincian.classList.add("btn", "btn-primary");
    btnRincian.addEventListener("click", function () {
      tampilkanPopupRincian(inputKelas);
    });
    warningDiv.appendChild(btnRincian);
  } else {
    warning.innerHTML = "Bagus, kamu sudah melunasi semua uang kas/uang dll.";
  }
}
