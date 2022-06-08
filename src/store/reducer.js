const initialState = {
  isLoading: false,
  openSidebar: false,
  dataUsers: [],
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      }
    case 'SET_OPEN_SIDEBAR':
      return {
        ...state,
        openSidebar: action.payload,
      }
    case 'SET_DATA_USERS':
      return {
        ...state,
        dataUsers: action.payload,
      }
    default:
      return state;
  }
};

const reducer = { globalReducer };

export default reducer;