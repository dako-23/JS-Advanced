function attachEventsListeners() {

    const inputElDays = document.querySelector('#days')
    const inputElHours = document.querySelector('#hours')
    const inputElMinutes = document.querySelector('#minutes')
    const inputElSeconds = document.querySelector('#seconds')

    const inputBtns = document.querySelectorAll('input[type="button"]')

    const units = {
        days: 86400,
        hours: 3600,
        minutes: 60,
        seconds: 1
    }

    function updateUnits(secondsAmount) {
        inputElDays.value = Number(secondsAmount / units.days);
        inputElHours.value = Number(secondsAmount / units.hours);
        inputElMinutes.value = Number(secondsAmount / units.minutes);
        inputElSeconds.value = Number(secondsAmount / units.seconds);
    }

    function clickEvenetHandler(e) {

        const inputTimeType = e.target.getAttribute('id').split('Btn')[0]
        const currentInputEl = document.querySelector('#' + inputTimeType)
        const currentValue = currentInputEl.value;

        const multiplier = units[inputTimeType];

        updateUnits(currentValue * multiplier);
    }

    inputBtns.forEach((button) => { button.addEventListener('click', clickEvenetHandler) })
}