// Importação da classe Conta
import { Conta } from "./Conta";

// Exportação da classe ContaPoupanca
// Esta classe estende a classe Conta e representa uma conta poupança
export class ContaPoupanca extends Conta {
  
    // Aniversario da conta poupança
    // Este atributo é específico para contas poupança e representa o dia do mês em que
    private _aniversario: number;

// Construtor da classe ContaPoupanca
// Recebe os parâmetros necessários para inicializar a conta poupança
// Chama o construtor da classe heranca Conta para inicializar os atributos comuns
  constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, aniversario: number) {
    super(numero, agencia, tipo, titular, saldo);
    this._aniversario = aniversario;
  }

  
  public visualizar(): void {
    super.visualizar();
    console.log(`Aniversário da Poupança: Dia ${this._aniversario}`);
  }
}
