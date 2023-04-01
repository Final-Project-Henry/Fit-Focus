import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import {
  Error,
  feedbackFooter,
  Response,
} from '../../features/counter/counterSlice'
import icon from '../admin/imgs/comments.png'
import { useAppDispatch, useAppSelector } from 'shared/customHooks/reduxHooks'
interface FeedbackUsuario {
  asunto: string
  comment: string
}

const Contactanos = () => {
  const dispatch = useAppDispatch()
  const [feedback, setFeedback] = useState<FeedbackUsuario>({
    asunto: '',
    comment: '',
  })

  const [error, setError] = useState({
    asunto: '',
    comment: '',
  })
  // useEffect(() => {
  //   if (response.response === 'Question sent succesfully') {
  //     Swal.fire({
  //       title:
  //         'Ya tu pregunta fue enviada correctamente, Nuestros equipo te respondera lo mas pronto posible',
  //       icon: 'success',
  //       showCancelButton: false,
  //       confirmButtonColor: '#230bf8',
  //       confirmButtonText: 'Aceptar',
  //     }).then(result => {
  //       dispatch(Response())
  //     })
  //   } else if (response.error == 'You already sent a question') {
  //     Swal.fire({
  //       title: 'Te responderemos lo mas rapido posible',
  //       imageUrl: icon,
  //       showCancelButton: false,
  //       confirmButtonColor: '#230bf8',
  //       confirmButtonText: 'Aceptar',
  //     }).then(result => {
  //       dispatch(Error())
  //     })
  //   }
  // }, [response.response, response.error])
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    setFeedback((pv: any) => ({
      ...pv,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (feedback.comment.length < 10) {
      Swal.fire({
        title: 'Su comentario debe tener mas de 10 caracteres',
        icon: 'info',
        showCancelButton: false,
        confirmButtonColor: '#230bf8',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
      }).then(result => {
        setError({ ...error, comment: 'border-red-600' })
      })
      return
    }

    if (feedback.comment.length > 300) {
      Swal.fire({
        title: 'Su comentario debe tener menos de 300 caracteres',
        icon: 'info',
        showCancelButton: false,
        confirmButtonColor: '#230bf8',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
      }).then(result => {
        setError({ ...error, comment: 'border-red-600' })
      })
      return
    }

    if (feedback.comment.length > 0 && feedback.asunto.length > 0) {
      Swal.fire({
        title: '¿Desea enviar tu opinion?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#006eff',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eviar opinion',
        cancelButtonText: 'Cancelar',
      }).then(result => {
        if (result.isConfirmed) {
          dispatch(
            feedbackFooter({
              asunto: feedback.asunto,
              comment: feedback.comment,
              token: '',
            }),
          )
          setFeedback({ comment: '', asunto: '' })
        }
      })
    }
  }

  return (
    <div>
      {/* ====== Contact Section Start */}
      <section className='bg-white py-20 lg:py-[120px] overflow-hidden relative z-10'>
        <div className='container'>
          <div className='flex flex-wrap lg:justify-between -mx-4'>
            <div className='w-full lg:w-1/2 xl:w-6/12 px-4'>
              <div className='max-w-[570px] mb-12 lg:mb-0'>
                <span className='block mb-4 text-base text-primary font-semibold'>
                  Danos tu opinión
                </span>
                <h2
                  className='
            text-gray-900
            mb-6
            uppercase
            font-bold
            text-[32px]
            sm:text-[40px]
            lg:text-[36px]
            xl:text-[40px]
            '
                >
                  Contactanos
                </h2>
                <p className='text-lg text-body-color leading-relaxed mb-9'>
                  Por este medio vas a poder realizar cualquier tipo de duda y/o
                  consulta sin costo adicional. Espere a ser respondido por
                  nuestro equipo técnico.
                  <span className='font-extralight text-xl  '>
                    ¡Muchas Gracias!
                  </span>
                </p>
                <div className='flex mb-8 max-w-[370px] w-full'>
                  <div
                    className='
               max-w-[60px]
               sm:max-w-[70px]
               w-full
               h-[60px]
               sm:h-[70px]
               flex
               items-center
               justify-center
               mr-6
               overflow-hidden
               bg-primary bg-opacity-5
               text-primary
               rounded
               '
                  >
                    <svg
                      width={24}
                      height={26}
                      viewBox='0 0 24 26'
                      className='fill-current'
                    >
                      <path d='M22.6149 15.1386C22.5307 14.1704 21.7308 13.4968 20.7626 13.4968H2.82869C1.86042 13.4968 1.10265 14.2125 0.97636 15.1386L0.092295 23.9793C0.0501967 24.4845 0.21859 25.0317 0.555377 25.4106C0.892163 25.7895 1.39734 26 1.94462 26H21.6887C22.1939 26 22.6991 25.7895 23.078 25.4106C23.4148 25.0317 23.5832 24.5266 23.5411 23.9793L22.6149 15.1386ZM21.9413 24.4424C21.8992 24.4845 21.815 24.5687 21.6466 24.5687H1.94462C1.81833 24.5687 1.69203 24.4845 1.64993 24.4424C1.60783 24.4003 1.52364 24.3161 1.56574 24.1477L2.4498 15.2649C2.4498 15.0544 2.61819 14.9281 2.82869 14.9281H20.8047C21.0152 14.9281 21.1415 15.0544 21.1835 15.2649L22.0676 24.1477C22.0255 24.274 21.9834 24.4003 21.9413 24.4424Z' />
                      <path d='M11.7965 16.7805C10.1547 16.7805 8.84961 18.0855 8.84961 19.7273C8.84961 21.3692 10.1547 22.6742 11.7965 22.6742C13.4383 22.6742 14.7434 21.3692 14.7434 19.7273C14.7434 18.0855 13.4383 16.7805 11.7965 16.7805ZM11.7965 21.2008C10.9966 21.2008 10.3231 20.5272 10.3231 19.7273C10.3231 18.9275 10.9966 18.2539 11.7965 18.2539C12.5964 18.2539 13.2699 18.9275 13.2699 19.7273C13.2699 20.5272 12.5964 21.2008 11.7965 21.2008Z' />
                      <path d='M1.10265 7.85562C1.18684 9.70794 2.82868 10.4657 3.67064 10.4657H6.61752C6.65962 10.4657 6.65962 10.4657 6.65962 10.4657C7.92257 10.3815 9.18552 9.53955 9.18552 7.85562V6.84526C10.5748 6.84526 13.7742 6.84526 15.1635 6.84526V7.85562C15.1635 9.53955 16.4264 10.3815 17.6894 10.4657H17.7315H20.6363C21.4782 10.4657 23.1201 9.70794 23.2043 7.85562C23.2043 7.72932 23.2043 7.26624 23.2043 6.84526C23.2043 6.50847 23.2043 6.21378 23.2043 6.17169C23.2043 6.12959 23.2043 6.08749 23.2043 6.08749C23.078 4.90874 22.657 3.94047 21.9413 3.18271L21.8992 3.14061C20.8468 2.17235 19.5838 1.62507 18.6155 1.28828C15.795 0.193726 12.2587 0.193726 12.0903 0.193726C9.6065 0.235824 8.00677 0.446315 5.60716 1.28828C4.681 1.58297 3.41805 2.13025 2.36559 3.09851L2.3235 3.14061C1.60782 3.89838 1.18684 4.86664 1.06055 6.04539C1.06055 6.08749 1.06055 6.12959 1.06055 6.12959C1.06055 6.21378 1.06055 6.46637 1.06055 6.80316C1.10265 7.18204 1.10265 7.68722 1.10265 7.85562ZM3.37595 4.15097C4.21792 3.3932 5.27038 2.93012 6.15444 2.59333C8.34355 1.79346 9.7749 1.62507 12.1745 1.58297C12.3429 1.58297 15.6266 1.62507 18.1525 2.59333C19.0365 2.93012 20.089 3.3511 20.931 4.15097C21.394 4.65615 21.6887 5.32972 21.7729 6.12959C21.7729 6.25588 21.7729 6.46637 21.7729 6.80316C21.7729 7.22414 21.7729 7.68722 21.7729 7.81352C21.7308 8.78178 20.8047 8.99227 20.6784 8.99227H17.7736C17.3526 8.95017 16.679 8.78178 16.679 7.85562V6.12959C16.679 5.7928 16.4685 5.54021 16.1738 5.41392C15.9213 5.32972 8.55405 5.32972 8.30146 5.41392C8.00677 5.49811 7.79628 5.7928 7.79628 6.12959V7.85562C7.79628 8.78178 7.1227 8.95017 6.70172 8.99227H3.79694C3.67064 8.99227 2.74448 8.78178 2.70238 7.81352C2.70238 7.68722 2.70238 7.22414 2.70238 6.80316C2.70238 6.46637 2.70238 6.29798 2.70238 6.17169C2.61818 5.32972 2.91287 4.65615 3.37595 4.15097Z' />
                    </svg>
                  </div>
                  <div className='w-full'>
                    <a
                      href='http://wa.me/+51917341261?text=Me encanta la app de Fit Focus y quisiera saber mas de ella'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <h4 className='font-bold text-gray-900 text-xl mb-1'>
                        Número telefónico
                      </h4>
                      <p className='text-base text-body-color'>
                        (+51) 917 341 261
                      </p>
                    </a>
                  </div>
                </div>
                <div className='flex mb-8 max-w-[370px] w-full'>
                  <div
                    className='
               max-w-[60px]
               sm:max-w-[70px]
               w-full
               h-[60px]
               sm:h-[70px]
               flex
               items-center
               justify-center
               mr-6
               overflow-hidden
               bg-primary bg-opacity-5
               text-primary
               rounded
               '
                  >
                    <svg
                      width={28}
                      height={19}
                      viewBox='0 0 28 19'
                      className='fill-current'
                    >
                      <path d='M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z' />
                    </svg>
                  </div>
                  <div className='w-full'>
                    <a
                      href='https://mail.google.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <h4 className='font-bold text-gray-900 text-xl mb-1'>
                        Correo
                      </h4>
                      <p className='text-base text-body-color'>
                        fitfocus@gmail.com
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/2 xl:w-5/12 px-4'>
              <div className='bg-white relative rounded-lg p-8 sm:p-12 shadow-lg'>
                <form>
                  <div className='mb-6'>
                    <input
                      type='text'
                      value={feedback.asunto}
                      placeholder='Asunto'
                      onChange={handleChange}
                      name='asunto'
                      className='
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  '
                    />
                  </div>
                  <div className='mb-6'>
                    <textarea
                      rows={6}
                      value={feedback.comment}
                      placeholder='Tu mensaje'
                      name='comment'
                      onChange={handleChange}
                      className='
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  resize-none
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  '
                    />
                  </div>
                  <div>
                    <button
                      onClick={handleSubmmit}
                      className='
                  w-full
                  text-white
                  bg-gray-900
                  rounded
                  border border-primary
                  p-3
                  transition
                  hover:bg-opacity-90
                  '
                    >
                      Enviar
                    </button>
                  </div>
                </form>
                <div>
                  <span className='absolute -top-10 -right-9 z-[-1]'>
                    <svg
                      width={100}
                      height={100}
                      viewBox='0 0 100 100'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z'
                        fill='#3056D3'
                      />
                    </svg>
                  </span>
                  <span className='absolute -right-10 top-[90px] z-[-1]'>
                    <svg
                      width={34}
                      height={134}
                      viewBox='0 0 34 134'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='31.9993'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 31.9993 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 31.9993 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 31.9993 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 31.9993 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 31.9993 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 31.9993 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 31.9993 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 31.9993 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 31.9993 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 31.9993 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 17.3333 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 17.3333 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 17.3333 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 17.3333 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 17.3333 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 17.3333 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 17.3333 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 17.3333 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 17.3333 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 17.3333 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 2.66536 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 2.66536 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 2.66536 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 2.66536 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 2.66536 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 2.66536 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 2.66536 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 2.66536 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 2.66536 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 2.66536 1.66665)'
                        fill='#13C296'
                      />
                    </svg>
                  </span>
                  <span className='absolute -left-7 -bottom-7 z-[-1]'>
                    <svg
                      width={107}
                      height={134}
                      viewBox='0 0 107 134'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='104.999'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 104.999 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 104.999 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 104.999 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 104.999 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 104.999 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 104.999 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 104.999 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 104.999 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 104.999 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 104.999 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 90.3333 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 90.3333 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 90.3333 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 90.3333 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 90.3333 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 90.3333 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 90.3333 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 90.3333 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 90.3333 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 90.3333 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 75.6654 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 31.9993 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 75.6654 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 31.9993 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 75.6654 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 31.9993 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 75.6654 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 31.9993 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 75.6654 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 31.9993 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 75.6654 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 31.9993 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 75.6654 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 31.9993 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 75.6654 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 31.9993 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 75.6654 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 31.9993 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 75.6654 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 31.9993 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 60.9993 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 17.3333 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 60.9993 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 17.3333 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 60.9993 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 17.3333 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 60.9993 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 17.3333 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 60.9993 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 17.3333 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 60.9993 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 17.3333 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 60.9993 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 17.3333 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 60.9993 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 17.3333 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 60.9993 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 17.3333 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 60.9993 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 17.3333 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 46.3333 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 2.66536 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 46.3333 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 2.66536 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 46.3333 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 2.66536 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 46.3333 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 2.66536 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 46.3333 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 2.66536 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 46.3333 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 2.66536 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 46.3333 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 2.66536 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 46.3333 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 2.66536 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 46.3333 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 2.66536 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 46.3333 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 2.66536 1.66665)'
                        fill='#13C296'
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contactanos
