// // 01) Maior de Idade

let idade1 = 20;

if(idade >=18){
    console.log("Você é maior de idade!")
}else{
    console.log("Você é menor de idade!")
}

// 02) Número, positivo, negativo e zero

let numero2 = -15;
let numeroDois = 153;
let numeroTres = 0;

function verificarSinal(num) {
    if (num > 0) {
        console.log(`${num} é positivo.`);
    } else if (num < 0) {
        console.log(`${num} é negativo.`);
    } else {
        console.log(`${num} é zero.`);
    }
}

// // 03) Par ou Ímpar

let numero = 23;

if (numero % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}

// // 04) Maior entre dois números

let a = 35;
let b = 42;

    if (num1 > num2) {
        console.log(`Entre ${num1} e ${num2}, o maior número é: ${num1}`);
    } else if (num2 > num1) 
        console.log(`Entre ${num1} e ${num2}, o maior número é: ${num2}`);

// // 05)  Entrada de evento 

let idade2 = 20;
let ingressoValido = true;

if (idade >= 18 && ingressoValido) {
    console.log("Entrada autorizada");
} else {
    console.log("Entrada negada");
}

// // 06)  Desconto Vip

let valorCOMPRA = 150;
let clienteVIPP = true;
let Desconto = 0;

if (valorCompra >= 200 || clienteVIP) {
    desconto = valorCompra * 0.20;
}

let valorFinal = valorCompra - desconto;

console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);

// // 07)  Faixa de Temperatura

let temperatura = 85;

if (temperatura < 40) {
    console.log("Baixa");
} else if (temperatura <= 80) {
    console.log("Normal");
} else {
    console.log("aquecimento");
}

// // 08)  Aprovação escolar 

let nota1 = 8;
let frequencia1 = 80;

if (nota >= 7 && frequencia1 >= 75) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// // 09) Classificação por idade

let IDADE = 17;

if (idade < 0) {
    console.log("Idade inválida");
} else if (idade <= 12) {
    console.log("Criança");
} else if (idade <= 17) {
    console.log("Adolescente");
} else if (idade <= 59) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

// // 10) Acesso para Laboratório

let horario = 19;
let autorizado = true;

if (autorizado && horario >= 8 && horario <= 18) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

// // 11) Empréstimo Bancário

let renda = 4500;
let possuiRestricao = false;

if (renda >= 3000 && !possuiRestricao) {
    console.log("Empréstimo aprovado");
} else {
    console.log("Empréstimo negado");
}

// // 12) Frete Grátis

let totalCompra = 180;
let cupomFrete = true;
let frete = 25;

if (totalCompra >= 250 || cupomFrete) {
    frete = 0;
}

let totalPagar = totalCompra + frete;

console.log(`Total a pagar: R$ ${totalPagar.toFixed(2)}`);

// 13) Nível do Jogador 

let pontos = 750;

if (pontos < 100) {
    console.log("Iniciante");
} else if (pontos < 500) {
    console.log("Bronze");
} else if (pontos < 1000) {
    console.log("Prata");
} else {
    console.log("Ouro");
}

// // 14) Senha e Usúario 

let USUARIO = "camila";
let SENHA = "maravilhosa";

if (usuario === "Camila" && senha === "maravilhosa") {
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado");
}

// // 15) Semáfaro 

let cor = "amarelo";

if (cor === "verde") {
    console.log("Siga");
} else if (cor === "amarelo") {
    console.log("Atenção");
} else if (cor === "vermelho") {
    console.log("Pare");
} else {
    console.log("Cor inválida");
}

// // 16) Dia útil ou fim de semana

let dia = 6;

if (dia < 1 || dia > 7) {
    console.log("Dia inválido");
} else if (dia <= 5) {
    console.log("Dia útil");
} else {
    console.log("Fim de semana");
}

// // 17) Pode Digirir

let idade3 = 22;
let possuiCNH = false;

if (idade < 18) {
    console.log("Não pode dirigir: menor de idade");
} else if (!possuiCNH) {
    console.log("Não pode dirigir: não possui CNH");
} else {
    console.log("Pode dirigir");
}

// // 18) Estoque de Produto

let estoque1 = 4;
let quantidadePedida = 6;

if (quantidadePedida <= 0) {
    console.log("Pedido inválido");
} else if (quantidadePedida <= estoque) {
    estoque = estoque - quantidadePedida;
    console.log("Venda autorizada");
    console.log(`Estoque restante: ${estoque}`);
} else {
    console.log("Estoque insuficiente");
}

// // 19) Boletim de Recuperação

let nota = 5.8;
let frequencia2 = 82;

if (frequencia < 75) {
    console.log("Reprovado por frequência");
} else if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado por nota");
}

// // 20)  Desconto por faixa

let valorCompra = 380;
let percentual = 0;

if (valorCompra < 100) {
    percentual = 0;
} else if (valorCompra < 300) {
    percentual = 0.05;
} else if (valorCompra < 500) {
    percentual = 0.10;
} else {
    percentual = 0.15;
}

let desconto = valorCompra * percentual;
let total = valorCompra - desconto;

console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);

// // 21) Triângulo válido

let LadoA = 3;
let LadoB = 4;
let LadoC = 5;

if (
    ladoA > 0 &&
    ladoB > 0 &&
    ladoC > 0 &&
    ladoA + ladoB > ladoC &&
    ladoA + ladoC > ladoB &&
    ladoB + ladoC > ladoA
) {
    console.log("Triângulo válido");
} else {
    console.log("Triângulo inválido");
}

// // 22) Tipo de Triângulo

let ladoA = 6;
let ladoB = 6;
let ladoC = 4;

if (
    ladoA <= 0 ||
    ladoB <= 0 ||
    ladoC <= 0 ||
    ladoA + ladoB <= ladoC ||
    ladoA + ladoC <= ladoB ||
    ladoB + ladoC <= ladoA
) {
    console.log("Triângulo inválido");
} else if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Equilátero");
} else if (
    ladoA === ladoB ||
    ladoA === ladoC ||
    ladoB === ladoC
) {
    console.log("Isósceles");
} else {
    console.log("Escaleno");
}

// // 23) Calculo de IMC

let peso = 72;
let altura = 1.75;

if (peso <= 0 || altura <= 0) {
    console.log("Peso ou altura inválidos");
} else {
    let imc = peso / (altura ** 2);

    console.log(`IMC: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc < 25) {
        console.log("Faixa considerada normal");
    } else if (imc < 30) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidade");
    }
}

// // 24) Tarida de Estacionamento

let horas = 5;
let clienteConveniado = true;
let valor = 0;

if (horas <= 0) {
    console.log("Quantidade de horas inválida");
} else {
    if (horas <= 2) {
        valor = 10;
    } else {
        valor = 10 + (horas - 2) * 4;
    }

    if (clienteConveniado) {
        valor = valor * 0.80;
    }

    console.log(`Valor final: R$ ${valor.toFixed(2)}`);
}

// // 25) Velocidade na via 

let velocidade = 92;
let limite = 80;

if (velocidade <= limite) {
    console.log("Dentro do limite");
} else if (velocidade <= limite * 1.20) {
    console.log("Acima do limite");
} else {
    console.log("Muito acima do limite");
}

// // 26) Bolsa de Estudos 

let media = 9.1;
let frequencia3 = 92;
let rendaFamiliar = 2400;

if (media >= 9 && frequencia >= 90 && rendaFamiliar <= 2500) {
    console.log("Bolsa integral");
} else if (
    media >= 7 &&
    frequencia >= 75 &&
    rendaFamiliar <= 4000
) {
    console.log("Bolsa parcial");
} else {
    console.log("Sem bolsa");
}

 // 27)  Sistema de logins com Bloqueio

let usuario = "admin";
let senha = "1234";
let tentativas = 2;

if (tentativas >= 3) {
    console.log("Conta bloqueada");
} else if (usuario === "admin" && senha === "1234") {
    console.log("Login autorizado");
} else {
    console.log("Credenciais inválidas");
}

// // 28) Consumo de Energia 

let consumoKWh = 250;
let tarifa = 0;

if (consumoKWh < 0) {
    console.log("Consumo inválido");
} else {
    if (consumoKWh <= 100) {
        tarifa = 0.60;
    } else if (consumoKWh <= 200) {
        tarifa = 0.75;
    } else {
        tarifa = 0.90;
    }

    let conta = consumoKWh * tarifa;

    console.log(`Valor da conta: R$ ${conta.toFixed(2)}`);
}

// // 29) Processamento de Pedido

let estoque = 12;
let quantidade = 3;
let precoUnitario = 80;
let saldoCliente = 220;
let clienteVIP = false;

if (quantidade <= 0) {
    console.log("Compra rejeitada: quantidade inválida");
} else if (quantidade > estoque) {
    console.log("Compra rejeitada: estoque insuficiente");
} else {
    let subtotal = quantidade * precoUnitario;
    let valorFinal = subtotal;

    if (clienteVIP) {
        valorFinal = subtotal * 0.90;
    }

    if (saldoCliente >= valorFinal) {
        estoque = estoque - quantidade;
        saldoCliente = saldoCliente - valorFinal;

        console.log("Compra autorizada");
        console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
        console.log(`Estoque restante: ${estoque}`);
        console.log(`Saldo restante: R$ ${saldoCliente.toFixed(2)}`);
    } else {
        console.log("Compra rejeitada: saldo insuficiente");
    }
}

// // 30) Desafio Final — Inscrição em Competição

let idade = 17;
let notaProva = 82;
let frequencia = 88;
let autorizacaoResponsavel = true;
let possuiPendencia = false;

if (idade < 14 || idade > 20) {
    console.log("Inscrição recusada: idade fora da faixa");
} else if (notaProva < 70) {
    console.log("Inscrição recusada: nota insuficiente");
} else if (frequencia < 80) {
    console.log("Inscrição recusada: frequência insuficiente");
} else if (possuiPendencia) {
    console.log("Inscrição recusada: possui pendência");
} else if (idade < 18 && !autorizacaoResponsavel) {
    console.log("Inscrição recusada: falta autorização do responsável");
} else {
    console.log("Inscrição aprovada");
}