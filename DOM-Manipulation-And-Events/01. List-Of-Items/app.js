function addItem() {
    const inputEl = document.querySelector('#newItemText');
    const listEl = document.querySelector('#items')

    const newItem = document.createElement('li')
    const text = inputEl.value

    if (!text) return;

    newItem.textContent = text;

    listEl.appendChild(newItem)

    inputEl.value = ''

}