import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import errors from '../../additional_info/errors';
import { useAppDispatch, useAppSelector, useToken } from '../../app/hooks';
import { getProfileInfo } from '../../features/counter/counterSlice';
import Error_page from '../error/Error_page';
import Loading from '../loading/Loading';
import LateralBar from './LateralBar';


export default function Dashboard() {

  const token2 = useToken();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    let userJSON = window.localStorage.getItem("Login_userFit_Focus");
    let token;
    if (userJSON) {
      if (userJSON.length > 3) {
        token = JSON.parse(userJSON);
      }
    }
    if(user.status!=='none')dispatch(getProfileInfo(token.token));
  }, [user, token2])

  return (
    <div>{
      !token2 ?
        <Error_page error={errors.forbidden_access} numb_error={'400'} />
        :
        !user.user ?
          <Loading />
          :
          user.user.admin
            ?
            <div style={{display:"flex"}}>
              <div>
                <LateralBar />
              </div>
              <Outlet />
            </div>
            :
            <Error_page error={errors.forbidden_access} numb_error={'400'} />
    }
    </div>
  )
}
