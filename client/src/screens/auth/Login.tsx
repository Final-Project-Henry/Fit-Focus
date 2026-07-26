import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  Activecuenta,
  Error,
  Estado,
  Response,
  Status,
  User_Login_State,
  selectUser,
} from '@/features/user/userSlice';
import GoogleAuth from '@/screens/google-auth/GoogleAuth';
import {
  LoginInput,
  loginSchema,
} from '@/shared/validators/schemas';

interface Props {
  loading_icon?: string;
  icon?: string;
}

const Login = ({ loading_icon, icon }: Props) => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [activar, setActivar] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  useEffect(() => {
    dispatch(Error());
    dispatch(Status('none'));
  }, [dispatch]);

  useEffect(() => {
    if (user.userToken?.length > 50) {
      dispatch(Estado(''));
      const time = new Date();
      const token = user.userToken;
      window.localStorage.setItem(
        'Login_userFit_Focus',
        JSON.stringify({ token, time }),
      );
    }
  }, [user.userToken, dispatch]);

  useEffect(() => {
    if (
      user.error === 'User desactivated' ||
      user.error === 'User google desactivated'
    ) {
      Swal.fire({
        title: 'Esta cuenta esta desactivada.',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#4d83f8',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Activar cuenta',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          setActivar(true);
          dispatch(Error());
          reset({ email: '', password: '' });
          if (user.error === 'User google desactivated') {
            dispatch(Estado('Activar'));
          }
        }
      });
    }
  }, [user.error, dispatch, reset]);

  useEffect(() => {
    if (user.response === 'Account activated') {
      Swal.fire({
        title: 'Su cuenta se activo correctamente',
        icon: 'success',
        showConfirmButton: true,
        backdrop: `#1919247f`,
        confirmButtonText: 'Aceptar',
      }).then((result) => {
        if (result.isConfirmed) {
          setActivar(false);
          dispatch(Response());
        }
      });
    }
  }, [user.response, dispatch]);

  const onSubmit = (data: LoginInput) => {
    if (activar) {
      dispatch(Activecuenta(data));
    } else {
      dispatch(User_Login_State(data));
    }
  };

  return (
    <div className="flex h-full w-full content-center justify-center">
      {typeof user.userToken === 'string' && user.userToken.length > 50 && (
        <Navigate to="/fitFocus" />
      )}
      <div className="flex flex-1 content-center justify-center py-6">
        <div className="mx-auto flex h-auto max-w-sm overflow-hidden bg-white shadow-2xl sm:mt-0 lg:max-w-[68%]">
          <div
            className="hidden bg-center bg-no-repeat lg:block lg:w-[50%] lg:bg-[length:350px_200px]"
            style={{ backgroundImage: `url(${icon})`, backgroundSize: 'cover' }}
          >
            <h1 className="ml-[7vw] mt-[30vh] w-[20vw] text-[2rem] text-white">
              “La clave para iniciar algo es dejar de hablar y ponerse a hacerlo”
            </h1>
          </div>
          <form
            className="w-full p-8 lg:w-1/2"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <h2 className="text-center text-2xl font-semibold text-gray-700">
              {activar ? 'Activar cuenta' : 'Inicia sesion'}
            </h2>
            <p className="text-center text-xl text-gray-600">
              {!activar && 'Bienvenido de vuelta!'}
            </p>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Correo
              </label>
              <input
                className="block w-full appearance-none border bg-gray-200 px-4 text-gray-700 focus:outline-none"
                type="email"
                placeholder="Alex@gmail.com"
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
              {user.error?.includes('User') && (
                <label className="text-red-500">Esta cuanta no existe</label>
              )}
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Contraseña
                </label>
                <a href="/auth/nuevaContraseña" className="text-xs text-gray-500">
                  Recuperar Contraseña
                </a>
              </div>
              <input
                className="block w-full appearance-none border bg-gray-200 px-4 text-gray-700 focus:outline-none"
                type="password"
                autoComplete="off"
                placeholder="••••••••"
                {...register('password')}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
              {user.error?.includes('Password') && (
                <label className="text-red-500">Contraseña incorrecta</label>
              )}
            </div>
            <div className="mt-[50px] xl:mt-[133px]">
              <button
                type="submit"
                className="w-full bg-gray-700 px-4 py-2 font-bold text-white"
              >
                {user.status == 'none' ? (
                  activar ? (
                    'Recuperar cuenta'
                  ) : (
                    'iniciar sesión'
                  )
                ) : (
                  <span className="flex justify-center">
                    <img className="mx-2 w-5 animate-spin" src={loading_icon} />
                    Loading...
                  </span>
                )}
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="w-1/5 border-b lg:w-1/4" />
              <p className="text-center text-xs uppercase text-gray-500">
                or login with google
              </p>
              <span className="w-1/5 border-b lg:w-1/4" />
            </div>
            <div className="mt-3 flex justify-center">
              <GoogleAuth />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="w-1/5 border-b md:w-1/4" />
              <Link
                to="/auth/sing-up"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Crea una cuenta
              </Link>
              <span className="w-1/5 border-b md:w-1/4" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
