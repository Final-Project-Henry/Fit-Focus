import React, { Fragment, useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { authGoogle } from '../../features/counter/counterSlice';
import { useAppDispatch } from "../../app/hooks";
import { useGoogleLogin } from '@react-oauth/google';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';



interface response {
    clientId: String,
    credential: String,
    select_by: String
}

export default function GoogleAuth() {

    const [code, setCode] = useState('')
    const dispatch = useAppDispatch();

    const sendInfo = (code: String) => {
        dispatch(authGoogle({ code: code }));
    }
    useEffect(()=>{
        if(code.length>0){
            sendInfo(code);
        }
    },[code])

    return (
        <Fragment>
            <GoogleLogin 
                onSuccess={(res)=>{if(typeof res.credential==='string')setCode(res.credential)}}
                onError={()=>console.log("Login Error")}
            />
        </Fragment>
    )
}
