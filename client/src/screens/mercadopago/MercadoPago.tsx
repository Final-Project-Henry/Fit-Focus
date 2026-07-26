import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector, useToken } from '@/app/hooks';
import { get_payment, sync_payment } from '@/features/mercadopago/mercadopago';
import './MercadoPago.css';
import Plan_normal from './Plans/Plan_normal';
import Plan_premium from './Plans/Plan_premium';

export default function MercadoPago() {
  const token = useToken();
  const navigate = useNavigate();
  const mercadoData = useAppSelector((state) => state.mercadopago);
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const [syncing, setSyncing] = useState(false);
  const [syncError, setSyncError] = useState('');

  useEffect(() => {
    if (user?.plan === 'premium') {
      navigate('/fitFocus');
    }
  }, [user, navigate]);

  useEffect(() => {
    const userJSON = window.localStorage.getItem('Login_userFit_Focus');
    let storedToken: { token: string } | null = null;
    if (userJSON && userJSON.length > 3) {
      storedToken = JSON.parse(userJSON);
    }
    if (storedToken && !mercadoData.checkoutUrl && mercadoData.status !== 'rejected') {
      dispatch(get_payment({ token: storedToken.token, id: null }));
    }
  }, [dispatch, mercadoData.checkoutUrl, mercadoData.status]);

  const onSyncPayment = async () => {
    if (!token) return;
    setSyncing(true);
    setSyncError('');
    try {
      await dispatch(sync_payment(token)).unwrap();
      navigate('/mercadopago/feedback');
    } catch {
      setSyncError(
        'No encontramos un pago aprobado todavía. Si ya pagaste, espera unos segundos y reintenta.',
      );
    } finally {
      setSyncing(false);
    }
  };

  return (
    <Fragment>
      <div className={'container'}>
        <div className={'tittle'}>
          <h1 style={{ color: '#111827' }}>Tu trayectoria con Fit Focus</h1>
          <h1 style={{ color: '#111827' }}>comienza ahora</h1>
        </div>
        <div className={'planes'}>
          <div>{token.length === 0 && <Plan_normal />}</div>
          <div>
            <Plan_premium url={mercadoData.checkoutUrl} />
          </div>
        </div>
        {mercadoData.status === 'rejected' && (
          <p style={{ color: '#b91c1c', textAlign: 'center', marginTop: '1rem' }}>
            No se pudo iniciar el pago con Mercado Pago. Revisa el Access Token en la API.
          </p>
        )}
        {token.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <p style={{ color: '#374151', marginBottom: '0.75rem' }}>
              ¿Ya pagaste en Mercado Pago y no volviste a la app? Activa Premium aquí:
            </p>
            <button
              type="button"
              className="rounded bg-[#111827] px-4 py-2 font-semibold text-white disabled:opacity-60"
              disabled={syncing}
              onClick={onSyncPayment}
            >
              {syncing ? 'Verificando pago…' : 'Ya pagué — activar Premium'}
            </button>
            {syncError && (
              <p style={{ color: '#b91c1c', marginTop: '0.75rem' }}>{syncError}</p>
            )}
          </div>
        )}
      </div>
    </Fragment>
  );
}
