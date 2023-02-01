
let count = 0;
let incrementBtn = document.getElementById('increment');
let decrementBtn = document.getElementById('decrement');
let resetBtn = document.getElementById('reset');
let counter = document.getElementById('counter');

incrementBtn.addEventListener('click', function() {
  count++;
  counter.textContent = count;
  updateStyle(count);

})

decrementBtn.addEventListener('click', function() {
  count--;
  counter.textContent = count;
  updateStyle(count);
})

resetBtn.addEventListener('click', function() {
  count = 0;
  counter.textContent = count;
  
})
