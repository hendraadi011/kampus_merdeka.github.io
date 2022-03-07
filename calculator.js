function myFocus1(){
    let frm = document.getElementById("formulir");
    frm.angkaSatu.value = "";
}
function myFocus2(){
    let frm = document.getElementById("formulir");
    frm.angkaDua.value = "";
}
function kosongAll(){
    let frm =document.getElementById("formulir");
    frm.angkaSatu.value = "";
    frm.angkaDua.value = "";
    frm.hasil.value = "";
}
function penjumlahan(){
    let frm = document.getElementById("formulir");
    let a1 = frm.angkaSatu.value;
    let a2 = frm.angkaDua.value; 
    let tambah = (parseInt(a1) + parseInt(a2));
    
    if(isNaN(a1) || a1 ==''){
        alert("isi data berupa angka");
    }
    else if(isNaN(a2) || a2 ==''){
        alert("isi data berupa angka");
    }
    else{
        frm.hasil.value = tambah;
    }
}
function pengurangan(){
    let frm = document.getElementById("formulir");
    let a1 = frm.angkaSatu.value;
    let a2 = frm.angkaDua.value; 
    let kurang = a1-a2;
    if(isNaN(a1) || a1 ==''){
        alert("isi data berupa angka");
    }
    else if(isNaN(a2) || a2 ==''){
        alert("isi data berupa angka");
    }
    else{
        frm.hasil.value = kurang;
    }
}
function perkalian(){
    let frm = document.getElementById("formulir");
    let a1 = frm.angkaSatu.value;
    let a2 = frm.angkaDua.value; 
    let kali = a1*a2;
    
    if(isNaN(a1) || a1 ==''){
        alert("isi data berupa angka");
    }
    else if(isNaN(a2) || a2 ==''){
        alert("isi data berupa angka");
    }
    else{
        frm.hasil.value = kali;
    }
}
function pembagian(){
    let frm = document.getElementById("formulir");
    let a1 = frm.angkaSatu.value;
    let a2 = frm.angkaDua.value; 
    let bagi = a1/a2;
   
    if(isNaN(a1) || a1 ==''){
        alert("isi data berupa angka");
    }
    else if(isNaN(a2) || a2 ==''){
        alert("isi data berupa angka");
    }
    else{
        frm.hasil.value = bagi;
    }
}
function perPangkatan(){
    let frm = document.getElementById("formulir");
    let a1 = frm.angkaSatu.value;
    let a2 = frm.angkaDua.value; 
    let pangkat =Math.pow(a1, a2);
    
    if(isNaN(a1) || a1 ==''){
        alert("isi data berupa angka");
    }
    else if(isNaN(a2) || a2 ==''){
        alert("isi data berupa angka");
    }
    else{
        frm.hasil.value = pangkat;
    }
}