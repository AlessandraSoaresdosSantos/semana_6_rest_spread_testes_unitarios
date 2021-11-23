const informacaoPessoal = (nome, sobrenome, ...infoAdicional) =>
     (`${nome} ${sobrenome} - ${infoAdicional}`)

 
const expectativa = 'Maria Silva - estudante,graduada'
   
QUnit.module("teste-rest-informacao-pessoal", () => {
    QUnit.test("rest-informacao-pessoal-equal", assert => {
       assert.equal(informacaoPessoal('Maria', 'Silva', 'estudante', 'graduada'), expectativa);
    });
  });
  