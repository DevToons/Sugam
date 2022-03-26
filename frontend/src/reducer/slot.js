export const slotReducer = (state, action) => {
    switch (action.type) {
        case 'BOOK_SLOT':
            return {
                ...state,
                ...action.details
            };

        default:
            return state;
    }
};