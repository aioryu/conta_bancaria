// Banco Luminaire - Menu Principal


// Entrada do usuário
import ler = require("readline-sync");


// Função principal que exibe o menu e processa as opções
function main() {
    
    // Funcão para exibir o menu e capturar a opção do usuário
    let opcao: number;

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

        // Captura a opção do usuário
        opcao = ler.questionInt("Escolha uma opção: ");

        // Verifica se a opção é 9 para sair do menu
        if (opcao === 9) {
            console.log("Obrigado por usar o Banco Luminaire!");
            sobre();
            break;
        }

        // Processa a opção escolhida
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

// Função para exibir informações sobre o desenvolvedor
function sobre() {
    console.log("\nDesenvolvido por Vitor Nazareth");
    console.log("Email: vitorzath@gmail.com");
    console.log("GitHub: github.com/aioryu");
}

main();
