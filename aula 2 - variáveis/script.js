// variáveeis
// tipos primitivos

// //boolear
// var vOuf = false
// console.log(typeof(vOuf));

// //number
// var numero = 2
// console.log(typeof(numero));

// // string
// var nome = 'joao vitor'
// console.log(typeof(nome));

// // function
// var funcao = function() {}
// console.log(typeof(funcao));

// // variaveis
// var variavel = "joao vitor"
// variavel = "Deby Lima"
// console.log(variavel);

// let variavel2 = "joao" 
// variavel2 = "vitor"
// console.log(variavel2);

// const constante = "bebela"
// console.log(constante);

var escopoGlobal = "global"
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalinterno = "local";
    console.log(escopoLocalinterno);
}
escopoLocal();
 