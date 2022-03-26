export const userDetailsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER_DETAILS':
            return {
                ...state,
                ...action.details
            }

        default:
            return state;
    }
}