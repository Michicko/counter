const number = document.querySelector('#number');
const increaseCount = document.querySelector('#inc-count');
const decreaseCount = document.querySelector('#dcr-count');
let count = 0;
number.innerHTML = count;

increaseCount.addEventListener('click', increaseCounter);
decreaseCount.addEventListener('click', decreaseCounter);

function increaseCounter() {
    counter(true);
}
function decreaseCounter() {
    counter(false);
}
function counter(state) {
    state = state === true ? count++ : count--; 
    if (count < 0) {
        number.classList = 'danger';
    } else if (count > 0) {
        number.classList = 'success';
    }
    number.innerHTML = count;
}


