const kelvin = 293; // The value saved to kelvin will stay constant

const celsius = kelvin - 273; // Converting Kelvin to Celsius

const fahrenheit = Math.floor(celsius * (9/5) + 32); ////Converts Celsius to Fahrenheit and rounds it down
console.log(`The temperature is ${fahrenheit} degress Fahrenheit`);

const kelvinToFahrenheit = kelvin => celsius * (9/5) + 32;
kelvinToFahrenheit(293);