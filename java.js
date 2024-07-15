function calculateBMI() {
    // Get input values
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters

    // Validate inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid values for weight and height.');
        return;
    }

    // Calculate BMI
    var bmi = weight / (height * height);

    // Display result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;

    // Display BMI classification
    var classificationElement = document.getElementById('classification');
    var classification = getBMIClassification(bmi);
    classificationElement.innerHTML = `BMI Classification: ${classification}`;

    // Display health status message
    var healthStatusElement = document.getElementById('healthStatus');
    healthStatusElement.innerHTML = getHealthStatusMessage(classification);
}

function resetForm() {
    // Clear result, classification, and health status
    document.getElementById('result').innerHTML = '';
    document.getElementById('classification').innerHTML = '';
    document.getElementById('healthStatus').innerHTML = '';

    // Reset form fields
    document.getElementById('bmiForm').reset();
}

function getBMIClassification(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}

function getHealthStatusMessage(classification) {
    switch (classification) {
        case 'Underweight':
            return 'Your BMI suggests that you are underweight. Please consider consulting a healthcare provider.';
        case 'Normal weight':
            return 'Your BMI indicates that your weight is within a healthy range.';
        case 'Overweight':
            return 'Your BMI suggests that you are overweight. Consider making healthy lifestyle choices.';
        case 'Obesity':
            return 'Your BMI indicates obesity. It is recommended to consult a healthcare provider for advice.';
        default:
            return '';
    }
}


