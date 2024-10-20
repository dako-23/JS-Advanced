window.addEventListener("load", solve);

function solve() {

  const addBtn = document.querySelector('#add-activity')
  addBtn.addEventListener('click', readInput)

  const activityTypeEl = document.querySelector('#type');
  const intensityEl = document.querySelector('#intensity');
  const caloriesEl = document.querySelector('#calories');
  const durationEl = document.querySelector('#duration');
  const dateEl = document.querySelector('#date')


  const previewActivityEl = document.querySelector('#preview-activity');
  const finalActivityEl = document.querySelector('#activities-table');


  let activityType;
  let intensity;
  let calories;
  let duration;
  let date;

  function clearForm() {
    activityTypeEl.value = '';
    intensityEl.value = '';
    caloriesEl.value = '';
    durationEl.value = '';
    dateEl.value = '';
  }

  function readInput(e) {
    e.preventDefault()

    activityType = activityTypeEl.value;
    intensity = intensityEl.value;
    calories = caloriesEl.value;
    duration = durationEl.value;
    date = dateEl.value;


    if (activityType == '' || intensity == '' || calories == '' || duration == '' || date == '') return;

    addBtn.disabled = true;

    createPreview();
    clearForm();
  }

  function createPreview() {

    const element = document.createElement('li');
    // element.className = 'vacation-content';
    const article = document.createElement('article');
    // article.className = 'flex';
    const p1 = document.createElement('p')
    p1.textContent = `Activity: ${activityType}`
    const p2 = document.createElement('p');
    p2.textContent = `Intensity: ${intensity}`
    const p3 = document.createElement('p');
    p3.textContent = `Duration: ${duration}`
    const p4 = document.createElement('p');
    p4.textContent = `Date: ${date}`
    const p5 = document.createElement('p');
    p5.textContent = `Calories: ${calories}`

    element.appendChild(article);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    article.appendChild(p5);

    const div = document.createElement('div')
    div.className = 'btn-container'

    const editBtn = document.createElement('button')
    editBtn.className = 'edit-btn'
    editBtn.textContent = 'Edit'
    editBtn.addEventListener('click', edit)

    const nextBtn = document.createElement('button')
    nextBtn.className = 'next-btn';
    nextBtn.textContent = 'Next';

    nextBtn.addEventListener('click', continuePreview)

    div.appendChild(editBtn)
    div.appendChild(nextBtn)
    element.appendChild(div);
    // element.appendChild(continueBtn);

    previewActivityEl.appendChild(element)

  }

  function edit() {
    addBtn.disabled = false;

    activityTypeEl.value = activityType
    intensityEl.value = intensity
    caloriesEl.value = calories
    durationEl.value = duration
    dateEl.value = date

    previewActivityEl.innerHTML = '';
  }

  function continuePreview() {
    addBtn.disabled = false;
    previewActivityEl.querySelector('li').remove()

    const tr = document.createElement('tr')
    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-btn'
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', (e) => {
      finalActivityEl.querySelector('tr').remove()

    })

    const td1 = document.createElement('td')
    td1.className = 'type-cell'
    td1.textContent = activityType
    const td2 = document.createElement('td')
    td2.className = 'duration-cell'
    td2.textContent = duration
    const td3 = document.createElement('td')
    td3.className = 'calories-cell'
    td3.textContent = calories
    const td4 = document.createElement('td')
    td4.className = 'date-cell'
    td4.textContent = date
    const td5 = document.createElement('td')
    td5.className = 'intensity-cell'
    td5.textContent = intensity
    const td6 = document.createElement('td')
    td6.className = 'btn-cell'

    td6.appendChild(deleteBtn)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    finalActivityEl.appendChild(tr)

  }

}
