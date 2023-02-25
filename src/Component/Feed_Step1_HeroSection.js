import React from 'react'
import gif from '../Assets/gif2.gif'
import mes from "../Assets/mes.png"
import cont from "../Assets/contact.png"
import cart from "../Assets/cart.png"
import { Link } from 'react-router-dom'
import step2 from "../Assets/step2.gif"


import { useGlobalContext } from './Context'
const Feed_Step1_HeroSection = () => {
    const { coll } = useGlobalContext();

    return (
        <>
            <div className=' grid justify-items-center items-center'>


                <div className=' grid grid-cols-3   justify-items-center items-center bg-fuchsia-500 h-[200px] w-[95%] rounded'>
                    <div className=' h-32 w-32 md:h-40 md:w-40 rounded-full bg-slate-300 grid justify-items-center items-center '><img src={cart} className=" h-28 w-28 md:h-40 md:w-40  " /></div>

                    <div className='text-lg text-white italic font-semibold md:font-bold md:text-3xl text-center '>Feeding Rabbies </div>

                    <div><img src={gif} className="h-20 w-24 md:h-auto md:w-auto" /></div>
                </div>



                <div className=' py-4  bg-fuchsia-500 h-fit w-[95%] mt-4  grid justify-items-center items-center rounded'>



                    <div className='w-[98%] h-auto md:w-[80%] bg-cyan-400 text-center rounded p-4  ' >
                        <h1 className=' mt-2 font-bold text-2xl   '>Feed your rabbit 10 carrots to grow 1 level </h1>
                        <div className=' flex mt-6 justify-center'>
                            <div className=' h- w-16 bg-pink-600 '></div>
                            <div className=' h-2 w-16 bg-pink-300'></div>
                            <div className=' h-2 w-16 bg-yellow-300'></div>
                            <div className=' h-2 w-16 bg-cyan-300'></div>
                            <div className=' h-2 w-16 bg-indigo-600'></div>

                        </div>
                    </div>



                    <div className=' grid-cols-3 w-auto md:w-[70%]  grid justify-items-center items-center mt-2'>
                        <Link to="/feedstep2" >

                            <div>
                                <h1>Father</h1>
                                <h2>This Rabby Will Be Father</h2>
                                <div className='bg-gray-900 bg-opacity-30 h-44 w-40 text-red-600 grid justify-items-center items-center rounded'>
                                    <h1>Select Your Rabby </h1>
                                    <div className=' h-28 w-28' id='pic'>

                                    </div>


                                </div>

                            </div>
                        </Link>
                        <div>
                            <img src={step2} className="h-24 w-24" />
                        </div>
                        <div>
                            <h1>Mother</h1>
                            <h2>This Rabby Will Be Mother</h2>

                            <div className='bg-gray-900 bg-opacity-30 h-44 w-40 text-red-600 grid justify-items-center items-center rounded' id='pic'>
                                <h1>Select Your Rabby </h1>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Feed_Step1_HeroSection