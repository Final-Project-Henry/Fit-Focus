import { useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../app/hooks'
import { verify_payment } from '../../features/mercadopago/mercadopago'
import Error_page from '../ErrorPage/ErrorPage'
import Premium_welcome from './premium_welcome/Premium_welcome'
// import errors from '../../additional_info/errors'
import Loading from '../loading/Loading'
import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'

export default function Mercadoresponse() {
  const id = useParams().payment_id
  const dispatch = useAppDispatch()
  const mercadoData = useSelector((state: RootState) => state.mercadopago)
  const numb_error = 400

  useEffect(() => {
    const userJSON = window.localStorage.getItem('Login_userFit_Focus')
    let userlogin
    if (userJSON) {
      if (userJSON.length > 3) {
        userlogin = JSON.parse(userJSON)
      }
    }
    if (id) {
      dispatch(verify_payment({ token: userlogin.token, id: id }))
    }
  }, [])
  return (
    <Fragment>
      {mercadoData.payment == 'pending' ? (
        <Loading />
      ) : mercadoData.payment == 'rejected' ? (
        <div></div>
      ) : (
        // <Error_page errorMessage={errors.payment} numberError={numb_error} />
        <Premium_welcome />
      )}
    </Fragment>
  )
}
