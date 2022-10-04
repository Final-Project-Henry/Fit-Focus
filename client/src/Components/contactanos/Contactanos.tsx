import React from 'react'
import logo from "../assets/icons/nav-icon2.png";
import phone from "../assets/icons/watsicon.png";
import mail from "../assets/icons/emailIcon.png";
import Footer from '../footer/Footer';
import FooterContactanos from '../footer/FooterContactanos';

function Contactanos() {
    return (
        <>
            <div className="flex justify-center" >
                <div className='grid  w-[90%] h-[90vh] border-[2px]'>
                    <div className='w-[100%] h-[40vh] border-[2px]  bg-gray-200'>
                        <h1 className='flex justify-center mt-[10px] text-2xl font-bold'>CONTACTOS</h1>
                        <div className='flex mt-20'>
                            <div className='w-[10%] ml-[45%] rounded-full bg-white flex justify-center'>
                                <img src={logo} className="w-[90%] p-4 " />
                            </div>
                        </div>
                        <div>
                            <h2 className='w-[100%] ml-[40%] mt-[5%] text-2xl font-bold'>COMUNICATE CON FIT FOCUS</h2>
                        </div>
                    </div>
                    <div className='w-[100%] ml-5 text-2xl font-bold'>
                        <div className='flex'>
                            <a href='https://web.whatsapp.com/' className='flex'>
                                <div className='w-[5%] ml-5 rounded-full bg-white flex justify-center'>
                                    <img src={phone} className="w-[90%] p-4" />
                                </div>
                                <div className='flex gap-4 mt-6 ml-2'>
                                    <h1>Whatsapp:</h1>
                                    <h1>+51917341261</h1>
                                </div>
                            </a>
                        </div>
                        <br />
                        <br />
                        <div className='flex'>
                            <a href='https://mail.google.com/' className='flex'>
                                <div className='w-[5%] ml-5 rounded-full bg-white flex justify-center'>
                                    <img src={mail} className="w-[90%] p-4" />
                                </div>
                                <div className='flex gap-4 mt-6 ml-2'>
                                    <h1>Correo:</h1>
                                    <h1>fitfocus@gmail.com</h1>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <FooterContactanos />
        </>
    )
}

export default Contactanos;