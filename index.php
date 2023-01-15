<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="index.css">
    <title>calculator</title>
</head>

<body>
    <!-- <form action="date.php" method="post"> -->
        <div class="content">
            <div class="number">
                <label for=""></label>
                <div class="numbers"><input action type="button" value="1"></div>
                <div class="numbers"><input action type="button" value="2"></div>
                <div class="numbers"><input action type="button" value="3"></div>
                <div class="numbers"><input action type="button" value="4"></div>
                <div class="numbers"><input action type="button" value="5"></div>
                <div class="numbers"><input action type="button" value="6"></div>
                <div class="numbers"><input action type="button" value="7"></div>
                <div class="numbers"><input action type="button" value="8"></div>
                <div class="numbers"><input action type="button" value="9"></div>
                <div class="numbers"><input action type="button" value="0"></div>
            </div>
            <div class="Symbols">
            <button id="bt" type="button">login</button>
            </div>
        </div>
    </form>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    $(document).ready(function () {
        $("#bt").click(function (e) {
            function valueNumber() {
                var number = document.getElementsByClassName("numbers").value;
            console.debug(number);
                // var senha = document.getElementById("senha").value;
            }
        });
    });

</script>

</html>