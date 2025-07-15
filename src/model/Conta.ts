//Exportar a classe Conta como abstrata
// A classe Conta é uma classe base que não pode ser instanciada diretamente
// Ela serve como modelo para outras classes que herdam dela, como ContaCorrente e Conta
export abstract class Conta {
  
  // Atributos protegidos que podem ser acessados pelas classes filhas
  // Esses atributos representam as informações básicas de uma conta bancária
  protected _numero: number;
  protected _agencia: number;
  protected _tipo: number;
  protected _titular: string;
  protected _saldo: number;


  // Construtor da classe Conta
  // Recebe os parâmetros necessários para inicializar a conta
  // Inicializa os atributos da classe com os valores fornecidos
  constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
  }

  // Métodos getters para acessar os atributos da classe
  // Esses métodos permitem que outras classes acessem os valores dos atributos
  // Eles são públicos para que possam ser chamados de fora da classe
  // Retornam os valores dos atributos correspondentes
  public get numero() {
    return this._numero;
  }

  public get agencia() {
    return this._agencia;
  }

  public get tipo() {
    return this._tipo;
  }

  public get titular() {
    return this._titular;
  }

  public get saldo() {
    return this._saldo;
  }

  // Métodos abstratos que devem ser implementados pelas classes filhas
  // Esses métodos definem a assinatura que as classes filhas devem seguir
  // Eles não têm implementação na classe base, mas devem ser implementados nas classes derivadas

  public sacar(valor: number): boolean {
    if (this._saldo < valor) {
      console.log("Saldo insuficiente!");
      return false;
    }
    this._saldo -= valor;
    return true;
  }

  // Método para depositar um valor na conta
  // Adiciona o valor ao saldo da conta
  public depositar(valor: number): void {
    this._saldo += valor;
  }

  // Método para visualizar os dados da conta
  // Exibe as informações da conta, como número, agência, tipo, titular e saldo
  public visualizar(): void {
    let tipoConta = this._tipo === 1 ? "Conta Corrente" : "Conta Poupança";
    console.log("\n=== DADOS DA CONTA ===");
    console.log(`Número: ${this._numero}`);
    console.log(`Agência: ${this._agencia}`);
    console.log(`Tipo: ${tipoConta}`);
    console.log(`Titular: ${this._titular}`);
    console.log(`Saldo: R$ ${this._saldo.toFixed(2)}`);
  }
}
