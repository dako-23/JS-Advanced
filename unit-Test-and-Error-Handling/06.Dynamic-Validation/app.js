function validate() {

    const emailValidateEl = document.querySelector('#email')
    const validatePattern = /^.*@.*\..*$/g;

    emailValidateEl.addEventListener('change', (e) => {

        e.target.className = (!validatePattern.test(e.target.value)) ? 'error' : '';

    })

}