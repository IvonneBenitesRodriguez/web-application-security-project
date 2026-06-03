// Protection against XSS(Cross Site Scripting Attacks) - OWASP A03
function sanitizeInput(value){
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
}



function validatePassword(value) {
    if(value === ""){
        return {
            valid: false,
            errors: "empty field"
        }
    } if(value.length <= 7){
        return {
            valid: false,
            errors: "password length is unsafe"
        }
    } if(value.length >= 8) {
        return {
            valid: true,
            errors: 'safe format well done!'
        }    
    }
    const charactersAdvised = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
    if(charactersAdvised.test(value)) {
        return{
            valid: true,
            errors: 'safe format well done!'
        }
    }

    return {
        valid: true,
        errors: "safe format"
    }
}


function validateFullName(value){
    if(value === ''){
        return {
            valid: false,
            errors: 'invalid reply no full name written'
        } 
    } if(value === '?'){
        return {
            valid: false,
            errors: 'invalid character written'
        } 
    } if(value.length >= 2 ){
        return{
            valid: true,
            errors: 'perfect Full name accepted'
        } 
    }
}


function validateEmail(value){
    if(value === ''){
        return {
            valid: false,
            errors: "invalid reply"
        };
    } 
    const regex = /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]{2,}$/;
    if(regex.test(value)){
        return{
            valid: true,
            errors: "correct format"
        }
    } else {
        return {
            valid: false,
            errors: "wrong format"
        }
    }
}

function validateAge(value){
    if(value === ""){
        return {
            valid: false,
            errors: 'empty field'
        }
    }
    const num = Number(value);
   if(isNaN(num) || num < 18 || num > 120){
    return {
        valid: false,
        errors: 'age must be between 18 and 120'
        };
   }
   return {
    valid: true,
    errors: 'correct format'
   }
}

function validateForm( { fullName, email, password, age }){
        const cleanFullName = sanitizeInput(fullName);
        const cleanEmail  = sanitizeInput(email);
        const cleanPassword = sanitizeInput(password);

        const fullNameResult = validateFullName(fullName);
        const emailResult = validateEmail(email);
        const passwordResult = validatePassword(password);
        const ageResult = validateAge(age);

        const valid = fullNameResult.valid &&
                        emailResult.valid &&
                        passwordResult.valid &&
                        ageResult.valid;

        return {
            valid,
            errors: {
                fullName: fullNameResult.valid ? null : fullNameResult.errors,
                email: emailResult.valid ? null : emailResult.errors,
                password: passwordResult.valid ? null : passwordResult.errors,
                age: ageResult.valid ? null: ageResult.errors
            }
        }
}

if( typeof module !== undefined){

module.exports = { validatePassword, validateFullName, validateEmail, validateAge, validateForm }

}
