function solve() {
  const input = document.querySelector('#text').value.toLowerCase().trim().split(' ')
  const convers = document.querySelector('#naming-convention').value.toLowerCase()

  let resultEl = document.querySelector('#result')

  if (input == '' || convers == '') return;

  let result = ''

  if (convers == 'camel case') {
    result = input[0] + input.slice(1).map((word) => word[0].toUpperCase() + word.slice(1)).join('')

  } else if (convers == 'pascal case') {
    result = input.map((word) => word[0].toUpperCase() + word.slice(1)).join('')

  } else {
    result = 'Error!'
  }

  resultEl.textContent = result
}