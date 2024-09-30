function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      const studentsListRows = document.querySelectorAll('table tbody tr');
      const searchFieldEl = document.querySelector('#searchField')
      const searchStrEl = searchFieldEl.value.toLowerCase();

      if(searchStrEl == '') return

      const studentList = Array.from(studentsListRows).map((el) => el.innerText.toLowerCase());

      const result = [];

      studentsListRows.forEach((el) => {
         el.classList.remove('select');
      })

      for (let i = 0; i < studentList.length; i++) {
         if (studentList[i].indexOf(searchStrEl) >= 0) {
            result.push(i);
         }
      }

      result.forEach((pos, index) => {
         studentsListRows[pos].classList.add('select');
      })


      searchFieldEl.value = ''




   }
}