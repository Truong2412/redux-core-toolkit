
const initState = {
  user: {
    token: null,
    asset: 0
  }
}

const rootReducer = (state= initState,action) =>{
  // console.log({action,state})
  switch (action.type) {
    case "user/login":
     
      return {
        ...state,
          user:{
            ...state.user,
            token: action.payload.token,
            asset: action.payload.asset
          }
    }
    case 'user/logout':
      console.log("logout di")
      return {
        ...state,
          user: initState.user
      }
    default:
      return state;
  }
}
export default rootReducer;