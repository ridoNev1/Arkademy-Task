const hariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek) {
                resolve(cek)
            }else {
                reject(new Error('hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

const resultDay = async() => {
    try {
        const result = await hariKerja('senin')
        console.log(result)
    } catch (error) {
        console.log(`${error}`);
    }
}
resultDay();


// hariKerja('senin').then((response) => {
//     console.log(response);
// }).catch((err) => {
//     console.log(`${err}`);
// })