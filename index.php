<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="calculador.css">
    <!-- <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>calculator</title>
</head>

<body>
    <div class="fundo">
        <div class="calculadora">
            <div class="content">
                <div class="number">
                    <table>
                        <label for=""></label>
                        <p class="result" id="resultado"></p>
                        <tr>
                            <td><button class="botao" onclick="numero(1,'/')">/</button></td>
                            <td><button class="botao" onclick="numero(1,'*')">*</button></td>
                            <td><button class="botao" onclick="numero(1,'-')">-</button></td>
                            <td><button class="material-icons" onclick="backspace()" class="material-icons">&#xe14a;</button></td>
                        </tr>
                        <tr>
                            <td><button class="botao" onclick="insert('7')">7</button></td>
                            <td><button class="botao" onclick="insert('8')">8</button></td>
                            <td><button class="botao" onclick="insert('9')">9</button></td>
                            <td><button class="botao" onclick="numero(1,'+')">+</button></td>
                        </tr>
                        <tr>
                            <td><button class="botao" onclick="insert('4')">4</button></td>
                            <td><button class="botao" onclick="insert('5')">5</button></td>
                            <td><button class="botao" onclick="insert('6')">6</button></td>
                            <td><button class="botao" onclick="insert('π')"> π</button></td>
                        </tr>
                        <tr>
                            <td><button class="botao" onclick="insert('1')">1</button></td>
                            <td><button class="botao" onclick="insert('2')">2</button></td>
                            <td><button class="botao" onclick="insert('3')">3</button></td>
                            <td><button class="botao" onclick="numero(0,'c')">C</button></td>
                        </tr>

                        <tr>
                            <td><button class="botao" onclick="insert('0')">0</button></td>
                            <td><button class="botao" onclick="insert(',')">,</button></td>
                            <td><button class="botao" onclick="insert('.')">.</button></td>
                            <td><button class="botao" onclick="numero(2,'=')">=</button></td>
                        </tr>
                        <tr>

                        </tr>
                    </table>
                </div>
            </div>
            </form>
        </div>
    </div>
</body>
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> -->
<script>
    function calc(sym) {
        switch (sym) {
            case '+':
                result = parseInt(numero1) + parseInt(numero2);
                document.getElementById('resultado').innerHTML = result;
                break;

            case '-':
                result = numero1 - numero2;
                document.getElementById('resultado').innerHTML = result;
                break;

            case '/':
                result = numero1 / numero2;
                document.getElementById('resultado').innerHTML = result;
                break;

            case '*':
                result = numero1 * numero2;
                document.getElementById('resultado').innerHTML = result;
                break;

            default:
                document.getElementById('resultado').innerHTML = 'error';
                break;
        }
    }

    function insert(num) {
        if (num == 'π') {
            num = 3.141592;
            var numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
        }
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
    }

    function clear() {
        document.getElementById('resultado').innerHTML = '';
    }

    function backspace() {
        var numero = document.getElementById('resultado').innerHTML;
        string = numero.slice(0, -1);
        console.log(string);
        document.getElementById('resultado').innerHTML = string;
    }

    function numero(num, cont) {

        if (num == 0 || cont == 'c') {
            clear();
        }
        if (num == 1) {
            var numero = document.getElementById('resultado').innerHTML;
            numero1 = numero;
            sym = cont;
            numero = '';
            document.getElementById('resultado').innerHTML = numero;
        }
        var numero = document.getElementById('resultado').innerHTML;
        numero2 = numero;
        numero = '';
        if (num == 2) {
            console.debug(num);
            console.debug(sym);
            console.debug(numero);
            console.debug(numero1);
            console.debug(numero2);
            calc(sym);
        }
    }
</script>

</html>