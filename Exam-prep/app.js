window.addEventListener('load', solve);

function solve() {

    const nextBtn = document.querySelector('#next-btn')
    nextBtn.addEventListener('click', readInput)

    const firstNameEl = document.querySelector('#first-name');
    const lastNameEl = document.querySelector('#last-name');
    const fromDateEl = document.querySelector('#from-date');
    const toDateEl = document.querySelector('#to-date');
    const statusEl = document.querySelector('#status')


    const infoListEl = document.querySelector('.info-list');
    const confirmListEl = document.querySelector('.confirm-list');


    let firstName;
    let lastName;
    let fromDate;
    let toDate;

    function readInput(e) {
        e.preventDefault()

        firstName = firstNameEl.value;
        lastName = lastNameEl.value;
        fromDate = fromDateEl.value;
        toDate = toDateEl.value;


        if (firstName == '' || lastName == '' || fromDate == '' || toDate == '' || new Date(fromDate) >= new Date(toDate)) return;

        nextBtn.disabled = true;
        e.target.parentNode.reset()
        createPreview();
    }

    function createPreview() {

        const element = document.createElement('li');
        element.className = 'vacation-content';
        const article = document.createElement('article');
        // article.className = 'flex';
        const names = document.createElement('h3')
        names.textContent = `Name: ${firstName} ${lastName}`
        const p1 = document.createElement('p');
        p1.textContent = `From date: ${fromDate}`
        const p2 = document.createElement('p');
        p2.textContent = `To date: ${toDate}`

        element.appendChild(article);
        article.appendChild(names)
        article.appendChild(p1);
        article.appendChild(p2);


        const editBtn = document.createElement('button')
        editBtn.className = 'edit-btn'
        editBtn.textContent = 'Edit'
        editBtn.addEventListener('click', edit)

        const continueBtn = document.createElement('button')
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';

        continueBtn.addEventListener('click', continuePreview)

        element.appendChild(editBtn);
        element.appendChild(continueBtn);

        infoListEl.appendChild(element)

    }

    function edit() {
        nextBtn.disabled = false;

        firstNameEl.value = firstName;
        lastNameEl.value = lastName;
        fromDateEl.value = fromDate;
        toDateEl.value = toDate;

        infoListEl.innerHTML = '';
    }

    function continuePreview() {


        const element = infoListEl.querySelector('li');
        element.className = 'vacation-content'
        confirmListEl.appendChild(element);

        element.querySelector('.edit-btn').remove()
        element.querySelector('.continue-btn').remove()

        const confirmBtn = document.createElement('button');
        confirmBtn.className = 'confirm-btn'
        confirmBtn.textContent = 'Confirm'
        confirmBtn.addEventListener('click', resolvedPreview)

        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'cancel-btn'
        cancelBtn.textContent = 'Cancel'
        cancelBtn.addEventListener('click', canceledPreview)

        element.appendChild(confirmBtn)
        element.appendChild(cancelBtn)

    }

    function resolvedPreview() {
        confirmListEl.querySelector('li').remove()
        nextBtn.disabled = false

        const newClass = document.createElement('class')
        newClass.className = 'vacation-confirmed';
        newClass.textContent = 'Vacation Requested';
        statusEl.appendChild(newClass)

    }

    function canceledPreview() {
        confirmListEl.querySelector('li').remove()
        nextBtn.disabled = false

        const newClass = document.createElement('class')
        newClass.className = 'vacation-cancelled';
        newClass.textContent = 'Cancelled Vacation';
        statusEl.appendChild(newClass)

    }

    statusEl.addEventListener('click', () => {
        location.reload();
    })


    // let formFieldIndex = 0;  // Променлива за следене на текущия индекс

    // function createPara(content) {
    //     const formFieldsPref = ['From date:', 'To date:'];

    //     // Проверка дали индексът не е извън границите на масива
    //     const prefix = formFieldsPref[formFieldIndex] || '';
    //     formFieldIndex = (formFieldIndex + 1) % formFieldsPref.length; // Увеличаваме индекса и го ресетваме, ако надхвърли дължината на масива

    //     const p = document.createElement('p');
    //     p.textContent = `${prefix} ${content}`;
    //     return p;

    // }
}