// Selecting input fields for Celsius, Fahrenheit, and Kelvin
let celsiusInput = document.querySelector('.celsius>input');
let fahrenheitInput = document.querySelector('.farenheit>input');
let kelvinInput = document.querySelector('.kelvin>input');

// Selecting the 'Delete All' button
let btn = document.querySelector('.button button');

// Function to round numbers to two decimal places
function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

// Event listener for Celsius input field
celsiusInput.addEventListener('input', function () {
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = (cTemp * (9/5)) + 32; // Convert Celsius to Fahrenheit
    let kTemp = cTemp + 273.15; // Convert Celsius to Kelvin

    // Update other fields with converted values
    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
});

// Event listener for Fahrenheit input field
fahrenheitInput.addEventListener('input', function () {
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32) * (5/9); // Convert Fahrenheit to Celsius
    let kTemp = (fTemp - 32) * (5/9) + 273.15; // Convert Fahrenheit to Kelvin

    // Update other fields with converted values
    celsiusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
});

// Event listener for Kelvin input field
kelvinInput.addEventListener('input', function () {
    let kTemp = parseFloat(kelvinInput.value);
    let fTemp = (kTemp - 273.15) * (9/5) + 32; // Convert Kelvin to Fahrenheit
    let cTemp = kTemp - 273.15; // Convert Kelvin to Celsius

    // Update other fields with converted values
    fahrenheitInput.value = roundNumber(fTemp);
    celsiusInput.value = roundNumber(cTemp);
});

// Event listener for 'Delete All' button to clear all input fields
btn.addEventListener('click', () => {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
});
