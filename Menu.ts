// Banco Luminaire - Menu Principal

// Entrada do usuário
import ler = require("readline-sync");
import readline = require("readline-sync");

// Importação de módulos necessários
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";
import { colors } from "./src/util/Colors";

// Exibição do menu principal
// Este menu permite ao usuário interagir com o sistema bancário

 
// Teste conta 1
console.log("Contas Bancárias - Banco Luminaire");
const conta: Conta = new ContaCorrente(1, 123, 1, "Vitor", 16000, 0); // Usando uma conta concreta
conta.visualizar();
conta.sacar(10500);
conta.visualizar();
conta.depositar(5000);
conta.visualizar();

// Teste conta 2
console.log("\n=== TESTE CONTA CORRENTE ===");
const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Arana", 15800, 1000);
contacorrente.visualizar();
contacorrente.sacar(2000);
contacorrente.visualizar();
contacorrente.depositar(1000);
contacorrente.visualizar();

// Teste conta 3
console.log("\n=== TESTE CONTA POUPANÇA ===");
const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Denise", 1090, 10);
contapoupanca.visualizar();
contapoupanca.sacar(200);
contapoupanca.visualizar();
contapoupanca.depositar(1000);
contapoupanca.visualizar();


// Função principal que executa o menu
// Esta função é responsável por exibir o menu, capturar a opção do usuário
// e chamar as funções correspondentes para cada opção selecionada
// A função continua em loop até que o usuário escolha a opção de sair
// Após a saída, exibe informações sobre o desenvolvedor
// e agradece ao usuário por usar o sistema
function main() {
    
    // Instancia o controlador de contas
    const contas = new ContaController();

    // Variável para armazenar a opção escolhida pelo usuário
    // A opção é um número inteiro que representa a escolha do usuário
    let opcao: number, numero: number, agencia: number, tipo: number, saldo: number, limite: number, aniversario: number, numeroDestino: number, valor: number;
    let titular: string;
    const tiposContas = ["Conta Corrente", "Conta Poupança"];

// Loop infinito para manter o menu ativo até que o usuário escolha sair
// O loop continua solicitando a opção do usuário até que ele escolha a opção de sair
// Quando o usuário escolhe a opção de sair, o loop é interrompido
// e o programa exibe informações sobre o desenvolvedor e agradece ao usuário
while (true) {
    console.log(colors.bg.black, colors.fg.yellow);
    console.log("\n=== BANCO LUMINAIRE ===");
    console.log("1 - Criar Conta");
    console.log("2 - Listar Contas");
    console.log("3 - Buscar Conta");
    console.log("4 - Atualizar Conta");
    console.log("5 - Apagar Conta");
    console.log("6 - Sacar");
    console.log("7 - Depositar");
    console.log("8 - Transferir");
    console.log("9 - Sair");
    console.log(colors.reset);
    
       
       // Solicita ao usuário que escolha uma opção do menu
        opcao = ler.questionInt("Escolha uma opção: ");

        // Verifica se a opção escolhida é a de sair
        // Se o usuário escolher a opção 9, o loop é interrompido
        if (opcao === 9) {
            console.log("Obrigado por usar o Banco Luminaire!");
            sobre();
            break;
        }


        // Chama a função correspondente à opção escolhida pelo usuário
        // Cada opção do menu chama uma função específica para realizar a ação correspondente
        switch (opcao) {
            case 1:
                console.log("\n Criar Conta");

                agencia = readline.questionInt("Digite o Número da agência: ");
                titular = readline.question("Digite o Nome do Titular da conta: ");
                tipo = readline.keyInSelect(tiposContas, "", {cancel: false}) + 1;
                saldo = readline.questionFloat("Digite o Saldo da conta (R$): ");
                
                switch (tipo) {
                    case 1:
                        limite = readline.questionFloat("Digite o limite da Conta (R$): ");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        );
                        break;
                
                    case 2:
                        aniversario = readline.questionInt("Digite o Dia do aniversário da Conta Poupança: ");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }

                break;

            case 2:
                console.log("\n Listar todas as Contas\n");
                contas.listarTodas();
                break;

            case 3:
                console.log("\n Consultar dados da Conta - por número\n");
                numero = readline.questionInt("Digite o número da Conta: ");
                contas.procurarPorNumero(numero);

                break;
            
            case 4:
                console.log("\n Atualizar dados da Conta\n");

                numero = readline.questionInt("Digite o número da Conta: ");

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {
                    agencia = readline.questionInt("Digite o Número da Agência: ");
                    titular = readline.question("Digite o Nome do Titular da conta: ");
                    tipo = conta.tipo;

                    saldo = readline.questionFloat("\nDigite o Saldo da conta (R$): ");

                    switch (tipo) {
                        case 1:
                            limite = readline.questionFloat("Digite o limite da Conta (R$): ");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            );
                            break;
                    
                        case 2:
                            aniversario = readline.questionInt("Digite o Dia de aniversário da Conta Poupança: ");
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            );
                            break;
                    }
                } else {
                    console.log(`\nA Conta numero ${numero} não foi encontrada!`);
                }

                break;

            case 5:
                console.log("\n Apagar uma conta\n");

                numero = readline.questionInt("Digite o número da Conta: ");
                contas.deletar(numero);

                break;

            case 6:
                console.log("\n Saque\n");

                numero = readline.questionInt("Digite o número da Conta: ");
                valor = readline.questionFloat("\nDigite o valor do Saque (R$):");
                contas.sacar(numero, valor);

                break;

            case 7:
                console.log("\n Depósito\n");

                numero = readline.questionInt("Digite o número da Conta: ");
                valor = readline.questionFloat("Digite o valor do Depósito (R$): ");

                contas.depositar(numero, valor);

                break;

            case 8:
                console.log("\n Transferência entre Contas\n");

                numero = readline.questionInt("Digite o número da Conta de Origem: ");
                numeroDestino = readline.questionInt("Digite o número da Conta de Destino: ");
                valor = readline.questionFloat("\nDigite o valor do Depósito (R$): ");

                contas.transferir(numero, numeroDestino, valor);

                break;
            
            default:
                console.log("\n Opção Inválida\n");
                break;
        }

       
        
    }
   
}
// Função que exibe informações sobre o desenvolvedor
// Esta função é chamada quando o usuário escolhe a opção de sair do menu
function sobre() {
    console.log("\nDesenvolvido por Vitor Nazareth");
    console.log("Email: vitorzath@gmail.com");
    console.log("GitHub: github.com/aioryu");
}

main();
