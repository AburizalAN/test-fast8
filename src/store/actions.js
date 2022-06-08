const setDataUsers = (payload) => {
  return {
    type: 'SET_DATA_USERS',
    payload,
  }
}

const setOpenSidebar = (payload) => {
  return {
    type: 'SET_OPEN_SIDEBAR',
    payload,
  }
}

const setIsLoading = (payload) => {
  return {
    type: 'SET_IS_LOADING',
    payload,
  }
}

const fetchDataUsers = (page) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    const response = await fetch(`https://randomuser.me/api/?page=${page}&results=4&seed=abc`)
    const data = await response.json()
    dispatch(setDataUsers(data.results))
    dispatch(setIsLoading(false))
  }
}



const actions = {
  setDataUsers,
  setOpenSidebar,
  setIsLoading,
  fetchDataUsers,
}

export default actions