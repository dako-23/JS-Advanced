function search() {
   const townsEl = document.querySelector('#towns')
   const searchFieldEl = document.querySelector('#searchText')
   const resultEl = document.querySelector('#result')

   const searchStr = searchFieldEl.value.toLowerCase();

   if (searchStr == '') return

   const townsArr = Array.from(townsEl.children)
   const towns = townsArr.map((el) => el.textContent.toLowerCase())

   townsArr.forEach((el) => {
      el.style.fontWeight = 'normal'
      el.style.textDecoration = 'none'
   })

   let result = [];

   for (let i = 0; i < towns.length; i++) {

      if (towns[i].indexOf(searchStr) >= 0) {
         result.push(i)
      }

   }

   result.forEach((el) => {
      townsEl.children[el].style.fontWeight = 'bold'
      townsEl.children[el].style.textDecoration = 'underline'
   });

   resultEl.textContent = `${result.length} matches found`;

   searchFieldEl.value = ''
}
