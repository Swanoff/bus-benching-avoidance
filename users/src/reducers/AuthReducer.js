import React from 'react';

import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_FAILED, LOGIN_SUCCESS, LOGIN_USER} from '../actions/Types';

const INITIAL_STATE = {
    email:'',
    password:'',
    loading:false,
    user:null,
    error:'',
    logged:false
}

export default  (state=INITIAL_STATE, action)=>{
    console.log(action);

    switch(action.type){
        case EMAIL_CHANGED:
            return {...state, email:action.payload };
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};

        case LOGIN_SUCCESS:
            return {...state, user:action.payload, logged:true, ...INITIAL_STATE} 
        case LOGIN_FAILED:
            return {...state, error:'Authentication Failed', loading:false, logged:false, password:'' }

        case LOGIN_USER:
            return {...state, loading:true, user:action.payload}

        default:
            return state;
    }

}