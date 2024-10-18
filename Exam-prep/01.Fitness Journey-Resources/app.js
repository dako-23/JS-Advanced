window.addEventListener('load', solve);

function solve() {
    //Before initial evenet listener

    const nextBtn = document.querySelector('#next-btn')
    nextBtn.addEventListener('click', readInput)

    const nameEl = document.querySelector('#name')
    const emailEl = document.querySelector('#email')
    const contactNumEl = document.querySelector('#contact-number')
    const classTypeEl = document.querySelector('#class-type')
    const classTimeEl = document.querySelector('#class-time')

    const previewEl = document.querySelector('.class-info')
    const panelEl = document.querySelector('.confirm-class')

    let name;
    let email;
    let contactNum;
    let classType;
    let classTime;

    function readInput(e) {
        e.preventDefault();

        name = nameEl.value
        email = emailEl.value
        contactNum = contactNumEl.value
        classType = classTypeEl.value
        classTime = classTimeEl.value

        if (name == '' || email == '' || contactNum == '' || classType == '' || classTime == '') return;

        nextBtn.disabled = true;
        nameEl.value = '';
        emailEl.value = ''
        contactNumEl.value = '';
        classTypeEl.value = '';
        classTimeEl.value = '';

        createPreview(name, email, contactNum, classType, classTime);

    }
    // task 1 - collect form information and create preview

    function createPreview(name, email, contactNum, classType, classTime) {
        const element = document.createElement('li')
        element.className = 'info-item';
        const article = document.createElement('article');
        article.className = 'personal-info';

        element.appendChild(article);
        article.appendChild(createPara(name))
        article.appendChild(createPara(email))
        article.appendChild(createPara(contactNum))
        article.appendChild(createPara(classType))
        article.appendChild(createPara(classTime))

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


        previewEl.appendChild(element)
    }
    //task 2 - return preview for editing

    function edit() {
        nextBtn.disabled = false

        nameEl.value = name
        emailEl.value = email
        contactNumEl.value = contactNum
        classTypeEl.value = classType
        classTimeEl.value = classTime

        previewEl.innerHTML = ''
    }

    //task 3 - continue with preview and create information

    function continuePreview() {

        const element = previewEl.querySelector('li');
        element.className = 'continue-info'
        panelEl.appendChild(element);

        element.querySelector('.edit-btn').remove();
        element.querySelector('.continue-btn').remove();

        const cancelBtn = document.createElement('button')
        cancelBtn.className = 'cancel-btn';
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', cancelAction);

        const confirmBtn = document.createElement('button')
        confirmBtn.className = 'confirm-btn'
        confirmBtn.textContent = 'Confirm'
        confirmBtn.addEventListener('click', confirmAction);

        element.appendChild(cancelBtn);
        element.appendChild(confirmBtn);

    }

    function cancelAction() {
        nextBtn.disabled = false;
        panelEl.innerHTML = ''

    };

    function confirmAction() {

        document.querySelector('#main').remove();

        const h1 = document.createElement('h1')
        h1.id = 'thank-you'
        h1.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!'

        const doneBtn = document.createElement('button');
        doneBtn.id = 'done-btn'
        doneBtn.textContent = 'Done'
        doneBtn.addEventListener('click', () => {
            location.reload();
        })

        document.body.appendChild(doneBtn);
        document.body.appendChild(h1);


    }

    function createPara(content) {
        const p = document.createElement('p');
        p.textContent = content
        return p
    }

    // task 4 - final confirm or cancel class
}




