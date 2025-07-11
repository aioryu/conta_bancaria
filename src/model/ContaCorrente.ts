//Importação da classe Conta
import { Conta } from "./Conta";

//Importação da classe ContaCorrente
export class ContaCorrente extends Conta {
  
// Atributo específico da Conta Corrente
  // Limite de crédito da conta corrente  
    private _limite: number;


    // Construtor da classe ContaCorrente
  // Recebe os parâmetros necessários para inicializar a conta corrente
  // Chama o construtor da classe heranca Conta para inicializar os atributos comuns
  constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
    super(numero, agencia, tipo, titular, saldo);
    this._limite = limite;
  }

// Método para obter o limite da conta corrente
// Retorna o valor do limite
// Acesso público para permitir que outras classes acessem o limite
    public sacar(valor: number): boolean {
    if (valor > (this._saldo + this._limite)) {
      console.log("\nSaldo + Limite insuficientes!");
      return false;
    }
    this._saldo -= valor;
    return true;
  }

  // Método para obter o limite da conta corrente
  // Retorna o valor do limite
  public visualizar(): void {
    super.visualizar();
    console.log(`Limite: R$ ${this._limite.toFixed(2)}`);
  }
}
