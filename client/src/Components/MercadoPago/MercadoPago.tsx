import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
  useSesion,
  useToken,
} from "../../app/hooks";
import { get_payment } from "../../features/mercadopago/mercadopago";
import Navbar from "../Navbar/Navbar";
import styles from "./MercadoPago.module.css";
import Plan_normal from "./Plans/Plan_normal";
import Plan_premium from "./Plans/Plan_premium";

export default function MercadoPago() {
  const token = useToken();
  const Navegation = useNavigate();
  const mercadoData = useAppSelector((state) => state.mercadopago);
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const [pay, setPay] = useState(false);
  const url = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${mercadoData.id}`;
  useEffect(() => { 
    if(user?.plan=="premium"){
      Navegation("/fitFocus")
    }
},[user])
  useEffect(() => {
    let userJSON = window.localStorage.getItem("Login_userFit_Focus");
    let token = null;
    if (userJSON) {
      if (userJSON.length > 3) {
        token = JSON.parse(userJSON);
      }
    }
    if (token && mercadoData.id === "") {
      dispatch(get_payment({ token: token.token, id: null }));
    }
    if (mercadoData.id !== "") {
      setPay(true);
    }
  }, [mercadoData]);
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.tittle}>
          <h1 style={{ color: "#111827" }}>Tu trayectoria con Fit Focus</h1>
          <h1 style={{ color: "#111827" }}>comienza ahora</h1>
        </div>
        <div className={styles.planes}>
          <div>{token.length === 0 && <Plan_normal />}</div>
          <div>
            <Plan_premium url={url} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
