// Redux Actions
export const increaseAction = value => {
  return { type: 'increase', payload: value }
}

export const decreaseAction = value => {
  return { type: 'decrease', payload: value }
}

export const updateNameAction = name => {
  return {
    type: 'updateName',
    payload: name,
  }
}
