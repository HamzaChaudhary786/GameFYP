import React from 'react'
import rab2 from '../Assets/rab2.png'
import rab1 from "../Assets/rab1.png"

const HeroSection = () => {



    let Links = [
        {
            title: "What is Crypto Rabbies?",
            description: "Rabbit Finance (RABBIT) is a trading protocol based on the principles of lending and borrowing",
            image: "https://shutr.bz/3x6LGMb"
        },

        {
            title: "How To Buy Crypto Rabbies?",
            description: "Rabbit Finance (RABBIT) is a trading protocol based on the principles of lending and borrowing",
            image: "https://shutr.bz/3x6LGMb"
        },

        {
            title: "How To Grow Your Crypto Rabbies?",
            description: "Rabbit Finance (RABBIT) is a trading protocol based on the principles of lending and borrowing",
            image: "https://shutr.bz/3x6LGMb"
        },
    ];

    return (
        <>
            <div className='h-[100%] w-[100%] bg-slate-900  grid justify-items-center  items-center '>


                <div className='h-[250px] w-[95%]  bg-fuchsia-400 rounded-br-[100px] grid grid-cols-2 justify-items-center items-center mt-4'>
                    <div className='p-4'>
                        <h1 className=' font-semibold text-lg  font-serif'>Crypto Rabbies</h1>
                        <p className='mt-2'>Where bunnies lead the way to earning</p>

                        <p className='mt-8 italic'>Join The Crypto Rubbies Craze</p>

                    </div>
                    <div className='h-36 w-36 rounded-full bg-white'>
                        <img src={rab1} className="rounded-full h-[150px] w-[220px]" />
                    </div>


                </div>




                <div className='h-auto w-[95%]   rounded  justify-items-center items-center mt-4 grid grid-cols-1  md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-2 ' >

                    {
                        Links.map((item) => {
                            return (
                                <>
                                    <div className='grid grid-cols-2 bg-fuchsia-400 mt-4 justify-items-center items-center h-[220px] rounded   '>
                                        <div className=' p-2'>
                                            <h1 className='font-semibold text-lg'>{item.title}</h1>
                                            <br></br>
                                            <p className=' w-auto'>{item.description}</p>
                                        </div>
                                        <div>
                                            <img src={rab2} className='h-[170px] w-[170px] rounded  ' />
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }

                </div>


                <div className=' flex mt-6'>
                    <div className=' h- w-16 bg-pink-600 '></div>
                    <div className=' h-2 w-16 bg-pink-300'></div>
                    <div className=' h-2 w-16 bg-yellow-300'></div>
                    <div className=' h-2 w-16 bg-cyan-300'></div>
                    <div className=' h-2 w-16 bg-indigo-600'></div>

                </div>
            </div>
        </>
    )
}

export default HeroSection