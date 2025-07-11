import { Conta } from "../model/Conta";

export interface ContaRepository {
  procurarPorNumero(numero: number): Conta | undefined;
  listarTodas(): Conta[];
  cadastrar(conta: Conta): void;
  atualizar(conta: Conta): void;
  deletar(numero: number): void;
}
