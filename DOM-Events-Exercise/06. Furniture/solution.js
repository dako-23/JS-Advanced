function solve() {

  const btnElGen = document.querySelector('button');

  btnElGen.addEventListener('click', (e) => {
    const inputEl = document.querySelector('textArea');
    const data = JSON.parse(inputEl.value);

    const productListEl = document.querySelector('table.table tbody')


    data.forEach((item) => {

      const product = document.createElement('tr')

      const productImgCell = document.createElement('td')
      const productImg = document.createElement('img');
      productImg.setAttribute('src', item.img);
      productImgCell.appendChild(productImg);

      const productNameCell = document.createElement('td');
      productNameCell.textContent = item.name;

      const productPriceCell = document.createElement('td')
      productPriceCell.textContent = item.price;

      const productDecFactorCell = document.createElement('td');
      productDecFactorCell.textContent = item.decFactor;

      const productMarkCell = document.createElement('td')
      const productMarkCheckBox = document.createElement('input');
      productMarkCheckBox.setAttribute('type', 'checkbox');
      productMarkCell.appendChild(productMarkCheckBox);

      product.append(
        productImgCell,
        productNameCell,
        productPriceCell,
        productDecFactorCell,
        productMarkCell
      )

      productListEl.appendChild(product);

    });
  })

  const shopBtnEl = document.querySelectorAll('button')[1];

  shopBtnEl.addEventListener('click', (e) => {

    const outputEl = document.querySelectorAll('textarea')[1];

    const data = [...document.querySelectorAll('.table tbody tr:has(input:checked)')].map(i => ({
      name: i.childNodes[1].textContent,
      price: Number(i.childNodes[2].textContent),
      decFactor: Number(i.childNodes[3].textContent)
    }))

    let output =`Bought furniture: ${data.map(e => e.name).join(', ')}\n`
    output +=`Total price: ${data.reduce((acc, el) => { return acc = acc + el.price }, 0).toFixed(2)}\n`
    output +=`Average decoration factor: ${data.reduce((acc, el) => { return acc = acc + el.decFactor / data.length }, 0)}`

    outputEl.value = output





  })

}