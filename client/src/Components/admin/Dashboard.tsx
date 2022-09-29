import React, { useEffect } from 'react';
import {Outlet} from 'react-router-dom';
import errors from '../../additional_info/errors';
import { useAppDispatch, useAppSelector, useToken } from '../../app/hooks';
import { getProfileInfo } from '../../features/counter/counterSlice';
import Error_page from '../error/Error_page';


export default function Dashboard() {

  const token2 = useToken();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state=>state.user);
  
  console.log(user);

  useEffect(()=>{
    let userJSON = window.localStorage.getItem("Login_userFit_Focus");
    if (userJSON) {
      let token;
      if (userJSON.length > 3) {
        token = JSON.parse(userJSON);
      }
      dispatch(getProfileInfo(token));
    }
  }, [user, token2])

  return (
    <div>{
        user.user?.admin?
        <Outlet />
        :
        <Error_page error={errors.forbidden_access} numb_error={'400'}/>
        }
    </div>
  )
}
