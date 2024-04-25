// Função inputNum: Esta função é responsável por limitar o número de caracteres exibidos no visor da calculadora.
function inputNum(){
    let num = document.getElementById('resultado').innerHTML;
    // Verifica se o comprimento da string é maior que 13.
    if (num.length > 13){
        // Se o comprimento for maior que 13, limita a string para exibir apenas os 13 primeiros caracteres.
        num = num.substring(0, num.length)
    }
}

// Função calc: Esta função realiza cálculos matemáticos com base no operador passado como parâmetro.
function calc(sym) {
    switch (sym) {
        case '+':
            // Realiza a adição dos números obtidos do visor da calculadora e atualiza o visor com o resultado.
            result = parseInt(numero1) + parseInt(numero2);
            document.getElementById('resultado').innerHTML = result;
            break;

        case '-':
            // Realiza a subtração dos números e atualiza o visor com o resultado.
            result = numero1 - numero2;
            document.getElementById('resultado').innerHTML = result;
            break;

        case '/':
            // Realiza a divisão dos números e atualiza o visor com o resultado.
            result = numero1 / numero2;
            document.getElementById('resultado').innerHTML = result;
            break;

        case '*':
            // Realiza a multiplicação dos números e atualiza o visor com o resultado.
            result = numero1 * numero2;
            document.getElementById('resultado').innerHTML = result;
            break;

        default:
            // Se nenhum operador válido for passado, exibe 'error' no visor.
            document.getElementById('resultado').innerHTML = 'error';
            break;
    }
}

// Função insert: Insere números ou valores especiais (como o π) no visor da calculadora.
function insert(num) {
    if (num == 'π') {
        // Se o valor inserido for π, substitui pela constante π e exibe no visor.
        num = 3.141592;
        let numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
    }
    let numero = document.getElementById('resultado').innerHTML;
    // Adiciona o número ou valor ao visor da calculadora.
    document.getElementById('resultado').innerHTML = numero + num;
}

// Função clear: Limpa o visor da calculadora, redefinindo-o para '0'.
function clear() {
    document.getElementById('resultado').innerHTML = '0';
}

// Função backspace: Remove o último caractere do visor da calculadora.
function backspace() {
    let numero = document.getElementById('resultado').innerHTML;
    // Remove o último caractere da string e atualiza o visor.
    string = numero.slice(0, -1);
    document.getElementById('resultado').innerHTML = string;
}

// Função numero: Controla a lógica de entrada de números e operadores na calculadora.
function numero(num, cont) {

    if (num == 0 || cont == 'c') {
        // Se o número for 0 ou o argumento for 'c', limpa o visor da calculadora.
        clear();
    }
    if (num == 0 || cont == 'ce') {
        // Se o número for 0 ou o argumento for 'ce', limpa o visor da calculadora.
        clear();
    }
    if (num == 1) {
        let numero = document.getElementById('resultado').innerHTML;
        // Armazena o primeiro número digitado e o operador selecionado.
        numero1 = numero;
        sym = cont;
        numero = '';
        document.getElementById('resultado').innerHTML = numero;
    }
    let numero = document.getElementById('resultado').innerHTML;
    // Armazena o segundo número digitado.
    numero2 = numero;
    numero = '';
    if (num == 2) {
        // Se o número for 2, chama a função calc() para realizar o cálculo.
        calc(sym);
    }
}

// Função quadrado: Calcula o quadrado do número exibido no visor e atualiza o visor com o resultado.
function quadrado() {
    let num = document.getElementById('resultado').innerHTML;
    num = num * num;
    document.getElementById('resultado').innerHTML = num;
}

// Função raiz: Calcula a raiz quadrada do número exibido no visor e atualiza o visor com o resultado.
function raiz() {
    let num = document.getElementById('resultado').innerHTML;
    num = Math.sqrt(num);
    document.getElementById('resultado').innerHTML = num;
}
