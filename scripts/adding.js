var addForm = document.getElementById("addForm");

addForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operation = document.getElementById("operation").value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Please enter a number";
    } else {
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "You can't divide by zero";
                }
                break;
            default:
                 result = "invalid operation";
            
        }

        document.getElementById("result").textContent = result;
    }
})