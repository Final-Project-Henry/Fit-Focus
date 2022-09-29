import React, { useState } from "react";
import Axios from "axios";

const ProfileEdit = () => {
  // Constantes
  const CLOUDINARY_URL: string =
    "https://api.cloudinary.com/v1_1/dxosrzeos/fit-focus/upload";
  const CLOUD_NAME = "dxosrzeos";
  const UPLOAD_PRESET = "ozsxmcwm";

  const uploadImage = async (files: any) => {
    const formData: FormData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("cloud_name", CLOUD_NAME);

    await Axios.post(CLOUDINARY_URL, formData).then((response) =>
      console.log(response)
    );
  };

  return (
    <div>
      <h2>Detalles del usuario</h2>
      <form>
        <input
          id="photo"
          name="image"
          type="file"
          onChange={(event) => uploadImage(event.target.files)}
        />

        <button onClick={uploadImage} type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
