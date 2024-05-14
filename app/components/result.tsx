import React from 'react'
import Image from 'next/image'
import img1 from '../assests/profile_user.jpg'
function result() {
  return (
    <div className='bg-white w-2/4 mx-2.5 mt-12 rounded-xl flex flex-row p-1'>

        {/* left div */}

        <div className='w-2/4 p-2 flex flex-col bg-white rounded-xl'>
            
            {/* component_1 */}
            <div className='h-14 flex flex-row justify-between p-2 bg-slate-200 '>
                <div className='flex flex-row'>
                <Image src={img1} alt='img1' className='w-10 rounded-md mr-2' />
                <p className='text-xs font-bold mt-1'>Saurave Singh<p className='text-slate-400 text-xs'>saurave@gmail.com</p></p>
                </div>
                <p className='text-sm text-green-500 mt-2'>78%</p>
            </div>
            {/* points Bar */}
            <div className='my-2 h-24'>
                Points Bar
            </div>

            {/* about */}.
            <div className='my-2'>
                <p className='font-bold text-sm mb-1'>About</p>
                <p className='text-xs text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime!</p>
            </div>

            {/* Experience */}
            <div className='my-2'>
                <p className='font-bold text-sm mb-1'>Experience</p>
                <p className='text-xs text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime!</p>
            </div>

            {/* Hobbies */}
            <div className='my-2'>
                <p className='font-bold text-sm mb-1'>Hobbies</p>
                <p className='text-xs text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime!</p>
            </div>

            {/* Introduction */}
            <div className='my-2'>
                <p className='font-bold text-sm mb-1'>Introduction</p>
                <p className='text-xs text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime!</p>
            </div>

            {/* button_short_list */}
            <div className='my-2 flex justify-around'>
                <button className='bg-teal-400 px-14 rounded-md mt-2 text-sm py-1 text-white'>SHORTLIST</button>
            </div>

        </div>

        {/* right div */}

        <div className='w-2/4 rounded-xl'>

            <Image src={img1} alt='userimg' className='mt-24 h-3/4 rounded-b-xl'/>
            <div className='shadow-lg shadow-slate-300 h-8 flex flex-row justify-around rounded-b-xl'>
                <p>Saurav Singh</p>
            </div>

        </div>
    </div>
  )
}

export default result