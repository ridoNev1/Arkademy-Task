const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

const findItem = (key, limit, callback) => {
    const arrFilter = name.filter((e) => e.toLowerCase().includes(key.toLowerCase()));
    let arrResult = [];
    for(let i = 0; i <= arrFilter.length-1; i++){
        if((i+1) <= limit){
            arrResult.push(arrFilter[i]);
        }
    }
    callback(arrResult);
}

const result = (result) => {
    console.log(result);
}

findItem('an', 5, result);