// // no 4
let data = {
    id : 1,
    name : 'Leanne Graham',
    username : 'Breet',
    email : 'sincere@april.biz',
    adress : {
        street : 'Kulas Light',
        suite : 'Apt.556',
        city : 'Gwenborought',
        zipcode : '92998-3874',
    },
    phone : '1-770-736-8031 x56442',
    website : 'hildegard.org'
}

const editData = {...data, name: 'Rido Maulana Solihin', email: 'ridolaurent021123@gmail.com', hobby: 'berenang, belajar'};
console.log(editData);
const { adress } = data;
const {street, city} = adress;
console.log(street);
console.log(city);

