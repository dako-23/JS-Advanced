function solve() {

    const selectConvertorTo = document.querySelector('#selectMenuTo');

    const optionalSelectElConvToHex = document.createElement('option');
    optionalSelectElConvToHex.setAttribute('value', 'hexadecimal');
    optionalSelectElConvToHex.textContent = 'Hexadecimal'

    const optionalSelectElConvToBinary = document.createElement('option');
    optionalSelectElConvToBinary.setAttribute('value', 'binary');
    optionalSelectElConvToBinary.textContent = 'Binary'

    selectConvertorTo.appendChild(optionalSelectElConvToHex);
    selectConvertorTo.appendChild(optionalSelectElConvToBinary);

    const resultEl = document.querySelector('#result')

    document.querySelector('#container button').addEventListener('click', (e) => {
        const input = Number(document.querySelector('#input').value)

        if (selectConvertorTo.value == 'binary') {
            resultEl.value = input.toString(2)
        } else if (selectConvertorTo.value == 'hexadecimal') {
            resultEl.value = input.toString(16).toUpperCase()
        }
    })







}