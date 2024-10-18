function solution1() {

    const formEl = document.querySelector('.container-text > form')
    const addBtn = document.querySelector('#add-btn')
    addBtn.addEventListener('click', readInput)
  
    const previewListEl = document.querySelector('.preview-list');
    const pendingListEl = document.querySelector('.pending-list');
    const resolvedListEl = document.querySelector('.resolved-list');
  
    formFieldsPref = ['From:', 'Category:', 'Urgency:', 'Assigned to:', 'Description:']
    formFields = Array.from(formEl.querySelectorAll('input, select'))
  
    function readInput(e) {
      e.preventDefault();
  
      const emptyFields = formFields.filter((el) => el.value == '');
      if (emptyFields.length > 0) return
  
      const element = document.createElement('li');
      element.className = 'problem-content';
      const article = document.createElement('article');
      element.appendChild(article);
  
  
      formFields.forEach((el, index) => {
        const p = document.createElement('p');
        p.textContent = formFieldsPref[index] + ' ' + el.value;
        article.appendChild(p)
      })
      
  
      previewListEl.appendChild(element)
  
  
  
  
      // createPreview(employee, category, urgency, team, description);
  
    }
  
  
  
  }