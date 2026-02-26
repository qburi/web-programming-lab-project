document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const phone = document.getElementById('phone').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const payment = document.getElementById('payment').value;

    let isValid = true;


    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        showError('phoneError', 'Phone number must be exactly 10 digits.');
        isValid = false;
    }

    const zipRegex = /^\d{6}$/;
    if (!zipRegex.test(zip)) {
        showError('zipError', 'ZIP code must be exactly 6 digits.');
        isValid = false;
    }

    if (payment === "") {
        showError('paymentError', 'Please select a payment method.');
        isValid = false;
    }


    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        alert("Form submitted successfully")
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}
