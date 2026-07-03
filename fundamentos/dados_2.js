//var ou let da no mesmo são tudo variavel//

console.log(19.9 * 0.6) //calculei (0.6= 60%) porque (0.4= 40%) de desconto 60% é oque sobrou do valor sem desconto//

let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

let nome = "Caderno"; //String (Texto) -> sequencia de simbolos//
let categoria = "Papelaria";
console.log("Produto: " + nome
    + ",Categoria:"
    + categoria
    + "Preço:" + preco
    + "Desconto:" + desconto);

    console.log(1 + 1);
    console.log("1" + 1) // vai dar 11 por conta das ""//