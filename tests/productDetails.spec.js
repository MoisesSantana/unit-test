/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {

    // Hamaji https://www.w3schools.com/jsref/jsref_isarray.asp - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

    assert.ok(Array.isArray(productDetails('Alcool gel', 'Máscara')));

    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);

    assert.strictEqual(typeof productDetails('Alcool gel', 'Máscara')[0, 1], 'object');

    assert.notStrictEqual(productDetails('Alcool gel', 'Máscara')[0], productDetails('Alcool gel', 'Máscara')[1]);

    assert.strictEqual((Object.values((productDetails('Alcool gel', 'Máscara')[0]).details).toString()).endsWith('123'), (Object.values((productDetails('Alcool gel', 'Máscara')[1]).details).toString()).endsWith('123'));

    // const teste = Object.values(productDetails().details)

    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
