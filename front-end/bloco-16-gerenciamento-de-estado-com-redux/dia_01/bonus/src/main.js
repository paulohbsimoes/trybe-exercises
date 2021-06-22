import { incrementAction, decrementAction } from './actions/counterActions.js';
import store from './store/index.js';

const incrementButton = document.querySelector('#increment');
const decrementButton = document.querySelector('#decrement');
const amount = document.querySelector('#amount');

incrementButton.addEventListener('click', () => store.dispatch(incrementAction(+amount.value)))
decrementButton.addEventListener('click', () => store.dispatch(decrementAction(+amount.value)))

const counterDisplay = document.querySelector('#counter-display');

store.subscribe(() => {
  const { counter } = store.getState();
  counterDisplay.textContent = counter.count;
});


const numberOfOperations = document.querySelector('#number-of-operations');
const operationsHistory = document.querySelector('#operations-history-list');

store.subscribe(() => {
  const { history } = store.getState();
  const { history: logs, clickCount } = history;
  numberOfOperations.textContent = clickCount;
  operationsHistory.innerHTML = logs.reduce((acc, cur) => {
    return acc + `<li>${cur.type} - ${cur.amount}</li>`
  }, '');
})
