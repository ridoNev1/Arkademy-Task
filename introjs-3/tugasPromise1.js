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

// const resultDay = async() => {
//     try {
//         const result = await hariKerja('minggu')
//         console.log(result)
//     } catch (error) {
//         console.log(`${error}`);
//     }
// }
// resultDay();


hariKerja('senin').then((response) => {
    console.log(response);//digunakan untuk menangani promise untuk kasus berhasil
}).catch((err) => {
    console.log(`${err}`);//metode penanganan promise yang hanya menangani kasus eror/ditolak
})