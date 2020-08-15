const lalaland = (status) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(status) {
                resolve('data berhasil diambil')
            }else {
                reject('err')
            }
        }, 3000)
    })
}

const doResult = async () => {
    try {
        const result = await lalaland(false);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

doResult();