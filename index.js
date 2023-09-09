<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="calculator">
        <div class="display">
            <input type="text" id="result" readonly>
        </div>
        <div class="buttons">
            <div class="button-row">
                <button onclick="appendToDisplay('1')">1</button>
                <button onclick="appendToDisplay('2')">2</button>
                <button onclick="appendToDisplay('3')">3</button>
                <button onclick="redirectToExample()">4</button>
            </div>
            <div class="button-row">
                <button onclick="appendToDisplay('4')">4</button>
                <button onclick="appendToDisplay('5')">5</button>
                <button onclick="appendToDisplay('6')">6</button>
                <button onclick="calculate()">=</button>
            </div>
            <div class="button-row">
                <button onclick="appendToDisplay('7')">7</button>
                <button onclick="appendToDisplay('8')">8</button>
                <button onclick="appendToDisplay('9')">9</button>
                <button onclick="clearDisplay()">C</button>
            </div>
            <div class="button-row">
                <button onclick="appendToDisplay('0')">0</button>
                <button onclick="appendToDisplay('+')">+</button>
                <button onclick="appendToDisplay('-')">-</button>
                <button onclick="appendToDisplay('*')">*</button>
                <button onclick="appendToDisplay('/')">/</button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
