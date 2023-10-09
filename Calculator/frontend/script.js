async function performCalculation() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operation = document.getElementById("operation").value;

    const response = await fetch('https://complex-calculator-app-b770da0680e5.herokuapp.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            num1: num1,
            num2: num2,
            operation: operation
        })
    });

    const data = await response.json();
    if (data.error) {
        document.getElementById("result").innerText = "Error: " + data.error;
    } else {
        document.getElementById("result").innerText = "Result: " + data.result;
    }
}
