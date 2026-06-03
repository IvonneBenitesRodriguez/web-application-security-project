const { validatePassword, validateFullName, validateEmail, validateAge, validateForm } = require('./validators');

describe('validatePassword', () => {

    test('returns invalid reply because empty field', ()=>{
        expect(validatePassword('')).toEqual({
            valid: false,
            errors:"empty field"
        });
    });


    test('returns invalid format if password length is less or equal than 7', () => {
        expect(validatePassword('abcdef')).toEqual({
            valid: false,
            errors: "password length is unsafe"
        });
    });

    test('returns valid format if password length is greater or equal than 8', () => {
        expect(validatePassword('abcdefghi')).toEqual({
            valid: true,
            errors:'safe format well done!'
        });
    });

    test('returns valid format if password characters are lowercase and uppercase letters with digits', () => {
        expect(validatePassword('Axjhilxz123!')).toEqual({
            valid: true,
            errors:'safe format well done!'
        });
    });

});


describe ('validateFullName', () => {
    
    test('return invalid reply because an empty string',() => {
        expect(validateFullName('')).toEqual({
            valid: false,
            errors: "invalid reply no full name written"
        });
    });

    test( 'return invalid reply because an invalid character written', () => {
        expect(validateFullName('?')).toEqual({
            valid: false,
            errors: "invalid character written"
        });
    });

    test('return value with minimum 2 characters', ()=>{
        expect(validateFullName('May')).toEqual({
            valid: true,
            errors: "perfect Full name accepted"
        });
    });
})

describe('validateEmail', () => {

    test('return invalid reply because an empty string', () => {
        expect(validateEmail('')).toEqual({
            valid: false,
            errors: "invalid reply"
        });
    });

    test('return correct format if value includes "@" ', ()=> {
        expect(validateEmail('ivonnebenites@gmail.com')).toEqual({
            valid: true,
            errors: 'correct format'
        });
    });

    test('return correct format if value includes ".com" ', () => {
        expect(validateEmail('ivonnebenites@gmail.com')).toEqual({
            valid: true,
            errors: "correct format"
        });
    });

    test('return invalid reply if value misses ".com" and "@"', ()=>{
        expect(validateEmail('ivonnebenitesgmail')).toEqual({
            valid: false,
            errors: 'wrong format'
           });
        });


    test('return correct format if value includes ".es" ', () => {
        expect(validateEmail('ivonne@gmail.es')).toEqual({
            valid: true,
            errors: 'correct format'
        })
    })

    test('return invalid format if value includes "@.com" ', () => {
        expect(validateEmail('ivonne@.com')).toEqual({
            valid: false,
            errors: "wrong format"
        })})

    });


    describe('validateAge', () => {

    test('returns invalid reply because empty field', ()=> {
        expect(validateAge('')).toEqual({
            valid: false,
            errors: "empty field"
        });
     });
     
     test('returns a number not a string', ()=> {
        expect(validateAge(19)).toEqual({
            valid: true,
            errors: 'correct format'
        });
     });

     test('returns a number between 18 and 120', ()=> {
        expect(validateAge(47)).toEqual({
            valid: true,
            errors: 'correct format'
        });
     });

})


describe('validateForm', () => {
    
    test('return invalid reply because empty field', ()=> {
        expect(validateForm({
            fullName: '',
            email: '',
            password: '',
            age: ''
        })).toEqual({
            valid: false,
            errors: {
                fullName:'invalid reply no full name written',
                email: 'invalid reply',
                password: 'empty field',
                age: 'empty field'
        }
    });
    });

    test('returns valid when all fields are correct',() => {
        expect(validateForm({
            fullName: 'Pei',
            email: 'pei78123@yahoo.com',
            password: 'safe129999',
            age: '45'
        })).toEqual({
            valid: true,
            errors: {
                fullName: null,
                email: null,
                password: null,
                age: null
            }
        });
    });
})

