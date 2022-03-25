export const otpReducer = (state, action) => {
    switch (action.type) {
        case 'STORE_OTP':
            return {
                ...state,
                otp: action.otp
            };
        case 'STORE_PHONE_NO':
            return {
                ...state,
                phoneNo: action.phoneNo
            }
        default:
            return state;
    }
};