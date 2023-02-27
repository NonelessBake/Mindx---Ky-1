// BT1
function giaCuoc (thoiGian){
    let phiMacDinh = 25000; //Phi cuoc mac dinh
    let phiMucMot = 600; //50 phut dau tien
    let phiMucHai = 400; //Sau 50 phut den 200 phut
    let phiMucBa = 200; //Sau 200 phut
    for (i=0;i<=thoiGian;i++){
        if(thoiGian<=50){
            giaCuocMot = phiMacDinh + thoiGian*phiMucMot;
            console.log(`Gia cuoc cho ${thoiGian} phut la: ${giaCuocMot} VND`);
        }
        else if(thoiGian <=200){
            giaCuocHai = phiMacDinh + phiMucMot*50 + (thoiGian-50)*phiMucHai;
            console.log(`Gia cuoc cho ${thoiGian} phut la: ${giaCuocHai} VND`);
        }
        else{
            giaCuocBa = phiMacDinh + phiMucMot*50 + phiMucHai*150 + (thoiGian-200)*phiMucBa;
            console.log(`Gia cuoc cho ${thoiGian} phut la: ${giaCuocBa} VND`);
        }
    }
}
giaCuoc (50);
giaCuoc (200);
giaCuoc (201);

// BT2
function sumChan (number){
    let sum = 0;
    for (i=1;i<=number;i++) {
        if (i%2===0) {
            sum+=i;
            console.log(`Khi i = ${i} thi tong = ${sum}`); //Code nay chi de check
        }
    }
    console.log(`Tong cac so chan tu 1 den ${number} bang: ${sum}`);
}
sumChan (15);
