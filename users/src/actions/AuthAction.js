import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_FAILED, LOGIN_SUCCESS, LOGIN_USER} from './Types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';


export const emailChanged = (text)=>{
    return{
        type:EMAIL_CHANGED,
        payload:text
    }
};

export const passwordChanged = (text)=>{
    return{
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({email,password})=>{
    return (dispatch)=>{
        dispatch({type:LOGIN_USER});
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user=>{ loginSuccess(dispatch, user); })
            .catch((error)=>{
                console.log(error)
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user=>loginSuccess(dispatch, user))
                .catch(()=>loginFailed(dispatch))
            })
    }
}

export const loggedInUser = (user)=>{
    return{
        type:LOGIN_USER,
        payload:user
    }
}

const loginSuccess = (dispatch, user)=>{
    dispatch({type: LOGIN_SUCCESS, payload:user})
}

const loginFailed = (dispatch)=>{
    dispatch({type:LOGIN_FAILED})
}
