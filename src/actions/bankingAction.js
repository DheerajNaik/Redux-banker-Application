export const deposit = (payload) => {
  return { type: "DEPOSIT", payload: parseInt(payload) };
};
export const withdraw = (payload) => {
  return { type: "WITHDRAW", payload: parseInt(payload) };
};

export const collectInterest = () => {
  return { type: "COLLECT_INTEREST" };
};
export const deleteAccount = () => {
  return { type: "DELETE_ACCOUNT" };
};
export const toggleAccount = () => {
  return { type: "TOGGLE_ACCOUNT" };
};
