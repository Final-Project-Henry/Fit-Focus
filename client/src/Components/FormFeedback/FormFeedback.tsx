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
            window.alert("Debes agregar tu email") 
            if(!comment && email)
                window.alert("Debes realizar tu comentario") 
                if(!comment && !email)
                    window.alert("Debes ingresar tu comentario y tu email") 
        }
        event.preventDefault()
        console.log(feedback)

          }
        

    return(
        <div>
        Dejanos tu opinión
        <form onSubmit={handleSubmmit}>
          <input type="textarea" onChange={event => setFeedback({comment: event.currentTarget?.value, email:"" })} ></input>
          <input type ="email" placeholder="email..." id="Nombre" onChange={event => setFeedback({ email: event.currentTarget?.value, comment:feedback.comment   })}></input>
          <button type="submit" >
            Enviar
          </button>
        </form>
        </div>

    )

}

export default FormFeedback

    

   