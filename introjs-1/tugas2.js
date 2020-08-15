//tugas no 2
const mtk = 90;
const bahasaIndonesia = 79;
const bahasaInggris = 90;
const ipa = 90;

function cekNilai(nilai1, nilai2, nilai3, nilai4){
    let grade = null;
    let result = null;

    if(!nilai1 || !nilai2 || !nilai3 || !nilai4) {
        result = 'nilai tidak boleh kosong';
    }else {
        const rataNilai = (nilai1 + nilai2 + nilai3 + nilai4) / 4;
        if(rataNilai >= 0 && rataNilai <= 59) {
            grade ='E';
        }else if(rataNilai > 59 && rataNilai <= 69) {
            grade ='D';
        }else if(rataNilai > 69 && rataNilai <= 79) {
            grade = 'C';
        }else if(rataNilai > 79 && rataNilai <= 89) {
            grade = 'B';
        }else if(rataNilai > 89 && rataNilai <= 100) {
            grade = 'A';
        }
    result = `rata-rata nilai: ${rataNilai}
    grade: ${grade}`;
    }
    return result;
}
console.log(cekNilai(mtk, bahasaIndonesia, bahasaInggris, ipa));
