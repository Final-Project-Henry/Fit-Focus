import React from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../app/hooks";
import styles from "./Error_page.module.css";
import logo from "../assets/icons/nav-icon2.png";
import bad from "../assets/icons/bad_request.png";
import alert from "../assets/icons/alert.png";

export default function Error_page(props: {
  error: string;
  numb_error: string;
}) {
  const token = useToken();
  const navigate = useNavigate();

  const onClick = () => {
    navigate(token ? "/fitfocus/home" : "/home");
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10vh",
      }}
    >
      <div className={styles.container}>
        <img className={styles.img} src={logo}></img>
        <div className={styles.error}>
          <p style={{ fontSize: "2rem", fontWeight: "500" }}>
            {props.numb_error}.
          </p>
          <p style={{ paddingTop: "10px", fontSize: "1.2rem" }}>
            <b>HA OCURRIDO UN PROBLEMA</b>
          </p>
          <img src={alert} width="30px" alt="alert.png" />
        </div>
        <div className={styles.text}>
          <p>Su cliente no tiene permiso para acceder a esta URL.</p>
          <p>
            Si el problema persiste, pongase en contacto con servicio tecnico.
          </p>
          <p className="mt-5">
            <b>
              <i>Error: {props.error}</i>
            </b>
          </p>
        </div>
        <button className={styles.btn} onClick={onClick}>
          Ir a Home
        </button>
      </div>
      <img className={styles.bad} src={bad}></img>
    </div>
  );
}
