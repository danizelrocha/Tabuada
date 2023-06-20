/*
Tabuada depois criar o Html e Css

multiplicador de números x número = resultado
multiplicador x 0 = resultado
multiplicador x 1 = resultado
multiplicador x 2 = resultado
multiplicador x 3 = resultado
multiplicador x 4 = resultado
multiplicador x 5 = resultado
multiplicador x 6 = resultado
multiplicador x 7 = resultado
multiplicador x 8 = resultado
multiplicador x 9 = resultado
multiplicador x 10 = resultado

Com apenas um console.log(multiplicador x n° = resultado)
 */

const multiplicador = 7; // 7 representa o número que se pede.

//let i = 0
//Retonar até 10 valor pedido.
// Ele add +1 no final do código ele daa + 1 = 1 + 1 = 2 exemplo.
for(let i = 0; i <= 100; i++) {
    const calc = multiplicador * i;
    console.log(`${multiplicador} x ${i} = ${calc}`);
}