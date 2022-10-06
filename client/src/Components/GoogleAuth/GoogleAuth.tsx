import React, { Fragment, useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import {
  ActivecuentaGoogle,
  authGoogle,
  selectUser,
} from "../../features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useGoogleLogin } from "@react-oauth/google";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import jwtDecode from "jwt-decode";

interface response {
  clientId: String;
  credential: String;
  select_by: String;
}

export default function GoogleAuth() {
  const { EstadoCuenta } = useAppSelector(selectUser);
  const [code, setCode] = useState("");
  const dispatch = useAppDispatch();

  const sendInfo = (code: String) => {
    dispatch(authGoogle({ code: code }));
  };

  useEffect(() => {
    if (code.length > 0 && EstadoCuenta != "Activar") {
      sendInfo(code);
    } else if (EstadoCuenta === "Activar") {
      let user = jwtDecode(code);
      let data: any = user;
      dispatch(ActivecuentaGoogle({ email: data.email, password: data.sub }));
    }
  }, [code, EstadoCuenta]);

  return (
    <Fragment>
      <GoogleLogin
        width="200"
        onSuccess={(res) => {
          if (typeof res.credential === "string") setCode(res.credential);
        }}
        onError={() => alert("Login Error")}
      />
    </Fragment>
  );
}
