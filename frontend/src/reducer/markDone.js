const markDoneReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MARK_DONE':
            return !state;

        default:
            return state;
    }
}

export default markDoneReducer;