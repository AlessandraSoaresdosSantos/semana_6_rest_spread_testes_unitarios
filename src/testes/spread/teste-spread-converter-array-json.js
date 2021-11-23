const array = ['Patricia Lima', 'Estudante', 'Informática']

const arrayToJson = {...array}

const expectativa = { '0': 'Patricia Lima', '1': 'Estudante', '2': 'Informática' };

QUnit.module("teste-spread-array-json", () => {
    QUnit.test("spread-array-json-deepEqual", assert => {
       assert.deepEqual(arrayToJson, expectativa);
    });
  });