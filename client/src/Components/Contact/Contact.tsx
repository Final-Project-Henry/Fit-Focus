import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector, useToken } from "../../app/hooks";
import {
  getProfileInfo,
  selectUser,
  userFeedback,
} from "../../features/counter/counterSlice";
import Swal from "sweetalert2";

interface CommentsProps {
  email: string;
  comment: string;
}

const ContactUs = () => {
  const token = useToken();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  console.log(user);

  useEffect(() => {
    dispatch(getProfileInfo(token));
  }, [dispatch, token]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentsProps>();

  const onSubmit = (data: CommentsProps) => {
    dispatch(userFeedback({ ...data, token: token }));
    console.log(token);
    alert("Mensaje enviado");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ textAlign: "center", width: "25%", height: "100%" }}
    >
      <input
        type="email"
        placeholder="Correo..."
        id="Nombre"
        className="p-2 bg-white w-full mt-4 rounded-lg"
        disabled
        value={user?.user?.email}
        {...register("email", { required: true })}
      />
      {errors.email && <p className="color-red">Email es requerido</p>}

      <textarea
        className="block rounded-lg w-full  mt-4 h-20 resize-none"
        placeholder="Mensaje..."
        rows={8}
        {...register("comment", { required: true })}
      />
      {errors.comment && <p className="color-red">Mensaje es requerido</p>}

      <button
        disabled={user?.user?.feedback}
        type="submit"
        className="text-white active:scale-90 duration-100  font-medium rounded-lg text-sm px-7 py-1.5  mt-4 bg-amber-700 hover:bg-amber-800 focus:outline-none"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactUs;
