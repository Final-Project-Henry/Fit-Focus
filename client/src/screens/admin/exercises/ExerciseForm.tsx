import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { add_exercise } from '@/features/admin/admin';
import {
  ExerciseFormInput,
  exerciseFormSchema,
} from '@/shared/validators/schemas';

export default function ExerciseForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExerciseFormInput>({
    resolver: zodResolver(exerciseFormSchema),
  });
  const dispatch = useAppDispatch();
  const admin = useAppSelector((state) => state.admin);

  useEffect(() => {
    if (admin.load_exer === 'loaded') {
      alert('se cargo el ejercicio con exito');
    }
  }, [admin]);

  const onSubmit = (data: ExerciseFormInput) => {
    dispatch(add_exercise(data));
    reset();
  };

  return (
    <div style={{ margin: '0 auto' }}>
      <div className="m-auto mt-6 w-full overflow-hidden bg-white px-24 py-4 shadow-md sm:max-w-md sm:rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" noValidate>
          <h2 className="p-4 text-md font-semibold text-black">
            Crear nuevo ejercicio:
          </h2>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              id="name"
              {...register('name')}
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">
              Dificultad
            </label>
            <select
              id="difficulty"
              {...register('difficulty')}
              className="mt-1 block w-full rounded-md border-gray-300 text-gray-500 shadow-sm"
            >
              <option value="">Seleccionar dificultad</option>
              <option value="easy">Fácil</option>
              <option value="medium">Intermedio</option>
              <option value="hard">Difícil</option>
            </select>
            {errors.difficulty && (
              <p className="text-sm text-red-500">{errors.difficulty.message}</p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="muscles" className="block text-sm font-medium text-gray-700">
              Musculos
            </label>
            <select
              id="muscles"
              {...register('muscles')}
              className="mt-1 block w-full rounded-md border-gray-300 text-gray-500 shadow-sm"
            >
              <option value="">Seleccionar musculos</option>
              <option value="upper_body">Parte superior</option>
              <option value="lower_body">Parte inferior</option>
              <option value="stretching">Estiramiento</option>
              <option value="functional">Funcional</option>
              <option value="abs">Abdominales</option>
            </select>
            {errors.muscles && (
              <p className="text-sm text-red-500">{errors.muscles.message}</p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
              Género
            </label>
            <select
              id="genre"
              {...register('genre')}
              className="mt-1 block w-full rounded-md border-gray-300 text-gray-500 shadow-sm"
            >
              <option value="">Seleccionar género</option>
              <option value="man">Hombre</option>
              <option value="woman">Mujer</option>
              <option value="both">Ambos</option>
            </select>
            {errors.genre && (
              <p className="text-sm text-red-500">{errors.genre.message}</p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="video" className="block text-sm font-medium text-gray-700">
              Video
            </label>
            <input
              id="video"
              {...register('video')}
              type="url"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="premium" className="block text-sm font-medium text-gray-700">
              Premium
            </label>
            <select
              id="premium"
              {...register('premium')}
              className="mt-1 block w-full rounded-md border-gray-300 text-gray-500 shadow-sm"
            >
              <option value="false">No</option>
              <option value="true">Si</option>
            </select>
          </div>
          <div className="mt-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Descripción
            </label>
            <textarea
              rows={5}
              id="description"
              {...register('description')}
              className="mt-1 block w-full resize-none rounded-md border-gray-300 shadow-sm"
            />
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description.message}</p>
            )}
          </div>
          <div className="mb-4 mt-5 flex items-center justify-center">
            <button
              type="submit"
              className="ml-4 w-full rounded-md bg-amber-900 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white"
            >
              Crear
            </button>
            <button
              type="button"
              className="ml-4 w-full rounded-md bg-amber-900 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white"
              onClick={() => reset()}
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
