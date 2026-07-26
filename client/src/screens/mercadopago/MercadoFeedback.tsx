import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useToken } from '@/app/hooks';
import {
  sync_payment,
  verify_payment,
} from '@/features/mercadopago/mercadopago';
import Error_page from '@/screens/error/Error_page';
import Premium_welcome from './premium_welcome/Premium_welcome';
import errors from '@/additional_info/errors';
import Loading from '@/screens/loading/Loading';
import { useSelector } from 'react-redux';
import type { RootState } from '@/app/store';

export default function MercadoFeedback() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useToken();
  const mercadoData = useSelector((state: RootState) => state.mercadopago);
  const [started, setStarted] = useState(false);
  const numb_error = '400';

  const paymentId =
    searchParams.get('payment_id') ||
    searchParams.get('collection_id') ||
    params.payment_id ||
    null;

  const validPaymentId =
    paymentId &&
    paymentId !== 'feedback' &&
    paymentId !== 'null' &&
    paymentId !== 'undefined'
      ? paymentId
      : null;

  useEffect(() => {
    if (!token || started) return;
    setStarted(true);

    if (validPaymentId) {
      dispatch(verify_payment({ token, id: validPaymentId }));
    } else {
      // Localhost / sandbox often skips redirect query params — sync by user id
      dispatch(sync_payment(token));
    }
  }, [dispatch, token, validPaymentId, started]);

  useEffect(() => {
    if (mercadoData.payment === 'fulfilled') {
      const timer = window.setTimeout(() => navigate('/fitFocus'), 2500);
      return () => window.clearTimeout(timer);
    }
  }, [mercadoData.payment, navigate]);

  if (!token) {
    return (
      <Error_page
        error="Inicia sesión en Fit Focus y vuelve a /mercadopago/feedback para activar Premium."
        numb_error="401"
      />
    );
  }

  return (
    <Fragment>
      {mercadoData.payment === 'pending' ? (
        <Loading />
      ) : mercadoData.payment === 'rejected' ? (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-6 text-center">
          <Error_page error={errors.payment} numb_error={numb_error} />
          <button
            type="button"
            className="rounded bg-gray-800 px-4 py-2 text-white"
            onClick={() => {
              dispatch(sync_payment(token));
            }}
          >
            Reintentar activación de Premium
          </button>
          <button
            type="button"
            className="text-sm text-blue-700 underline"
            onClick={() => navigate('/mercadopago')}
          >
            Volver a planes
          </button>
        </div>
      ) : (
        <Premium_welcome />
      )}
    </Fragment>
  );
}
