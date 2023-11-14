function sanitizeInput(event) {
    const input = event.target;
    let value = input.value.replace(/[^\d]/g, '');
    value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ');
    input.value = value.trim();
}

document.getElementById('expDate').addEventListener('input', function(e) {
    let input = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (input.length >= 2) {
        input = input.substring(0, 2) + '/' + input.substring(2);
    }
    if (input.length > 5) {
        input = input.substring(0, 5);
    }
    e.target.value = input;

    validateExpDate(input);
});

function validateExpDate(input) {
    let expDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    let isValid = expDateRegex.test(input);

    if (!isValid) {
        document.getElementById('expDate').setCustomValidity('Please enter a valid expiration date (MM/YY)');
    } else {
        document.getElementById('expDate').setCustomValidity('');
    }
}


function restrictToNumeric(event) {
    const input = event.target;
    input.value = input.value.replace(/\D/g, '');

    if (input.value.length > 3) {
        input.value = input.value.slice(0, 3);
    }
}