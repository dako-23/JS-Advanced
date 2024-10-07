function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const inputEl = document.querySelector('#inputs');
      const bestRestaurantEl = document.querySelector('#bestRestaurant')

      const newItem = document.createElement('li')
      const text = inputEl.value

      if (!text) return;

      bestRestaurantEl.textContent = text;

      listEl.appendChild(newItem)

      inputEl.value = ''




   }
}