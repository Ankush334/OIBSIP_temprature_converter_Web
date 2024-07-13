function convertTemperature() {
    // Get user input
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var unitFrom = document.getElementById('unitFrom').value;

    // Initialize variables
    var celsius, fahrenheit, kelvin;

    // Convert based on selected unit
    switch (unitFrom) {
        case 'celsius':
            celsius = inputTemp;
            fahrenheit = celsiusToFahrenheit(celsius);
            kelvin = celsiusToKelvin(celsius);
            break;
        case 'fahrenheit':
            fahrenheit = inputTemp;
            celsius = fahrenheitToCelsius(fahrenheit);
            kelvin = celsiusToKelvin(celsius);
            break;
        case 'kelvin':
            kelvin = inputTemp;
            celsius = kelvinToCelsius(kelvin);
            fahrenheit = celsiusToFahrenheit(celsius);
            break;
    }

    // Display results
    document.getElementById('result').innerHTML = `
        <p>${celsius.toFixed(2)} Celsius (°C)</p>
        <p>${fahrenheit.toFixed(2)} Fahrenheit (°F)</p>
        <p>${kelvin.toFixed(2)} Kelvin (K)</p>
    `;
}

// Conversion functions
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
