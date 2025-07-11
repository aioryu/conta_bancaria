export abstract class Conta {
  protected _numero: number;
  protected _agencia: number;
  protected _tipo: number;
  protected _titular: string;
  protected _saldo: number;

  constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
  }

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

  public sacar(valor: number): boolean {
    if (this._saldo < valor) {
      console.log("Saldo insuficiente!");
      return false;
    }
    this._saldo -= valor;
    return true;
  }

  public depositar(valor: number): void {
    this._saldo += valor;
  }

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
