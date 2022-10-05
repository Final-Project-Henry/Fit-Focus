import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector, useToken } from "../../app/hooks";
import {
  getProfileInfo,
  selectUser,
  userFeedback,
} from "../../features/counter/counterSlice";
import opiniones from "../assets/contact/opiniones.png";
import Swal from "sweetalert2";

interface CommentsProps {
  email: string;
  comment: string;
}

const ContactUs = () => {
  const token = useToken();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(getProfileInfo(token));
  }, [dispatch, token]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentsProps>();

  const onSubmit = (data: CommentsProps) => {
    Swal.fire({
      title: "¿Quieres enviar tu opinion?",
      text: "Cualquier persona que visite la app podra verlo",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Enviar",
    }).then((result: any) => {
      if (result.isConfirmed) {
        dispatch(userFeedback({ ...data, token: token }));
      }
    });
  };

  useEffect(() => {
    if (user.status === "success") {
      Swal.fire("Enviado", "Tu opinion fue enviada con exito", "success");
    }
  }, [user.status]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "5vh",
        alignItems: "center",
      }}
    >
      <img src={opiniones} style={{ width: "100%", height: "500px" }}></img>
      <h1
        className="p-5 w-[30%] m-auto bg-[#11182873] font-normal text-white text-5xl"
        style={{
          position: "absolute",
          top: "300px",
          left: "35vw",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Opiniones
      </h1>
      <div
        style={{
          display: "flex",
          width: "90vw",
          justifyContent: "center",
          marginBottom: "10vh",
          boxShadow: "0 0 50px 5px",
        }}
      >
        <div
          style={{
            width: "40vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <h1 style={{ fontSize: "2rem" }}>
            En Fit Focus nos interesa tu opinion!
          </h1>
          <p style={{ width: "35vw", fontSize: "1rem" }}>
            Te agradecemos que dediques un momento para darnos tu opinion, su
            objetivo es ayudarnos a conocerte mejor y encontrar formas de seguir
            mejorando, y que asi, pueda seguir ayudandote a cambiar tu estilo de
            vida. La mejor parte de esto es que, con tu apoyo, esta app te sera
            de mas ayuda en tu meta por tener un vida mas sana.
          </p>
        </div>
        <div
          style={{
            width: "50vw",
            backgroundColor: "#111827",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30vh",
          }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ textAlign: "center", width: "85%", height: "100%" }}
          >
            <input
              type="email"
              placeholder="Correo..."
              id="Nombre"
              className="p-2 bg-white w-full mt-6 rounded-lg"
              disabled
              value={user?.user?.email}
              {...register("email")}
            />
            <textarea
              className="block rounded-lg w-full  mt-4 h-20 resize-none"
              placeholder="Mensaje..."
              rows={8}
              {...register("comment", { required: true })}
            />
            {errors.comment && (
              <p className="color-red">Mensaje es requerido</p>
            )}

            <button
              disabled={user?.user?.feedback}
              type="submit"
              className="text-white active:scale-90 duration-100  font-medium rounded-lg text-sm px-7 py-1.5  mt-4 bg-amber-700 hover:bg-amber-800 focus:outline-none"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
