function convert() {
    let inputValue = parseFloat(document.querySelectorAll('#inputValue')[0].value);
    let inputUnit = document.querySelectorAll('#inputUnit')[0].value;
    let outputUnit = document.querySelectorAll('#outputUnit')[0].value;
    let para = document.querySelectorAll('.output')[0];
    let outputValue;
    if (inputValue === "") {
        para.innerText = `Please enter a valid number. \n`;
    }
    if (inputUnit === outputUnit) {
        outputValue = inputValue;
    }
    else if (inputUnit === "Celsius") {
        if (outputUnit === "Fahrenheit") {
            outputValue = (inputValue * 9 / 5) + 32;
        }
        else if (outputUnit === "Kelvin") {
            outputValue = inputValue + 273.15;
        }
    }
    else if (inputUnit === "Fahrenheit") {
        if (outputUnit === "Celsius") {
            outputValue = (inputValue - 32) * 5 / 9;
        }
        else if (outputUnit === "Kelvin") {
            outputValue = ((inputValue - 32) * 5 / 9) + 273.15;
        }
    }
    else if (inputUnit === "Kelvin") {
        if (outputUnit === "Celsius") {
            outputValue = inputValue - 273.15;
        }
        else if (outputUnit === "Fahrenheit") {
            outputValue = ((inputValue - 273.15) * 9 / 5) + 32;
        }
    }

    document.querySelectorAll('.output')[0].innerText += `${outputValue.toFixed(2)} ${outputUnit} \n`;
}
