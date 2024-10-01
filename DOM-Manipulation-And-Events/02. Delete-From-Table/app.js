function deleteByEmail() {
    const inputEl = document.querySelector('[name="email"]')
    const outputEl = document.querySelector('#result')
    const pattern = inputEl.value.toLowerCase();


    if (!pattern) {
        // outputEl.textContent = 'Not found.'
        return;
    }


    const rows = document.querySelectorAll('#customers tbody tr')

    rows.forEach((el, index) => {

        if (el.textContent.toLowerCase().includes(pattern)) {
            outputEl.textContent = 'Deleted.'
            el.remove()
        } else {
            outputEl.textContent = 'Not found.'
        }
    })


    inputEl.value = ''






}