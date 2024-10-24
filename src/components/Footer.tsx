import React from 'react'

export default function Footer() {
  return (
    <main >
     <main className='bg-black w-full h-[700]  flex flex-row justify-between text-white p-32'>

     <div>
        <div className='flex flex-row gap-0'> 
            <img src="https://t4.ftcdn.net/jpg/09/07/64/45/240_F_907644519_03MISKmMDKp1MjsMLlTjKBYeyEmbxenc.jpg" 
        className='w-14 h-14' alt="" />
          <h1 className='mb-4 font-medium text-2xl'><b>Figma</b></h1>
          </div>
          <p> Whitepace was created for <br />the new ways we live and <br />
          work.We make a better <br />workspace around the world.</p>
        </div>

        <div>
          <h1 className='mb-4'><b>Product</b></h1>
          <ul >
            <li>Overview</li>
            <li> Pricing</li>
            <li>Customr Stories</li>
          </ul>
        </div>

        <div>
          <h1  className='mb-4'><b>Product</b></h1>
          <ul>
            <li>Overview</li>
            <li> Pricing</li>
            <li>Customr Stories</li>
          </ul>
        </div>

        <div>
          <h1  className='mb-4'><b>Resources</b></h1>
          <ul>
            <li>Blog</li>
            <li>Guides & Tutorials</li>
            <li>Help center</li>
          </ul>
        </div>

        <div>
          <h1  className='mb-4'><b>Company</b></h1>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Media kit</li>
          </ul>
        </div>

        <div>
          <h1  className='mb-4'><b>Try it Today</b></h1>
          <p>Get started for free. Add <br />whole team as your needs grow</p>
          <button className='flex justify-center p-2 w-40 bg-red-600 rounded text-white mt-4'> Start today
            <img src="https://img.icons8.com/?size=30&id=99982&format=png" alt="" className='w-5 ml-2' /></button>
        </div>
        </main>

        <div className='w-full h-[500] bg-black p-10'>
        <hr className='w-full h-5 border-[1] border-white '></hr>
       <ul className='flex flex-row justify-center gap-8 text-white '>
        <li className='flex flex-row gap-2'><img src="https://t3.ftcdn.net/jpg/01/39/39/32/240_F_139393207_40BvRK3QN6K0dMdzwqp4FtOlXSkTnwjh.jpg" 
         className='w-5 h-5' alt="" />
          English <img src="https://t3.ftcdn.net/jpg/06/39/22/88/240_F_639228857_zq3Tp1P8Cp1JVTY8ci9r8UAdzsqQ0UDh.jpg" className='w-5 h-5' alt="" /></li>
        <li> Terms & privacy</li>
        <li> Security</li>
        <li> Status</li>
        <li> @2024 Copyrights  Reserved  Mussarat  Shamsher</li>
       </ul>
       
        </div>

    </main>
  )
}
