import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector, useSesion, useToken } from '../../app/hooks';
import { get_payment,  verify_payment } from '../../features/mercadoPagoSlice/mercadoPagoSlice';

export default function MercadoPago() {
    const id = useParams().payment_id;
    const token = useToken();
    const mercadoData = useAppSelector(state=>state.mercadopago);
    const dispatch = useAppDispatch();
    const [pay, setPay] = useState(false);

    const onClick =()=> {
        setPay(true);
        console.log(token);
        console.log(mercadoData);
        dispatch(get_payment({token:token, id:null}));
    }
    
    useEffect(()=>{
        if(id){
            dispatch(verify_payment({token, id}))
        }
    },[pay, mercadoData])
  return (
    <div>
        <button onClick={onClick}>Solictar Pago</button><br/>
        {pay&&mercadoData.id.length>0&&<a href={`https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=
${mercadoData.id}`}>PAGAR</a>}
    </div>
  )
}
