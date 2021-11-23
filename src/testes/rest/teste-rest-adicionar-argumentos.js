const adicionarArgumentos = (argumento, ...demaisArgumentos) =>({argumento, demaisArgumentos})

const expectativa = {
    argumento: 'DevInHouse',
    demaisArgumentos: [ 'Estudantes', 'Tecnologia', 'Brasil' ]
  };

let argumento = 'DevInHouse';
let demaisArgumentos = ['Estudantes', 'Tecnologia', 'Brasil'];
  
QUnit.module("teste-rest-adicionar-argumentos", () => {
    QUnit.test("rest-argumentos-deepEqual", assert => {
       assert.deepEqual(
           adicionarArgumentos(argumento, ...demaisArgumentos),expectativa);
    });
  });