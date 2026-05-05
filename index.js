// Programa de controle de estacionamento

const readline = require("readline");

// Interface para entrada de dados no console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let opcao;

// Função para exibir o menu
function mostrarMenu() {
  console.log("\nMenu");
  console.log("1 - Entrada");
  console.log("2 - Saída");
  console.log("3 - Sair do Sistema");
  rl.question("Escolha uma opção: ", (resposta) => {
    opcao = Number(resposta);

    switch (opcao) {
      case 1:
        // Incluir a função para registro de Entrada
        console.log("Registro de entrada");
        mostrarMenu();
        break;

      case 2:
        // Incluir a função para registro de Saída
        console.log("Registro de saída");
        mostrarMenu();
        break;

      case 3:
        console.log("Saindo do sistema...");
        rl.close();
        break;

      default:
        console.log("Opção inválida!");
        mostrarMenu();
        break;
    }
  });
}

// Início do programa
mostrarMenu();
