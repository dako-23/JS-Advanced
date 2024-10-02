function addItem() {
    const inputEl = document.querySelector('#newItemText');
    const listEl = document.querySelector('#items')

    const newItem = document.createElement('li')
    const text = inputEl.value

    if (!text) return;

    newItem.textContent = text;

    const deleteBtn = document.createElement('a')
    deleteBtn.textContent = '[delete]'
    // deleteBtn.href = '#';
    newItem.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', onClick)

    listEl.appendChild(newItem)

    inputEl.value = ''

    function onClick(e) {
        const btn = e.target
        btn.parentElement.remove();
    }
}