const TodoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, action.payload]
        case "DELETE_NOTE":
            return state.filter((todo,index) => index !== action.payload)
        case "UPDATE_NOTE":
            return state.map((todo, index) => {
                if (index === action.payload.index) {
                    return action.payload.value;
                }
                return todo
            })
        default:
            return state
    }
}

export default TodoReducer;