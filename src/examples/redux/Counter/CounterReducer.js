// Reducer
const initialState = { count: 0, name: '' }

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, count: action.payload }
    case 'decrease':
      return { ...state, count: action.payload }
    case 'updateName':
      return { ...state, name: action.payload }
    default:
      return state
  }
}

export default counterReducer
