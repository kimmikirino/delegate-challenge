export const userReducer = (state, action) => {
  switch (action.type) {
    case "get_users":
      return { users: action.payload };
    case "update_users":
      const { users } = state;
      const { payload } = action;
      const index = users.findIndex((el) => el.id === payload.id);
      users[index] = payload;

      return { users: [...users] };
    default:
      throw new Error();
  }
};
