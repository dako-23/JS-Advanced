const inputEl = document.querySelector('#newItemText');
const listEl = document.querySelector('#items')

function addItem() {


    const newItem = document.createElement('li')
    const text = inputEl.value

    if (!text) return;

    listEl.addEventListener('click', onClick);

    newItem.textContent = text;

    const deleteBtn = document.createElement('a')
    deleteBtn.textContent = '[delete]'
    deleteBtn.href = '#';
    newItem.appendChild(deleteBtn);
    

    listEl.appendChild(newItem)

    inputEl.value = ''

}

function onClick(e) {
    const btn = e.target
    if(btn.tagName !== 'A') return;
    
    btn.parentElement.remove();
}
