const nama_lengkap = document.getElementById('nama_lengkap');
const nomor_induk = document.getElementById('nomor_induk');
const tanggal = document.getElementById('tanggal');
const id = document.getElementById('id');
const nominal = document.getElementById('nominal');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (nama_lengkap.value === '') {
        messages.push('ERR: Data “Nama Lengkap” wajib diisi!')
    }
    if (nomor_induk.value === '') {
        messages.push('ERR: Data “Nomor Induk” wajib diisi!');
    }
    if (tanggal.value === '') {
        messages.push('ERR: Data “Tanggal” wajib diisi!');
    }
    if (id.value === '') {
        messages.push('ERR: Data “ID” wajib diisi!');
    }
    if (nominal.value === '') {
        messages.push('ERR: Data “Nominal” wajib diisi!');
    }

    if (nomor_induk.value.length <= 4) {
        messages.push('ERR: Nomor induk tidak boleh kurang dari 5 digit!');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(' \n ');
    }
})

