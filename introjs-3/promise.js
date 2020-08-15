const data = new Promise ((resolve, reject) => {
    setTimeout(() => {
        const status = true;
        if(status){
            resolve('got it')
        }else {
            reject('err')
        }
    }, 3000);
})

data.then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
})