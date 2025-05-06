// Prompt the user for their weight
const weight = Number(prompt("Please Enter Your Weight (in kg):"));

// Prompt the user for their height
const height = Number(prompt("Please Enter Your Height (in meters):"));

// Calculate BMI using the formula: weight / height^2
const BMI = weight / height ** 2;

// Display the BMI result to the user with two decimal places
alert("Your BMI is: " + BMI.toFixed(2));

