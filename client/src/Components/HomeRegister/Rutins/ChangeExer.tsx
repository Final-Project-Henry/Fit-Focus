import React, { useEffect, useState } from 'react'

export default function ChangeExer(props: {
    change: (direct: string) => void,
    next: () => void,

}) {

    const [exit, setExit] = useState(false);
    
    props.change("next");
    
    useEffect(()=>{
        setTimeout(() => {
            setExit(true);
        }, 3000);

        if(exit){
            props.next();
        }

        return ()=>setExit(false);
    }, [exit])

    return (
        <div>ChangeExer</div>
    )
}
