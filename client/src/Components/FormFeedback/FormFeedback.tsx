import axios from "axios";
import React, { useCallback } from "react"
import { useState } from "react";



interface FeedbackUsuario{
comment: string
email: string

}

const FormFeedback = ()=>{
    
    const [feedback, setFeedback] = useState<FeedbackUsuario>({
    comment: "",
    email:""

    
    });
        
    const handleSubmmit = (event:React.FormEvent):void =>{
        const {comment, email} = feedback
        if(comment && !email){
            window.alert("Debes agregar tu email") }
            if(!comment && email){
                window.alert("Debes realizar tu comentario") }
                if(!comment && !email){
                    window.alert("Debes ingresar tu comentario y tu email") 
        }
if(comment && email){window.alert("Tu comentario se ha cargado con éxito")}
axios.put("http://localhost:3001/userfeedback", feedback)
        event.preventDefault()
        

        console.log(feedback)

          }
        

    return(
        <div>
        Dejanos tu opinión
        <form onSubmit={handleSubmmit}>
          <textarea onChange={event => setFeedback({comment: event.currentTarget?.value, email:feedback.email })} ></textarea>
          <input type ="email" placeholder="email..." id="Nombre" onChange={event => setFeedback({ email: event.currentTarget?.value, comment:feedback.comment   })}></input>
          <button type="submit" >
            Enviar
          </button>
        </form>
        </div>

    )

}

export default FormFeedback

    

   