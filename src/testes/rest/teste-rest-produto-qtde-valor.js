class Produto 
  {
    constructor(quantidade, valor){
        this._quantidade = quantidade
        this._valor = valor
    }
}

function totalProduto(...produtos){
    return produtos
            .map(produto => produto._quantidade * produto._valor)
            .reduce((a, b) => a+b, 0)
}

var produto1 = new Produto(10, 3.45);
var produto2 = new Produto(5, 2.87);
var produtos = [produto1, produto2];

QUnit.module("teste-rest-calcular-total-produtos", () => {
    QUnit.test("rest-calcular-total-produtos-equal", assert => {
        assert.deepEqual(totalProduto(...produtos), 48.85);
    });
  });

 



