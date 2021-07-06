export default function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: `${Date.now().toString(36)}-${Math.floor(
            Math.random() * 1000000000000
          ).toString(36)}`,
        },
      ];

    case "DELETE":
      return [...state.filter((todo) => !todo.completed)];
    case "TOGGLE":
      return [
        ...state.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        }),
      ];
    default:
      return state;
  }
}
