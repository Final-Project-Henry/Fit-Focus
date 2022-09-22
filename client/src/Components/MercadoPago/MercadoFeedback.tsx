import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector, useToken } from '../../app/hooks';
import { verify_payment } from '../../features/mercadopago/mercadopago';

export default function Mercadoresponse() {
  const id = useParams().payment_id;
  const token = useToken();
  const dispatch = useAppDispatch();
  const mercadoData = useAppSelector(state=>state.mercadopago);

  useEffect(()=>{
    if(id){
      dispatch(verify_payment({token: token, id:id}));
      console.log(mercadoData);
    }
  },[mercadoData]);
  return (
    <div>
      {mercadoData.premium&&(<h1>Ya eres premium</h1>)}
    </div>
  )
}