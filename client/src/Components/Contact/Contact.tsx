import React, { useState } from "react";

interface CommentsProps {
  email: string;
  comment: string;
}

const ContactUs = () => {
  const [user, setUser] = useState<CommentsProps>({} as CommentsProps);

  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmmit = (e: any) => {
    console.log(user.email);
    console.log(user.comment);
  };

  return (
    <form
      onSubmit={handleSubmmit}
      style={{ textAlign: "center", width: "25%", height: "100%" }}
    >
      <input
        type="email"
        name="email"
        placeholder="Correo..."
        id="Nombre"
        required
        className="p-2 bg-white w-full mt-4 rounded-lg"
        value={user.email}
        onChange={handleChange}
      />

      <textarea
        name="comment"
        className="block rounded-lg w-full  mt-4 h-20 resize-none"
        placeholder="Mensaje..."
        required
        rows={8}
        value={user.comment}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="text-white active:scale-90 duration-100  font-medium rounded-lg text-sm px-7 py-1.5  mt-4 bg-amber-700 hover:bg-amber-800 focus:outline-none"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactUs;
