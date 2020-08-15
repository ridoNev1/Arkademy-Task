//no 3
function printTriangel(num) {
    if(isNaN(num)){
        console.log('input harus berupa angka');
    }else{
        for(let i = num; i >= 1; i--){
            let print = '';
            for(let e = 1; e <= i; e++){
                print += e;
            }
            console.log(print);
        }
    }
}
const a = 9;
printTriangel(a);