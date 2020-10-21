/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 2]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const loopOfIndex = (arrTest) => {
  let result = 0;
  for (let index = 0; index < arrTest.length; index += 1) {
    if (typeof arrTest[index] !== 'number') {
      return undefined;
    }
    result += arrTest[index];
  }
  return Math.round(result / arrTest.length);
};

const average = (arrTest) => {
  if (!arrTest.length) {
    return undefined;
  }
  return loopOfIndex(arrTest);
};

module.exports = average;
