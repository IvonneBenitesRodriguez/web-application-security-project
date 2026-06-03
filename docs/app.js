const form = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;

    // Clear previous errors:
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    successMessage.style.display = 'none';

    const result = validateForm({ fullName, email, password, age })

    if(result.valid) {
        fetch('http://localhost:3000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    full_name: fullName,
                    email: email,
                    password: password,
                    age: parseInt(age)
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.message) {
                successMessage.style.display = 'block';
                form.reset();
            } else {
                alert(data.errors.join('\n'));
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        const fields = ['fullName', 'password', 'email', 'age'];
        for(let i=0; i < fields.length; i++){
            if(result.errors[fields[i]]){
                showError(fields[i], result.errors[fields[i]]);
            }
        }
    }
});

function showError(fieldId, message){
    const field = document.getElementById(fieldId);
    const error = document.createElement('span');
    error.className = 'error-message';
    error.style.color = 'red';
    error.style.fontSize = '12px';
    error.textContent = message;
    field.parentElement.appendChild(error);
}