export const distributorDetailsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DISTRIBUTOR_DETAILS':
            return {
                ...state,
                ...action.details
            }

        default:
            return state;
    }
}