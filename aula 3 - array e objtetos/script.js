// O que são vetores ou arrays

// como declarar um array
// let array = [ 'string', 1, true];
// console.log(array);

// pode guardar carios tipos de dados
let array = [ 'string' , 1, true, ['array1'],['array2'],['array3'],['array4']];
//console.log(array[3]);

// // forEach
// array.forEach(function(item, index) {console.log(item, index)});

// array.push('novo item');
// console.log(array);

// array.pop();
// console.log(array);

// array.shift();
// console.log(array);

// array.unshift('novo item no inicio');
// console.log(array);

// console.log(array.indexOf(true));

// array.slice(0,3);
// console.log(array);

// let novoarray = array.slice(0,3);
// console.log(novoarray);


////////////////////

// Objetos // 

let Object = { String: "string", number: '1', Boolean: true, array:['array'], ObjectInterno: {objectIntern:'objeto interno'}};

// console.log(Object);

// console.log(Object.objectInterno);

// var string = Object.string;
// console.log(string);

// var arrayInterno = Object.array;
// console.log(arrayInterno);

var {String, Boolean, ObjectInterno} = Object;
console.log(String, Boolean, ObjectInterno);