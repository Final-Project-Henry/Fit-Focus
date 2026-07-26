import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  Error,
  Estado,
  User_Register_State,
  selectUser,
} from '@/features/user/userSlice';
import GoogleAuth from '@/screens/google-auth/GoogleAuth';
import {
  RegisterInput,
  registerSchema,
} from '@/shared/validators/schemas';

interface Props {
  icon?: string;
  loading_icon?: string;
}

const SingUp = ({ loading_icon, icon }: Props) => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '' },
  });

  useEffect(() => {
    dispatch(Error());
  }, [dispatch]);

  useEffect(() => {
    if (user.userToken?.length > 50) {
      const time = new Date();
      const token = user.userToken;
      window.localStorage.setItem(
        'Login_userFit_Focus',
        JSON.stringify({ token, time }),
      );
    }
  }, [user.userToken]);

  const onSubmit = (data: RegisterInput) => {
    dispatch(Estado(''));
    dispatch(User_Register_State(data));
  };

  return (
    <div className="flex h-full w-full content-center justify-center">
      {user.user && <Navigate to="/auth/login" />}
      {typeof user.userToken === 'string' && user.userToken.length > 50 && (
        <Navigate to="/fitFocus" />
      )}
      <div className="flex flex-1 content-center justify-center py-6">
        <div className="mx-auto flex h-auto max-w-md overflow-hidden bg-white shadow-2xl lg:max-w-[75%] xl:max-w-[68%]">
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
              Registrate
            </h2>
            <p className="text-center text-xl text-gray-600">
              Bienvenido a la familia!!
            </p>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                className="block w-full appearance-none border bg-gray-200 px-4 text-gray-700 focus:outline-none"
                autoComplete="off"
                placeholder="Alex"
                {...register('name')}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
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
                <label className="text-red-500">Esta cuanta ya existe</label>
              )}
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Contraseña
              </label>
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
            </div>
            <div className="mt-4">
              <label className="mb-[8px] ml-2 text-sm font-medium text-gray-600">
                Al registrarse, usted está aceptando los terminos y condiciones
                de la aplicacion
              </label>
              <button
                type="submit"
                className="w-full bg-gray-700 px-4 py-2 font-bold text-white"
              >
                {user.status == 'none' ? (
                  'Registrarse'
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
                o registrate con google
              </p>
              <span className="w-1/5 border-b lg:w-1/4" />
            </div>
            <div className="mt-3 flex justify-center">
              <GoogleAuth />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="w-1/5 border-b md:w-1/4" />
              <Link
                to="/auth/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                inicia sesion
              </Link>
              <span className="w-1/5 border-b md:w-1/4" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
