function convertToCelcius(value) {
    let celcius;

    celcius = ((value / 5) * 9) + 32;
    console.log(celcius);
}
function convertToFahrenheit(value1) {
    let fahrenheit;
    fahrenheit = ((value1 - 32) / 9) * 5;
    console.log(fahrenheit);


}
convertToCelcius(60);
convertToFahrenheit(45);