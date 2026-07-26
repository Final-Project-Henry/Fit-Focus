import Swal from 'sweetalert2';
import ContactForm from '@/components/forms/ContactForm';
import { useAppDispatch, useToken } from '@/app/hooks';
import { feedbackFooter } from '@/features/user/userSlice';
import { ContactInput } from '@/shared/validators/schemas';

/** Unified contact screen (replaces duplicate Contact / Contactanos entry points). */
export default function ContactScreen() {
  const dispatch = useAppDispatch();
  const token = useToken();

  const onSubmit = async (data: ContactInput) => {
    if (token) {
      dispatch(
        feedbackFooter({
          token,
          name: data.name,
          email: data.email,
          asunto: data.asunto,
          comment: data.comment,
        }),
      );
    }

    await Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado',
      text: 'Gracias por contactarnos.',
    });
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center px-6 py-12">
      <h1 className="mb-2 text-3xl font-bold text-gray-800">Contáctanos</h1>
      <p className="mb-8 text-center text-gray-600">
        Envíanos tu consulta o comentario. Te responderemos lo antes posible.
      </p>
      <ContactForm onSubmit={onSubmit} />
    </div>
  );
}
