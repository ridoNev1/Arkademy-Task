function cekNumber(nilaiAwal, nilaiAkhir, dataArray) {
    let result = null;
    if(nilaiAwal > nilaiAkhir){
        result = 'Nilai akhir harus lebih besar dari nilai awal';
    }else {
        if(dataArray.length < 5){
            result = 'Data array harus lebih dari 5';
        }else {
            let filterArr = dataArray.filter(e => {
               return e > nilaiAwal && e < nilaiAkhir; 
            })
            if(filterArr.length == 0) {
                result = 'Jumlah angka dalam array tida ada';
            }else {
                result = filterArr.sort((a, b) => a - b);
            }
        }
    }
    return result;
}

console.log(cekNumber(2, 20, [7, 17, 18, 9, 10, 21])); 