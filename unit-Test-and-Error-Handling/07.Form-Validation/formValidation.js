function validate() {

    const patterns = {
        username: /^[a-zA-Z0-9]{3,20}$/,
        email: /^.*@.*\..*$/,
        password: /^\w{5,15}$/,
        "confirm-password": /^\w{5,15}$/,
        companyNumber: /^\w{4,4}$/
    }

    const formEl = document.querySelector('#registerForm')
    const companyInfoEl = document.querySelector('#companyInfo');
    const checkCompanyEl = document.querySelector('#company');
    const validEl = document.querySelector('#valid')

    checkCompanyEl.addEventListener('change', (e) => {

        companyInfoEl.style.display = (e.target.checked) ? 'block' : 'none';

    })

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputFieldsForCheck = [...e.target.querySelectorAll('input:not([type="checkbox"])')];
        const checkValid = [];

        inputFieldsForCheck.forEach((el) => {

            const type = el.getAttribute('id')
            const passwordEl = e.target.querySelector('#password')

            if (type == 'companyNumber' && companyInfoEl.style.display == 'none') return;

            if (!patterns[type].test(el.value)) {

                el.style.borderColor = 'red'
                checkValid.push(el)

            } else {
                el.style.borderColor = ''
            }

            if (type == 'confirm-password' && el.value !== passwordEl.value) {
                checkValid.push(el)
                checkValid.push(passwordEl)
                el.style.borderColor = 'red'
                passwordEl.style.borderColor = 'red'
            }


        })

        validEl.style.display = (checkValid.length == 0) ? 'block' : 'none'

    })


}
