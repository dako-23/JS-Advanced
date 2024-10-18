window.addEventListener('load', solution);

function solution() {

  const formEl = document.querySelector('.container-text > form')
  const addBtn = document.querySelector('#add-btn')
  addBtn.addEventListener('click', readInput)

  console.log(Array.from(formEl.querySelector('.label')));
  

  const employeeEl = document.querySelector('#employee');
  const categoryEl = document.querySelector('#category');
  const urgencyEl = document.querySelector('#urgency');
  const teamEl = document.querySelector('#team');
  const descriptionEl = document.querySelector('#description');

  const previewListEl = document.querySelector('.preview-list');
  const pendingListEl = document.querySelector('.pending-list');
  const resolvedListEl = document.querySelector('.resolved-list');

  let employee;
  let category;
  let urgency;
  let team;
  let description;

  function readInput(e) {
    e.preventDefault();

    employee = employeeEl.value
    category = categoryEl.value
    urgency = urgencyEl.value
    team = teamEl.value
    description = descriptionEl.value

    if (employee == '' || category == '' || urgency == '' || team == '' || description == '') return

    addBtn.disabled = true;
    e.target.parentNode.reset()
    createPreview();

  }

  function createPreview() {
    const element = document.createElement('li');
    element.className = 'problem-content';
    const article = document.createElement('article');
    article.className = 'flex';

    element.appendChild(article);
    article.appendChild(createPara(employee));
    article.appendChild(createPara(category));
    article.appendChild(createPara(urgency));
    article.appendChild(createPara(team));
    article.appendChild(createPara(description));
   
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

    previewListEl.appendChild(element)
  }

  function edit() {
    addBtn.disabled = false;

    employeeEl.value = employee;
    categoryEl.value = category;
    urgencyEl.value = urgency;
    teamEl.value = team;
    descriptionEl.value = description;

    previewListEl.innerHTML = '';

  }

  function continuePreview() {
    addBtn.disabled = false

    const element = previewListEl.querySelector('li');
    element.className = 'pending-list'
    pendingListEl.appendChild(element);

    element.querySelector('.edit-btn').remove()
    element.querySelector('.continue-btn').remove()

    const resolvedBtn = document.createElement('button');
    resolvedBtn.className = 'resolve-btn'
    resolvedBtn.textContent = 'Resolved'
    resolvedBtn.addEventListener('click', resolvedPreview)

    element.appendChild(resolvedBtn)

  }

  function resolvedPreview() {

    const element = pendingListEl.querySelector('li');
    element.className = 'pending-list'
    resolvedListEl.appendChild(element);

    element.querySelector('.resolve-btn').remove()


    const clearBtn = document.createElement('button');
    clearBtn.className = 'clear-btn'
    clearBtn.textContent = 'Clear'
    clearBtn.addEventListener('click', () => { resolvedListEl.innerHTML = ''; })

    element.appendChild(clearBtn)

  }

  let formFieldIndex = 0;  // Променлива за следене на текущия индекс

  function createPara(content) {
    const formFieldsPref = ['From:', 'Category:', 'Urgency:', 'Assigned to:', 'Description:'];

    // Проверка дали индексът не е извън границите на масива
    const prefix = formFieldsPref[formFieldIndex] || '';
    formFieldIndex = (formFieldIndex + 1) % formFieldsPref.length; // Увеличаваме индекса и го ресетваме, ако надхвърли дължината на масива

    const p = document.createElement('p');
    p.textContent = `${prefix} ${content}`;
    return p;

  }

}




