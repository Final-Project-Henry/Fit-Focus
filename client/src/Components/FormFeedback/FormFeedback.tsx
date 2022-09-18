import axios from "axios";
import React, { useCallback } from "react";
import { useState } from "react";
import { useToken } from "../../app/hooks";



interface FeedbackUsuario {
  comment: string;
  email: string;
}


const FormFeedback = () => {
 const token = useToken()
  const [feedback, setFeedback] = useState<FeedbackUsuario>({
    comment: "",
    email: "",
  });

  const handleSubmmit = (event: React.FormEvent): void => {
    const { comment, email } = feedback;
    if (comment && !email) {
      window.alert("Debes agregar tu email");
    }
    if (!comment && email) {
      window.alert("Debes realizar tu comentario");
    }
    if (!comment && !email) {
      window.alert("Debes ingresar tu comentario y tu email");
    }
    if (comment && email) {
      window.alert("Tu comentario se ha cargado con éxito");

      const config={
        headers: { Authorization: `Bearer ${token}` }
      }
  
      axios.put("http://localhost:3001/auth/userfeedback",feedback,config)
   
      
    }
    event.preventDefault();

  };

  return (
    <div>
      <form onSubmit={handleSubmmit}>
        <textarea
          id="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
          onChange={(event) =>
            setFeedback({
              comment: event.currentTarget?.value,
              email: feedback.email,
            })
          }
        ></textarea>

        <input
          type="email"
          placeholder="email..."
          id="Nombre"
          onChange={(event) =>
            setFeedback({
              email: event.currentTarget?.value,
              comment: feedback.comment,
            })
          }
        ></input>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormFeedback;
