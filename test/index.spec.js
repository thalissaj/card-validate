const chai = require("chai");
const cardValidatorLib = require("../index.js");
const cardValidator = cardValidatorLib.cardValidator;
const expect = chai.expect;

describe("cardValidator()", function (){
  it("Deve retornar true", () => {
    expect(cardValidator(4083952015263)).to.equal(true);
  })
  it("Deve retornar false", () => {
    expect(cardValidator(82736514293876)).to.equal(false);
  })
  it("Deve retornar Error", () => {
    expect(cardValidator("82736514293876")).to.equal("O numero digitado não é valido!");
  })
  it("Deve retornar Error", () => {
    expect(cardValidator(281828)).to.equal("O numero digitado não condiz a um numero de cartão.");
  })
})
