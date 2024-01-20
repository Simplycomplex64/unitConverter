const enterBtn = document.getElementById("enter-btn");
const inputField = document.getElementById("input-field");
const convert1 = document.getElementById("convert1");
const convert2 = document.getElementById("convert2");
const convert3 = document.getElementById("convert3");

enterBtn.addEventListener("click", function () {
    let numberToConvert = parseFloat(inputField.value);

    // Convert meters to feet and vice versa
    let metersToFeet = (numberToConvert * 3.281).toFixed(3);
    let feetToMeters = (numberToConvert / 3.281).toFixed(3);

    // Convert liters to gallons and vice versa
    let litersToGallons = (numberToConvert / 3.78541).toFixed(3);
    let gallonsToLiters = (numberToConvert * 3.78541).toFixed(3);

    // Convert kilograms to pounds and vice versa
    let kilogramsToPounds = (numberToConvert * 2.20462).toFixed(3);
    let poundsToKilograms = (numberToConvert / 2.20462).toFixed(3);

    // Update the content of the elements with rounded values
    convert1.textContent = `${numberToConvert} meters = ${metersToFeet} feet | ${numberToConvert} feet = ${feetToMeters} meters`;
    convert2.textContent = `${numberToConvert} liters = ${litersToGallons} gallons | ${numberToConvert} gallons = ${gallonsToLiters} liters`;
    convert3.textContent = `${numberToConvert} kilograms = ${kilogramsToPounds} pounds | ${numberToConvert} pounds = ${poundsToKilograms} kilograms`;
});
