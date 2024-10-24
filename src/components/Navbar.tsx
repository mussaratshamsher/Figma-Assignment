import React from 'react'

export default function Navbar() {
  return (
    <main>
        <header className=''>
            <nav className='flex justify-between p-8 bg-gray-950 w-full'> 

        <div className=" flex items-center ml-3  gap-2 w-10 h-10  " >
 <img src="https://t4.ftcdn.net/jpg/09/07/64/45/240_F_907644519_03MISKmMDKp1MjsMLlTjKBYeyEmbxenc.jpg" 
 alt="icon"  className='w-28 h-20'/>  
 <h1 className='text-white font-extrabold'>Figma</h1>
          </div> 
                <ul className=' flex justify-center gap-[50px] text-white '>
                    <li>Products</li>
                    <li>Solutions</li>
                    <li>Pricing</li>                   
                    <li>Resources</li>
                </ul>
                
                <div className='flex ml-14 gap-[40px]'>
                    <button className='w-20 bg-green-500 text-black rounded'> login</button> 
                    <button className='flex p-2 w-52  bg-red-600 rounded text-white'>Try Whitepace Free
                         <img src="https://img.icons8.com/?size=30&id=99982&format=png" alt="image" className='w-5 ml-2' /></button>
                </div>
            </nav>
           
        </header>
    </main>
  )
}
