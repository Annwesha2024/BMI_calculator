function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if(height === '' || weight === '' || height <= 0 || weight <= 0) {
        alert('Please enter valid values for height and weight.');
        return;
    }

    var bmi = (weight / ((height/100) * (height/100))).toFixed(2);

    var bmiValue = document.getElementById('bmiValue');
    var bmiCategory = document.getElementById('bmiCategory');

    bmiValue.textContent = bmi;

    if (bmi < 18.5) {
        bmiCategory.textContent = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory.textContent = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory.textContent = 'Overweight';
    } else {
        bmiCategory.textContent = 'Obesity';
    }
}
