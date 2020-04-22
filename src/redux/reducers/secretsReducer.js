const secretsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SECRETS':
        return action.payload;
      case 'UNSET_SECRETS':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default secretsReducer;
  