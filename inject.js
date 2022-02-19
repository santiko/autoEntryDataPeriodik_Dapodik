document.getElementsByName('tinggi_badan')[0].value=Math.floor((Math.random()*14)+150);
document.getElementsByName('berat_badan')[0].value=Math.floor((Math.random()*14)+65);
document.getElementsByName('lingkar_kepala')[0].value=Math.floor((Math.random()*10)+30);
document.getElementsByName('jarak_rumah_ke_sekolah_km')[0].value=Math.floor((Math.random()*10)+1);
document.getElementsByName('menit_tempuh_ke_sekolah')[0].value=Math.floor((Math.random()*10)+1);
document.getElementsByName('jumlah_saudara_kandung')[0].value=Math.floor((Math.random()*10)+1);

var simpan = document.getElementsByTagName('span');
for (var i in simpan){
	if(simpan[i].innerText === "Simpan"){
		simpan[i].click();
	}
}