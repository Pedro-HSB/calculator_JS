<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="calculator.css">
    <title>calculator</title>
</head>

<body>
    <div class="content">
        <div class="number">
            <label for=""></label>
            <p id="resultado"></p>
            <td><button onclick="insert('1')">1</button></td>
            <td><button onclick="insert('2')">2</button></td>
            <td><button onclick="insert('3')">3</button></td>
            <td><button onclick="insert('4')">4</button></td>
            <td><button onclick="insert('5')">5</button></td>
            <td><button onclick="insert('6')">6</button></td>
            <td><button onclick="insert('7')">7</button></td>
            <td><button onclick="insert('8')">8</button></td>
            <td><button onclick="insert('9')">9</button></td>
            <td><button onclick="insert('0')">0</button></td>

            <td><button id="clear" class="clear" onclick="clear()">C</button></td>
            <td><button onclick="numero(1,'+')">+</button></td>
            <td><button onclick="numero(1,'-')">-</button></td>
            <td><button onclick="numero(1,'/')">/</button></td>
            <td><button onclick="numero(1,'*')">*</button></td>
            <td><button onclick="numero(2,'=')">=</button></td>
        </div>
    </div>
    </form>
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
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
    }

    function clear(clear) {
        result = document.getElementById('resultado').innerHTML;
        // document.getElementById('resultado').reset();
        el("#clear").onclick = clearAll;
    }

    function numero(num, cont) {
        if (num == 1) {
            var numero = document.getElementById('resultado').innerHTML;
            numero1 = numero;
            console.debug(num);
            console.debug(numero);
            console.debug(cont);
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


    //  function sub() {
    //         var numero = document.getElementById('resultado').innerHTML;
    //         // console.debug(numero);
    //         document.getElementById('resultado').innerHTML = numero + num;
    //     }

    //     function divi() {
    //         var numero = document.getElementById('resultado').innerHTML;
    //         // console.debug(numero);
    //         document.getElementById('resultado').innerHTML = numero + num;
    //     }

    //     function mult() {
    //         var numero = document.getElementById('resultado').innerHTML;
    //         // console.debug(numero);
    //         document.getElementById('resultado').innerHTML = numero + num;
    //     }
    // var clearAll = function() {
    //     oldNum = "";
    //     theNum = "";
    //     viewer.innerHTML = "0";
    //     equals.setAttribute("resultado", resultNum);
    // };
</script>

</html>