// Banco Luminaire - Menu Principal

// Entrada do usuário
import ler = require("readline-sync");

// Importação de módulos necessários
import { Conta } from "./src/model/Conta";


function main() {
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

        opcao = ler.questionInt("Escolha uma opção: ");

        if (opcao === 9) {
            console.log("Obrigado por usar o Banco Luminaire!");
            sobre();
            break;
        }

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

        //  TESTES COM OBJETOS CONTA 
        console.log("\n==== TESTES COM CONTAS ====");

        const conta1 = new Conta(1, 101, 1, "Vitor", 1000);
        const conta2 = new Conta(2, 102, 2, "Maria", 500);

        console.log("\nConta 1 - Inicial");
        conta1.visualizar();

        console.log("\nConta 2 - Inicial");
        conta2.visualizar();

        console.log("\n>> Depositando R$ 200 na Conta 1");
        conta1.depositar(200);
        conta1.visualizar();

        console.log("\n>> Sacando R$ 100 da Conta 2");
        conta2.sacar(100);
        conta2.visualizar();

        console.log("\n>> Tentando sacar R$ 1000 da Conta 2 (saldo insuficiente)");
        conta2.sacar(1000);
        conta2.visualizar();

        break; // 
        
    }
}

function sobre() {
    console.log("\nDesenvolvido por Vitor Nazareth");
    console.log("Email: vitorzath@gmail.com");
    console.log("GitHub: github.com/aioryu");
}

main();
