import React from 'react'
import Image from 'next/image'
import Icon_1 from '../assests/hiialtworldicon.png'
import Icon_2 from '../assests/homeicon.png'
import Icon_3 from '../assests/addicon.png'
function aside() {
  return (
    <main className='flex flex-col mx-5 w-48'>
        <div className='flex flex-row py-4'>
            <Image src = {Icon_1} alt='icon1' className='w-5 mr-3'/>
            <p>Hi, AltWorld</p>
        </div>
        <div>
            <div className='flex flex-row py-4'>
            <Image src={Icon_2} alt='icon2' className='w-5 mr-3' />
            <p>Dashboard</p>
            </div>
        </div>
        <div className='bg-teal-400 w-48 h-36 rounded-lg p-2'>
            <Image src={Icon_3} alt='add' className='bg-slate-100 rounded-md w-6 m-1'/>
            <p className='text-xs text-white font-bold m-1'>New Assigment?</p>
            <p className='text-xs text-white m-1'>Select from pre-defined questions to have a quick trunaround</p>
            <button className='bg-white rounded-md p-1 px-5'><p className='text-xs'>Create New Assigment</p></button>
        </div>
    </main>
  )
}

export default aside