import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { http } from '@/shared/api/http';
import {
  newPasswordSchema,
} from '@/shared/validators/schemas';
import { z } from 'zod';

type FormData = z.infer<typeof newPasswordSchema>;

interface Props {
  loading_icon: string;
  icon: string;
}

const ValidadUser = ({ loading_icon, icon }: Props) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await http.post('/newpassword', data);
      setResponse(String(res.data));
    } catch {
      setResponse('An error has ocurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full w-full content-center justify-center">
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
              Verificación
            </h2>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                email
              </label>
              <input
                className="block w-full appearance-none border bg-gray-200 px-4 text-gray-700 focus:outline-none"
                type="email"
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            {response && (
              <p className="m-2 text-gray-500">{response}</p>
            )}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-gray-700 px-4 py-2 font-bold text-white"
              >
                {loading ? (
                  <span className="flex justify-center">
                    <img className="mx-2 w-5 animate-spin" src={loading_icon} />
                    Loading...
                  </span>
                ) : (
                  'Enviar'
                )}
              </button>
            </div>
            <div className="mt-4 flex justify-center">
              <Link to="/auth/login" className="text-blue-700 hover:underline">
                Volver al login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ValidadUser;
