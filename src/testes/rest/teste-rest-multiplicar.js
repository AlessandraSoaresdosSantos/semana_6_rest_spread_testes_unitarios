const multiplicar = (multiplicador, ...multiplicados) => 
{
       return  multiplicados.map((numero) =>{
            return multiplicador * numero
        });
}

const resultado = [ 4, 8, 10, 12, 14, 16 ];

QUnit.module("teste-rest-multiplicar", () => {
    QUnit.test("rest-multiplicar-deepEqual", assert => {
       assert.deepEqual(multiplicar(2,2,4,5,6,7,8),resultado);
    });
  });