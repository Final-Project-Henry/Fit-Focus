import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ContactInput,
  contactSchema,
} from '@/shared/validators/schemas';

type Props = {
  onSubmit: (data: ContactInput) => void | Promise<void>;
  submitLabel?: string;
};

export default function ContactForm({
  onSubmit,
  submitLabel = 'Enviar',
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      asunto: '',
      comment: '',
    },
  });

  return (
    <form
      className="flex w-full max-w-lg flex-col gap-4"
      onSubmit={handleSubmit(async (data) => {
        await onSubmit(data);
        reset();
      })}
      noValidate
    >
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium">
          Nombre
        </label>
        <input
          id="contact-name"
          className="w-full rounded border border-gray-300 px-3 py-2"
          {...register('name')}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          className="w-full rounded border border-gray-300 px-3 py-2"
          {...register('email')}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="contact-asunto" className="mb-1 block text-sm font-medium">
          Asunto
        </label>
        <input
          id="contact-asunto"
          className="w-full rounded border border-gray-300 px-3 py-2"
          {...register('asunto')}
        />
        {errors.asunto && (
          <p className="mt-1 text-sm text-red-500">{errors.asunto.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="contact-comment" className="mb-1 block text-sm font-medium">
          Comentario
        </label>
        <textarea
          id="contact-comment"
          className="w-full rounded border border-gray-300 px-3 py-2"
          rows={4}
          {...register('comment')}
        />
        {errors.comment && (
          <p className="mt-1 text-sm text-red-500">{errors.comment.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded bg-blue-600 px-4 py-2 font-semibold text-white disabled:opacity-60"
      >
        {submitLabel}
      </button>
    </form>
  );
}
