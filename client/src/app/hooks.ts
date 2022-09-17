import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useEffect, useState } from "react";
import { selectUser } from "../features/counter/counterSlice";
import jwtDecode from "jwt-decode";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

///auth google
export function useScript(url: string, onload: any) {
  useEffect(() => {
    let existing = document.getElementById("googleidentityservice");
    let script: any;

    if (existing === null) {
      script = document.createElement("script");
      script.src = url;
      script.onload = onload;
      document.head.appendChild(script);

      return () => document.head.removeChild(script);
    }
  }, [url, onload]);
}

//Hooks para el manteniminedo de seccion del usuario

export function useSesion() {
  const userStado = useAppSelector(selectUser);

  const [user, setuser] = useState<any>(false);

  useEffect(() => {
    let userJSON = window.localStorage.getItem("Login_userFit_Focus");
    if (userJSON) {
      if (userJSON.length > 3) {
        let userlogin = JSON.parse(userJSON);
        userlogin = jwtDecode(userlogin);
        setuser(userlogin);
      }
    }
  }, []);
  useEffect(() => {
    if (typeof userStado.user === "string") {
      let userstore: string = userStado.user;
      setuser(jwtDecode(userstore));
    }
  }, [userStado]);

  return user;
}
