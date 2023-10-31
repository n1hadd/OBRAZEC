function makePayment(event) {
    event.preventDefault(); // This prevents the form from submitting

    const creditCardInput = document.getElementById('creditCard');
    const creditCardNumber = creditCardInput.value.replace(/\s/g, '');

    if (creditCardNumber.length === 16) {
        Swal.fire({
            icon: 'success',
            title: 'Payment Successful!',
            text: 'Thank you for your purchase.',
            showConfirmButton: false,
            timer: 5000
        });

        setTimeout(() => {
            // Clear the form values
            document.getElementById('checkoutForm').reset();

            window.location.href = 'index.html'; // Replace with the correct URL
        }, 5000); // Redirect after 5 seconds
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Credit Card Number',
            text: 'Please enter a valid 16-digit credit card number.'
        });
    }
}



