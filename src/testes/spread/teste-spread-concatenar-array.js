const pessoas = ['Marta', 'Maria', 'João']

const concatenarArray = [...pessoas, 'Carlos']

 const resultado = [ 'Marta', 'Maria', 'João', 'Carlos' ]

 QUnit.module("teste-spread-concatenar-array", () => {
    QUnit.test("spread-concatenar-deepEqual", assert => {
       assert.deepEqual(concatenarArray,resultado);
    });
  });
  