if (typeof document.onselectstart!='undefined') {
    document.onselectstart=new Function ('return false');
}
else{
    document.onmousedown=new Function ('return false');
    document.onmouseup=new Function ('return true');
}

function formatRupiah(angka, prefix)
{
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split	= number_string.split(','),
        sisa 	= split[0].length % 3,
        rupiah 	= split[0].substr(0, sisa),
        ribuan 	= split[0].substr(sisa).match(/\d{3}/gi);
        
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }
    
    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

document.getElementById("nominal").addEventListener("keyup", function(event) {
    event.preventDefault();
    var nominal = document.getElementById("nominal").value;
    document.getElementById("nominal").value = formatRupiah(nominal, 'Rp. ');
});

var today = new Date();
var dd = today.getDate() + ' / ' + (today.getMonth() + 1) + ' / ' + today.getFullYear()
document.getElementById("tanggal").value = dd;

