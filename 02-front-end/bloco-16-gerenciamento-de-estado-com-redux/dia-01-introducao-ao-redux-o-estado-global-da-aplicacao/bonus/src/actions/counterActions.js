export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const incrementAction = (amount) => ({
  type: INCREMENT,
  amount,
})

export const decrementAction = (amount) => ({
  type: DECREMENT,
  amount,
})
