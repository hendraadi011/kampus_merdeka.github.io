class Gempa{
    constructor(lokasi, skala){
        this.lock = lokasi;
        this.skl = skala;
    }

    dampak(dmp){
        if(this.skl == 1 || this.skl <= 2) dmp = 'dampak tidak terasa';
        else if(this.skl == 3 || this.skl<= 4) dmp  = 'bangunan retak';
        else if(this.skl == 5 ||this.skl <=6) dmp = 'bangunan roboh';
        else if(this.skl >= 6) dmp = 'bangunan roboh dan berpotensi terjadinya sunami';
        else dmp ='tidak terjadi gempa';
        
        
        let table =  ` <tr>
                    <td>${this.lock}</td>
                    <td class="skala">${this.skl}</td>
                    <td class="dampak">${dmp}</td>
                    </tr>` 
         document.getElementById('brs').innerHTML += table;

       
    }
 

    
 }
 let  gempa = {
    'Osaka-Jepang' : 4,
    'Daerah Noto di Prefektur Ishikawa' : 7,
    '230 km BaratLaut MALUKUTENGGARABRT': 5,
    '67 km Tenggara TAHUNA-KEP.SANGIHE-SULUT': 5,
    '67 km TimurLaut SABURAIJUA-NTT': 5,
    '86 km TimurLaut MALUKUBRTDAYA' : 6,
    '82 km BaratDaya CALANG-ACEHJAYA' : 4,
    '71 km BaratDaya SARMI-PAPUA' : 3,
    'Lepas Pantai Prefektur Miyagi' : 1,
    'Laut Hyuganada' : 2,
 }
 
 for(let gm of Object.keys(gempa)){
    
    
     let gmp = new Gempa(gm, gempa[gm])
     gmp.dampak();
 }
 

 