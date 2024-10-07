function lockedProfile() {
    document.querySelector('main').addEventListener('click', clickEvenetHandler)


    function clickEvenetHandler(e) {

        if (e.target.nodeName == 'BUTTON') {
            const profile = e.target.closest('.profile');
            const state = profile.querySelector('input[type="radio"]:checked').value



            if (state == 'unlock') {

                const hiddenFields = profile.querySelector('[id*="HiddenFields"]')

                if (hiddenFields.style.display == 'block') {

                    hiddenFields.style.display = 'none'
                    e.target.textContent = 'Show more'
                } else {

                    hiddenFields.style.display = 'block'
                    e.target.textContent = 'Hide it'
                }
            }
        }
    }
}