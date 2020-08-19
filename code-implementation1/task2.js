const divSort = (input) => {
    let result = null;
    if(typeof input !== 'number'){
        result = 'Input bukan angka'
    }else {
        const stDiv = input.toString().split('0');
        const sort = stDiv.map(e => e.split('').sort().join(''));
        result = parseInt(sort.join(''));
    }
    return result;
}

console.log(divSort(842838102345974));
