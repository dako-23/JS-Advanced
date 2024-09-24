function extractText() {

    const input = document.getElementById('items');
    const output = document.getElementById('result');

    const result = [];

    for (const element of input.children) {
        result.push(element.textContent);

    }

    output.textContent = result.join('\n')



}