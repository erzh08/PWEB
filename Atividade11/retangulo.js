/* Parte do retangulo */
class Retangulo {
    constructor(x, y) {
        this.base = x;
        this.altura = y;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

/* Parte das contas */
function Conta() {
    var nomeCorrentista;
    var banco;
    var numeroConta;
    var saldo;
    
    this.setNomeCorrentista = function(nome) {
        this.nomeCorrentista = nome;
    }

    this.getNomeCorrentista = function() {
        return this.nomeCorrentista;
    }

    this.setBanco = function(banco) {
        this.banco = banco;
    }

    this.getBanco = function() {
        return this.banco;
    }

    this.setNumConta = function(numero) {
        this.numeroConta = numero;
    }

    this.getNumConta = function() {
        return this.numeroConta;
    }

    this.setSaldo = function(saldo) {
        this.saldo = saldo;
    }

    this.getSaldo = function() {
        return this.saldo;
    }
}

function Corrente() {
    var saldoEspecial;

    this.setSaldoEspecial = function(saldo) {
        this.saldoEspecial = saldo;
    }

    this.getSaldoEspecial = function() {
        return this.saldoEspecial;
    }
}

function Poupanca() {
    var juros;
    var dataVencimento;

    this.setJuros = function(juros) {
        this.juros = juros;
    }

    this.getJuros = function() {
        return this.juros;
    }

    this.setDataVencimento = function(data) {
        this.dataVencimento = data;
    }

    this.getDataVencimento = function() {
        return this.dataVencimento;
    }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();


window.onload = () => {
    let ret = new Retangulo(10, 20);
    alert("Area: " + ret.calcularArea());

    let corrente = new Corrente();
    corrente.setSaldoEspecial(500);
    corrente.setNomeCorrentista("Arlindo");
    corrente.setBanco("Ibau");
    corrente.setNumConta(12);
    corrente.setSaldo(2000);
    alert("Saldo especial: R$" + corrente.getSaldoEspecial() + "\n" +
    "Nome Correntista: " + corrente.getNomeCorrentista() + "\n" +
    "Banco: " + corrente.getBanco() + "\n" +
    "Numero Conta: " + corrente.getNumConta() + "\n" +
    "Saldo: R$" + corrente.getSaldo());

    let poupanca = new Poupanca();
    poupanca.setJuros(5);
    poupanca.setDataVencimento("10/12/2026");
    poupanca.setNomeCorrentista("Josefina");
    poupanca.setBanco("Caixas");
    poupanca.setNumConta(342);
    poupanca.setSaldo(3500);
    alert("Juros: " + poupanca.getJuros() + "%\n" +
    "Data Vencimento: " + poupanca.getDataVencimento() + "\n" +
    "Nome Correntista: " + poupanca.getNomeCorrentista() + "\n" +
    "Banco: " + poupanca.getBanco() + "\n" +
    "Numero Conta: " + poupanca.getNumConta() + "\n" +
    "Saldo: R$" + poupanca.getSaldo());
}