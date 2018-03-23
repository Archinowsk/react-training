// Reducer
const initialState = { count: 0, name: '' }

const counterReducer = (state = initialState, action) => {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    case 'decrease':
      return { count: count - 1 }
    case 'updateName':
      return { ...state, name: action.payload }
    default:
      return state
  }
}

export default counterReducer
