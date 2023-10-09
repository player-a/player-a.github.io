async function performCalculation() {
    // Fetch values from the form
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operation = document.getElementById("operation").value;

    try {
        // Send a POST request to the /calculate endpoint
        const response = await fetch('/calculate', {
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

        // Parse the response JSON
        const data = await response.json();

        // Handle the response
        if (data.error) {
            document.getElementById("result").innerText = "Error: " + data.error;
        } else {
            document.getElementById("result").innerText = "Result: " + data.result;
        }

    } catch (error) {
        // Handle any other errors (e.g., network issues)
        document.getElementById("result").innerText = "Error: " + error.toString();
    }
}
