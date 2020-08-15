const getMonth = (callback) => {
    setTimeout(() => {
        let err = false;
        let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        if(!err) {
            callback(null, month);
        }else {
            callback(new Error('sorry data not found'), [])
        }
    }, 4000);
}

resultData = (errMsg, month) => {
    if(!errMsg) {
        month.map(e => console.log(e))
    }else {
    console.log(`${errMsg}`);
    }
}

getMonth(resultData);

// nilai true => parameter kedua
// false => parameter satu