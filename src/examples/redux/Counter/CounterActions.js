// Redux Actions
export const increaseAction = { type: 'increase' }
export const decreaseAction = { type: 'decrease' }

export const updateNameAction = name => {
  return {
    type: 'updateName',
    payload: name,
  }
}
