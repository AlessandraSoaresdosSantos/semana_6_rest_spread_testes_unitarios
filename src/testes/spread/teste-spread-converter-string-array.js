const frase = "Alunos DevInHouse";

let stringToArray = [...frase];

const resultado = [
    'A', 'l', 'u', 'n', 'o',
    's', ' ', 'D', 'e', 'v',
    'I', 'n', 'H', 'o', 'u',
    's', 'e'
  ];

  QUnit.module("teste-spread-string-array", () => {
    QUnit.test("spread-string-array-deepEqual", assert => {
       assert.deepEqual(stringToArray,resultado);
    });
  });
  


 