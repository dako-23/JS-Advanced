function deleteByEmail() {
    const inputEl = document.querySelector('[name="email"]')
    const outputEl = document.querySelector('#result')
    const pattern = inputEl.value.toLowerCase();


    if (!pattern) return;



    const rows = document.querySelectorAll('#customers tbody tr')

    let found = false;

    rows.forEach((el, index) => {
        const content = el.children[1];

        if (content.textContent.toLowerCase().includes(pattern)) {
            // outputEl.textContent = 'Deleted.'
            el.remove()
            found = true;
        }
    })

    inputEl.value = ''

    if (found) {
        outputEl.textContent = 'Deleted.'
    } else {
        outputEl.textContent = 'Not found..'
    }




}