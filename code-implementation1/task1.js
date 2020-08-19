//soal 1
const cekPal = (text) => {
    let result = null;
    if(typeof text !== 'string') {
        result = 'Input bukan teks';
    }
    else {
        const revers = text.toLowerCase().split('').reverse().join('');
        if(text.toLowerCase() === revers) {
            result = 'Teks palindrom'
        }
        else {
            result = 'Bukan teks palindrom';
        }
    }
    return result;
}

console.log(cekPal('joni'));

//soal 2
const reverseText = (input) => {
    let result = null;
    if(typeof input !== 'string') {
        result = 'Input bukan teks';
    }
    else {
        result = input.split(' ').reverse().join(' ');
    }
    return result;
}

console.log(reverseText('saya belajar javascript'));