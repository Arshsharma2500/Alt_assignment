
import React from 'react'
import Image from 'next/image'
import Edit_Icon from '../assests/editicon.png'
import But_review from '../assests/review.png'
import But_shortlisted from '../assests/shortlistbutt.png'
import img1 from '../assests/profile_user.jpg'
import { data } from '../restapi.json'


function herosection() {

  return (
    <main className='w-96 mx-2.5'>
      <div className='m-3'>
        <p>pages / Assigment</p>
        <p>Sales BDE</p>
      </div>
      <div className='bg-white w-96 h-56 rounded-t-xl p-2'>
        <div className='flex flex-row justify-between'>
          <p className='text-sm font-bold'>Sales BDE</p>
          <div className='flex flex-row mb-4'>
            <p className='mx-1 text-green-500 text-sm font-bold'>Active</p>
            <button className='bg-white rounded-md shadow-lg shadow-slate-300'><Image src={Edit_Icon} alt='edit' className='w-5' /></button>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-xs my-1'>Assignment Link</p>
          <a href='arshplacme.netlify' className='text-xs text-blue-800'>https://arshplacme.netlify</a>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-xs my-1'>Assignment Hour</p>
          <p className='text-xs my-1'>3 hour</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-xs my-1'>Assignment Ends at</p>
          <p className='text-xs'>11 March 2024</p>
        </div>
        <div className='flex flex-row mt-8'>
          <button className='bg-white rounded-md p-1 px-2 shadow-lg shadow-slate-300 mr-4'><Image src={But_review} alt='To Review' className='w-20' /></button>
          <button className='bg-white rounded-md p-1 px-2 shadow-lg shadow-slate-300'><Image src={But_shortlisted} alt='shortlisted' className='w-20' /></button>
        </div>
        <div className='flex flex-row justify-between my-4 mr-4'>
          <p className='text-xs text-slate-400 font-medium'>CANDIDATE</p>
          <p className='text-xs text-slate-400 font-medium'>score</p>
        </div>
      </div>
      <div className='w-96 rounded-b-xl bg-white'>
        {data[0].Person_Details.map(element => (
          <div className='h-14 flex flex-col justify-between p-2 cursor-pointer' key={element.id}>
            <div className='flex flex-row justify-between p-2'>
              <div className='flex flex-row'>
                {element.image ? (
                  <Image src={element.image} alt={element.Name} className='w-10 rounded-md mr-2' />
                ) : (
                  <Image src={img1} alt={element.Name} className='w-10 rounded-md mr-2' />
                )}
                <p className='text-xs font-bold mt-1'>{element.Name}<p className='text-slate-400 text-xs'>{element.gmail}</p></p>
              </div>
              <p className='text-sm text-green-500 mt-2'>{element.result}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default herosection 
