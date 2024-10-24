import React from 'react'

export function Card() {
  return (
    <main className='w-[400px] h-[594px] rounded border-2 border-red-600 p-10'>
        <div className=' text-black '>
        <h1 className='font-extrabold pb-5'>Free</h1>
              <h1 className='text-red-600 font-extrabold pb-5'> $ 0</h1>
              <h1> <b>Capture  ideas and find them quickly</b></h1>
              <ul className='list-inside list-disc pb-5 mt-5'>
                
                  <li className='pb-3'> Sync unlimited devices</li>
                  <li className='pb-3'> 10GB monthly uploads </li>
                  <li className='pb-3'> 200 MB max note size</li>
                  <li className='pb-3'> Customize HOme dashboar and access extra</li>
                  <li className='pb-3'> Contact primary Google Calander account</li>
                  <li className='pb-3'> Add due dates, reminders and notifications to your tasks.</li>
              </ul>
              <button className='w-24 h-10 rounded bg-red-600 border text-white font-semibold'> Get Started</button>
        </div>
    </main>
  )
}

export function Card2() {
    return (
      <main className='w-[440px] h-[654.2px]  bg-red-600 rounded border-2 border-red-600 p-10'>
          <div className=' text-white '>
           <h1 className='font-extrabold pb-5'>Personal</h1>
              <h1 className='text-green-500 font-extrabold pb-5 mt-5'> $ 11.99 </h1>
              <h1><b>keep home and family on track</b></h1>
              <ul className='list-disc list-inside pb-5 mt-8'>
                
              <li className='pb-3'><img src="" alt="" /> Sync unlimited devices</li>
                  <li className='pb-3'> 10GB monthly uploads </li>
                  <li className='pb-3'> 200 MB max note size</li>
                  <li className='pb-3'> Customize HOme dashboar and access extra</li>
                  <li className='pb-3'> Contact primary Google Calander account</li>
                  <li className='pb-3'> Add due dates, reminders and notifications to your tasks.</li> 
              </ul>
              <button className='w-28 h-10 rounded bg-white text-red-600 font-semibold'> Get Started</button>
          </div>
      </main>
    )
  }

  export function Card3() {
    return (
      <main className='w-[400px] h-[594px] rounded border-2 border-red-600 p-10'>
          <div className=' text-black'>
           <h1 className='font-extrabold pb-5'>Organizations</h1>
              <h1 className='text-red-600 font-extrabold pb-5 mt-5'> $ 0</h1>
              <h1> <b>Capture  ideas and find them quickly</b></h1>
              <ul className='list-disc list-inside pb-5 mt-5'>
              <li className='pb-3'> Sync unlimited devices</li>
                  <li className='pb-3'> 10GB monthly uploads </li>
                  <li className='pb-3'> 200 MB max note size</li>
                  <li className='pb-3'> Customize HOme dashboar and access extra</li>
                  <li className='pb-3'> Contact primary Google Calander account</li>
                  <li className='pb-3'> Add due dates, reminders and notifications to your tasks.</li>
              </ul>
              <button className='w-24 h-10 rounded bg-red-600 text-white font-semibold'> Get Started</button>
          </div>
      </main>
    )
  }