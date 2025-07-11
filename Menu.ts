// Banco Luminaire - Menu Principal

// Entrada do usuário
import ler = require("readline-sync");

// Importação de módulos necessários
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";


// Exibição do menu principal
// Este menu permite ao usuário interagir com o sistema bancário
// e realizar operações como criar, listar, buscar, atualizar e apagar contas,
 
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
    
    // Variável para armazenar a opção escolhida pelo usuário
    // A opção é um número inteiro que representa a escolha do usuário
    let opcao: number;

    // Loop infinito para manter o menu ativo até que o usuário escolha sair
    // O loop continua solicitando a opção do usuário até que ele escolha a opção de sair
    // Quando o usuário escolhe a opção de sair, o loop é interrompido
    // e o programa exibe informações sobre o desenvolvedor e agradece ao usuário
    while (true) {
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
                console.log("Criar Conta");
                break;
            case 2:
                console.log("Listar Contas");
                break;
            case 3:
                console.log("Buscar Conta");
                break;
            case 4:
                console.log("Atualizar Conta");
                break;
            case 5:
                console.log("Apagar Conta");
                break;
            case 6:
                console.log("Saque");
                break;
            case 7:
                console.log("Depósito");
                break;
            case 8:
                console.log("Transferência");
                break;
            default:
                console.log("Opção inválida.");
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
