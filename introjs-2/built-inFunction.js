// // 1. split => digunakan untuk mengubah string menjadi array berdasarkan tanda pemisah yang digunakan
// const splitText = 'ini adalah kalimat yang akan di split berdasarkan pemisah spasi';
// const splitResult = splitText.split(' ', 5); // memisah kalimat berdasarkan spasi dan dilimit hingga panjang 9.
// console.log(splitResult);

// // 2. filter => membuat array baru dari array lama(isi array baru dapat kita sesuaikan dengan kondisi yang diinginkan).
// const textFilter = [1, 2, 3, 4, 5, 6, 7];
// const filterResult = textFilter.filter(e => e % 2 == 0);
// console.log(filterResult);

// // 3. push => digunakan untuk memasukan element baru ke dalam array
// const arrPush = ['john', 'jeremy', 'suzy'];
// arrPush.push('Rido Ganteng');
// console.log(arrPush);

// // 4. map => digunakan untuk melooping array(kita dapat melakukan operasi pada setiap hasil looping);
// const arrMap = [4, 7, 8, 9];
// const mapResult = arrMap.map(e => console.log(e % 2 == 0));

// // 5. sort => fungsi untuk mengurutkan 
// const sortText = ['jerome', 'awkarin', 'pevita', 'eriko lim'];
// sortText.sort();
// console.log(sortText);

// const sortText2 = [34, 7, 90, 24, 87];
// sortText2.sort((a, b) => b - a);
// console.log(sortText2);

// // 6. reduce => mereduce element array menjadi singgle value dengan cara menjumlahkannya.
// const arrReduce = [3, 6, 2, 8, 7, 9];
// const reduceResult = arrReduce.reduce((a, b) => a + b);
// console.log(reduceResult);

// 7. join => digunakan untuk menggabungkan array menjadi string
const arrJoin = ['nama', 'saya', 'budy'];
const joinResult = arrJoin.join(' ');
console.log(joinResult);

// 8. find => mirip seperti fungsi filter tapi find hanya mereturn satu element yang pertama ditemukan.
const arrFind = [5, 3, 6, 2, 7];
const findResult = arrFind.find(e => e > 5);
console.log(findResult);

//9. toFixed => biasa digunakan untuk fungsi pembulatan
const aFixed = 8.773;
 console.log(aFixed.toFixed());


// 10. toLowerCase & toUpperCase => mengkonversi string menjadi huruf besar atau kecil
const caseText = 'Aku Merasa Pusing';
console.log(caseText.toUpperCase());

