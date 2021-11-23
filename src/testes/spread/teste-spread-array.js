const array_nomes = ['Sofia', 'Marcos', 'Pedro'];
const spread_array_nomes =  ['Elisa', ...array_nomes, 'Carlos'];
   
const resultado = ['Elisa', 'Sofia', 'Marcos', 'Pedro', 'Carlos'];
   
 QUnit.module("teste-spread-array-nomes", () => {
     QUnit.test("spread-array-nomes-deepEqual", assert => {
        assert.deepEqual(spread_array_nomes,resultado);
     });
   });
   