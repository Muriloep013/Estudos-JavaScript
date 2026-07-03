const escola = "Cod3r"

console.log(escola.charAt(4));//.charAt vai me dar a letra no indice do numero que eu colocar no () eu coloquei 4 ou seja me deu "r" que é a 4 letra//
console.log(escola.charAt(5));//não tem (5), por isso nao aparece nada//
console.log(escola.charCodeAt(3));//o valor de 3 na tabela uniCode é 51//
console.log(escola.indexOf('3'));

console.log(escola.substring(1));//printa tudo menos o 1 "C"//
console.log(escola.substring(0, 3));//vai até o 3 só que sem incluir//

console.log('Escola '.concat(escola).concat("!"));//o .concat ele junta os conteudos//
console.log(escola.replace(3, 'e')) ;

console.log("Ana,Maria,Pedro".split(','));//o .split serve pra ir separando//