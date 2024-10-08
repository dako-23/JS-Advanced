function solve() {

    const addTaskFormEl = document.querySelector('form');
    const areaOpen = document.querySelector('.wrapper section:nth-child(2) > div:nth-child(2)')

    addTaskFormEl.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = e.target.querySelector('#task').value
        const description = e.target.querySelector('#description').value
        const date = e.target.querySelector('#date').value

        if (title && description && date) {

            taskCreate(title, description, date);
            e.target.reset();
        }

    })

    function taskCreate(title, description, date) {

        const taskEl = document.createElement('article');
        const h3 = document.createElement('h3');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');

        h3.textContent = title;
        p1.textContent = `Description: ${description}`
        p2.textContent = `Due Date: ${date}`

        const actionsEl = document.createElement('div');
        const btnProgress = document.createElement('button');
        const btnDelete = document.createElement('button');

        actionsEl.className = 'flex';

        btnProgress.textContent = 'Start'
        btnProgress.className = 'green'

        btnDelete.textContent = 'Delete'
        btnDelete.className = 'red'

        btnProgress.addEventListener('click', (e) => {
            /// търси нагоре в дървото
            const taskEl = e.target.closest('article');
            const nextSection = e.target.closest('section').nextElementSibling.querySelector('div:nth-child(2)');
            const currentBtnEl = e.target.closest('div')

            if (e.target.textContent == 'Start') {
                btnProgress.textContent = 'Finish';
                btnProgress.className = 'orange';
                e.target.remove();
                currentBtnEl.append(e.target);

            } else {
                currentBtnEl.remove();
            }

            taskEl.remove();
            nextSection.append(taskEl)
        })

        btnDelete.addEventListener('click', (e) => {
            taskEl.remove()
        })

        actionsEl.append(btnProgress, btnDelete)
        taskEl.append(h3, p1, p2, actionsEl);
        areaOpen.append(taskEl)

    }
    // function taskDelete(taskEl) {
    //     taskEl.remove()
    // }



}