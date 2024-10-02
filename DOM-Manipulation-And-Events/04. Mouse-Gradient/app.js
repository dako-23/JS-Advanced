function attachGradientEvents() {

    const boxEl = document.querySelector('#gradient')
    const output = document.querySelector('#result')
    boxEl.addEventListener('mousemove', onHover);

    function onHover(event) {

        const offset = Math.floor(event.offsetX / boxEl.clientWidth * 100) + '%';

        output.textContent = offset
    }




}