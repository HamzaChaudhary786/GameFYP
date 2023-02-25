import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>

            <div className=' bg-black py-10'>
                <div className=' grid grid-cols-2  lg:grid lg:grid-cols-3 text-center justify-items-center  p-4 text-white'>
                    <div>
                        <h1 className=' text-lg font-bold itallic text-white text-start'>
                            CRYPTORABBIES
                        </h1>

                        <p className='mt-4'>Collect , Breed , And Trade Your Every Own Virtual Rabbit On THe BlockChain. </p>
                        <div className=' mt-2 flex justify-center items-center  '>
                            <div className=' mr-2 text-amber-100'>| <ion-icon name="logo-instagram"></ion-icon>  |</div>
                            <div className=' mr-2 text-blue-700'>  <ion-icon name="logo-twitter"></ion-icon>  |</div>
                            <div className=' mr-2 text-red-600'>  < ion-icon name="logo-youtube"></ion-icon>  |</div>
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-lg font-bold itallic text-white text-start'>
                            QUICK LINK
                        </h1>

                        <div className=' mt-4'>

                            <Link >Overview</Link><br></br>
                            <Link>About</Link><br></br>
                            <Link>GetStarted</Link>
                        </div>
                    </div>
                    <div className=' mt-4 md:mt-0' >
                        <h1 className=' text-lg font-bold itallic text-white text-start'>
                            CONTACT US
                        </h1>

                        <p className='mt-4'>If You Have Any Question About "CRYPTO RABBIES" Don't Hesitate To Reach Out To Our Customer Support Team. They Will Be Happy To Assist You With Any Issue Or Concern You May Have. </p>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer