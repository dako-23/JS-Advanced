function attachEventsListeners() {

    const inputDistanceEl = document.querySelector('#inputDistance');
    const inputDistanceUnitsEl = document.querySelector('#inputUnits');

    const outputDistanceEl = document.querySelector('#outputDistance');
    const outputDistanceUnitsEl = document.querySelector('#outputUnits');

    const converterBtn = document.querySelector('#convert')

    console.log(inputDistanceEl, inputDistanceUnitsEl, outputDistanceEl, outputDistanceUnitsEl);

    const units = {
        km: 1000000,
        m: 1000,
        cm: 10,
        mm: 1,
        mi: 1609344,
        yrd: 914.4,
        ft: 304.80,
        in: 25.4
    }

    converterBtn.addEventListener('click', (e) => {

        const inputAmount = Number(inputDistanceEl.value)
        const inputUnits = inputDistanceUnitsEl.value
        const outputUnits = outputDistanceUnitsEl.value

        outputDistanceEl.value = Number((inputAmount * units[inputUnits] / units[outputUnits])).toFixed(4);


    })












}