//no 1

// proses data
//1. mengecek nilai dari beberapa peserta
//2. apabila nilai yang masuk tidak berbentuk array maka akan ter reject
//3. nilai diatas 75 dinyatakan lulus
//4. apabila semua data dalam array dinyatakan lulus( output : semua peserta lulus)
//5. apabila semua data dalam array dinyatakan tidak lulus (output : tidak ada peserta yang lulus)
//6. apabila hanya n peserta yang lulus maka ( output contoh : n orang peserta lulus  )
// cth input :[90, 74, 85, 100]

// const nilai = (scores) => {
//     let hasil = null;
//     if(!Array.isArray(scores)) {
//         hasil = false;
//     }else {
//         let scoreRes = scores.filter(e => e >= 75 && e <= 100);
//         if(scoreRes.length === 0) {
//             hasil = 'tidak ada peserta yang lulus';
//         }else if(scoreRes.length === scores.length) {
//             hasil = 'semua peserta lulus';
//         }else {
//             hasil = `${scoreRes.length} orang peserta lulus`;
//         }
//     }
//     return hasil;
// }

// //promise

// const cekNilai = (callback) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const result = callback([90, 80, 85, 100]); // apabila data yang masuk bukan array akan dianggap false. cth input :[90, 74, 85, 100]
//             if(result) {
//                 resolve(result);
//             }else {
//                 reject(new Error(' Data Request Error'))
//             }
//         }, 2000);
//     })
// }

// cekNilai(nilai).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(`${err}`);
// })



//no 2

const data = [
    {
        id : 1019,
        username : 'john-kick',
        password : 'newPass1'
        
    },
    {
        id : 1020,
        username : 'john-lord',
        password : 'newPass2'
        
    },
    {
        id : 1017,
        username : 'john-king',
        password : 'newPass3'
        
    }
]


const makeData = (params, idKey) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let findData = params.find((dataKey) => {
                return dataKey.id === idKey
            })
            if(findData) {
                resolve(findData)
            }else {
                reject(new Error('Data tidak ditemukan'))
            }
        }, 2000);
    })
}

const result = async() => {
    try {
        let dtr = await makeData(data, 1022);
        console.log(dtr);
    } catch (error) {
        console.log(`${error}`);
    }
}

result(makeData);