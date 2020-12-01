const initialState = {
  balance: 0,
  isSavingsAccount: false,
};

export const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      // why do we return the state ? because reducer returns the new value of the state hence returning state will create a new state.Now this state is sent back to the store.
      return { ...state, balance: state.balance + action.payload };
    case "WITHDRAW":
      return state <= 0 ? (
        <p>No Balance</p>
      ) : (
        { ...state, balance: state.balance - action.payload }
      );
    case "COLLECT_INTEREST":
      return { ...state, balance: state.balance * 1.03 };
    case "DELETE_ACCOUNT":
      return { ...state, balance: 0 };
    case "TOGGLE_ACCOUNT":
      return { ...state, isSavingsAccount: !state.isSavingsAccount };
    default:
      return state;
  }
};
