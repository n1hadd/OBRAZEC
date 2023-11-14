document.addEventListener('DOMContentLoaded', function () {
            const mastercardSpan = document.getElementById('mastercard');
            const visaSpan = document.getElementById('visa');

            mastercardSpan.addEventListener('click', function () {
                if (!this.classList.contains('clicked')) {
                    this.classList.add('clicked');
                    visaSpan.classList.remove('clicked');

                    visaSpan.classList.add('disabled');
                    mastercardSpan.classList.remove('disabled');
                }
            });

            visaSpan.addEventListener('click', function () {
                if (!this.classList.contains('clicked')) {
                    this.classList.add('clicked');
                    mastercardSpan.classList.remove('clicked');

                    mastercardSpan.classList.add('disabled');
                    visaSpan.classList.remove('disabled');
                }
            });
        });