export const userReducer = (state, action) => {
    switch (action.type) {
        case 'STORE_USER':
            return {
                ...state,
                user: action.user
            };
        case 'STORE_TOKEN':
            return {
                ...state,
                token: action.token
            };

        default:
            return state;
    }
};