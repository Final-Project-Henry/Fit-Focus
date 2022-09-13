import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import {useEffect } from "react"
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useScript(url:string, onload:any){
  useEffect(() =>{
    let existing = document.getElementById("googleidentityservice");
    let script:any;
    
    if (existing===null) {
      script= document.createElement('script');
      script.src=url;
      script.onload=onload;
      document.head.appendChild(script);
      
      return ()=> document.head.removeChild(script);     
    }
  },[url, onload])
}