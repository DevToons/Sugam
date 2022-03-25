import React from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import './SignUpPage.css';
import { OtpContext } from "../../store/otp";
import { UserContext } from "../../store/user";
import { otpReducer } from "../../reducer/otp";
import SignUpBox from "../../components/SignUpBox/SignUpBox";
import OtpBox from "../../components/OtpBox/OtpBox";
import { storeUser } from "../../actions/user";

const SignUpPage = () => {

    const { user, dispatchUser } = React.useContext(UserContext);

    const [ code, dispatchCode ] = React.useReducer(otpReducer,{
        phoneNo:null,
        otp:null
    });

    const provider = {
        code,
        dispatchCode
    }

    React.useEffect(() => {

        window.recaptchaVerifier=new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
            }
        }, auth);

    }, []);

    React.useEffect(() => {
        
        let appVerifier = window.recaptchaVerifier;
        console.log(code.phoneNo)

        signInWithPhoneNumber(auth, code.phoneNo, appVerifier)
        .then((confirmationResult) => {

            window.confirmationResult=confirmationResult;

        }).catch((error) => {
            console.log(error)
        });

    }, [code.phoneNo]);

    React.useEffect(() => {

        if (!window.confirmationResult) {
            return;
        }

        window.confirmationResult.confirm(code.otp)
            .then((result) => {
                dispatchUser(storeUser(result.user));

            }).catch((error) => {
                console.log(error);
            })

    }, [code.otp]);

    console.log(user)

    return (

        <OtpContext.Provider value={provider}>
            {
                code.phoneNo === null ? <SignUpBox /> : <OtpBox />
            }
            <div id="recaptcha-container"></div>
        </OtpContext.Provider>
    );
}

export default SignUpPage;
