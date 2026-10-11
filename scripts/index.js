const form = document.querySelector('.contact-form');
const submit = form.querySelector('input[type="submit"]');

function updateSubmit() {
    submit.disabled = !form.checkValidity();
}

form.addEventListener('input', updateSubmit);
form.addEventListener('blur', updateSubmit, true);
updateSubmit();