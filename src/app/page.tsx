import Image from "next/image";
import { Card, Card2, Card3 } from "./components/Card";
import { Frame1, Frame2, Frame3 } from "./components/Frames";
import Footer from "./components/Footer";

import  figma from "./../../assests/figma.PNG"
import figmaW from "./../../assests/figmaW.PNG"


export default function Home() {
  return (
<div>

{/* section 1 */}
    <div className=" flex bg-black bg-fixed w-full h-[600px] pt-[120px] pr-[120px] pl-[120px] gap-40">

      <div className="">
        <h1 className="text-green-500 font-extrabold text-4xl mb-12"> Get More Done With Whitepace</h1>
      <p className="text-white mb-12"> Project management software that enables your teams to collaborate, paln,
        analyze and manage everyday task.
      </p>
      <button className='flex p-2 w-52  bg-red-600 rounded text-white'>Try Whitepace Free
                         <img src="https://img.icons8.com/?size=30&id=99982&format=png" alt="" className='w-5 ml-2' /></button>
    </div>

      <div className="w-[700px] h-[700px]">
         <Image src={figma} alt="" className="transparent"></Image>
      </div>
    </div>
    {/* section 2 */}

<div  className=" flex bg-white bg-fixed w-full h-[600px] pt-[120px] pr-[120px] pl-[120px] gap-40">

      <div className="text-black">
        <h1 className=" font-extrabold text-4xl mb-12"> Project <br /> Management</h1>
      <p className="mb-12"> Images, videos, PDF's and audio files are supported. Create math expressions 
      and diagrams directly from the app. Take photos with mobile app and save them to 
      a note.
      </p>
      <button className='flex justify-center p-2 w-40 bg-red-600 rounded text-white'>Try it Free
                         <img src="https://img.icons8.com/?size=30&id=99982&format=png" alt="" className='w-5 ml-2' /></button>
    </div>
    <div className="w-[700px] h-[700px]">
        <Image src={figmaW} alt="image" className="transparent"></Image>
      </div>
</div>
{/* section 3 */}
<div  className=" flex bg-white bg-fixed w-full h-[600px] pt-[120px] pr-[120px] pl-[120px] gap-40">

<div className="w-[700px] h-[700px]">
        <Image src={figmaW} alt="" className="transparent"></Image> 
        
      </div>  
<div className="text-black">
        <h1 className=" font-extrabold text-4xl mb-12"> Work <br /> Together</h1>
      <p className="mb-12"> With whitepaces share your notes with your colleagues and collaborate on them.
        You can also publish a note to the internet and share the URL with others.
      </p>
      <button className='flex justify-center p-2 w-40 bg-green-500 rounded text-white'>Get Started
                         <img src="https://img.icons8.com/?size=30&id=99982&format=png" alt="" className='w-5 ml-2' /></button>
    </div>
</div>
{/* Section 4 */}
<div  className=" flex bg-black bg-fixed w-full h-[600px] pt-[120px] pr-[120px] pl-[120px] gap-40">

      <div>
        <h1 className=" font-extrabold text-green-500 text-4xl mb-12"> Use as <br /> Extension</h1>
      <p className="mb-12 text-white"> Use the web clipper extension available on firefox and chrome, to save web pages
        or take screenshots as notes.
      </p>
      <button className='flex justify-center p-2 w-40 bg-red-600 rounded text-white'> Let's Go
                         <img src="https://img.icons8.com/?size=30&id=99982&format=png" alt="" className='w-5 ml-2' /></button>
    </div>
    <div className="w-[700px] h-[700px]">
        <Image src={figma} alt="" className="transparent"></Image>
      </div>
</div>
{/* setion5 */}
<div  className=" flex bg-white bg-fixed w-full h-[600px] pt-[120px] pr-[120px] pl-[120px] gap-40">

<div className="w-[700px] h-[700px]">
        <Image src={figmaW} alt="" className="transparent"></Image>
      </div>  
<div className="text-black">
        <h1 className=" font-extrabold text-4xl mb-12"> Customize it to <br /> your needs</h1>
      <p className="mb-12"> Customize the app with the plugins, custom themes and multiple text editors (Rich Text or Markdown). 
        Or create your own scripts and plugins using the Extension API. 
      </p>
      <button className='flex justify-center p-2 w-40 bg-green-500 rounded text-white'>Lets's Go
                         <img src="https://img.icons8.com/?size=30&id=99982&format=png" alt="" className='w-5 ml-2' /></button>
    </div>
</div>
{/* section 6 */}
<div>
<h1 className=" font-extrabold text-4xl text-center text-black mb-8"> Choose Your Plan</h1>
<p  className="text-center">Whether you want to get organize, keep your personal life on track, or boost workplace
   productivity. Evernote <br />has the right plan for you.
</p>

</div>
<div className="flex flex-row gap-5 ml-8 mr-8">
      <div className="mt-10 "><Card /></div>
  <div className="mt-5"><Card2 /></div>
  <div className="mt-10"><Card3 /></div>
 
</div>
{/* section7 */}
<div className=" bg-black w-full h-96 mt-20 ">
<h1 className="pt-14 font-extrabold text-green-500 text-center text-4xl mb-12"> Your work, Everywhere you are</h1>
      <p className=" text-white text-center "> Access your notes from your computer, phone or tablet by synchronizing with various services, including whitespce, dropbox and <br />
      OneDrive. The app is available on Windows, macOS, Linux, Android and IOS. A terminal app is also available!  
      <br />
      
      </p>
      <div className="flex justify-center pt-10">
      <button className='flex justify-center p-2 w-20 bg-red-600 rounded text-white'> Button
                         <img src="https://img.icons8.com/?size=30&id=99982&format=png" alt="img" className='w-4 ml-2' /></button>
          </div>
    </div>
{/* section 8 */}

<div  className=" flex bg-white bg-fixed w-full h-[500px] pt-[120px] pr-[120px] pl-[120px] gap-40">

       <div className="text-black">
        <h1 className=" font-extrabold text-4xl mb-12">100% <br /> Your Data</h1>
      <p className="mb-12"> The ap is open source and notes are saved to an open format, you'll 
        always have access to them. Uses End-To_End Encription (E2EE) to 
        secure your notes and ensure no-one but yourself can access them.
      </p>
      <button className='flex justify-center p-2 w-40 bg-red-600 rounded text-white'> Read more
                         <img src="https://img.icons8.com/?size=30&id=99982&format=png" alt="img" className='w-5 ml-2' /></button>
    </div>
    <div className="w-[700px] h-[700px]">
        <Image src={figmaW} alt="" className="transparent"></Image>
      </div>
</div>
  {/* section 9 */}
<div className="  bg-white bg-fixed w-full h-[200px]">
<h1 className="font-extrabold text-black text-center text-4xl mb-10"> Our Sponsors</h1>
<div className="flex justify-center gap-10 ">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnl0smicihjEpIXL3HAI0KWl_CjfgOaPHYg&s" 
className="w-14 h-14" alt="" />
<img src="https://cdn.worldvectorlogo.com/logos/microsoft-6.svg" 
className="w-20 h-20" alt="" />
<img src="https://cdn.worldvectorlogo.com/logos/slack-2.svg" 
className="w-20 h-2o" alt="" />
<img src="https://img.freepik.com/premium-photo/google-logo-is-shown-white-background_1315971-719.jpg?uid=R169679315&ga=GA1.1.1520241187.1727866482&semt=ais_hybrid" 
className="w-20 h-20" alt="" />
</div>
</div>
{/* section 10 */}
<div  className=" flex bg-black bg-fixed w-full h-[500px] pt-20   pr-[120px] pl-[120px] gap-40">

<div className="w-[700px] h-[700px]">
        <Image src={figma} alt="" className="transparent"></Image>
      </div>
      <div>
        <h1 className=" font-extrabold text-green-500 text-4xl mb-12">Work With Your <br /> Favourite Apps Using 
        <br /> whitespace</h1>
      <p className="mb-12 text-white"> whitepace teams up with your favourite software. Integrate with over 1000+ apps
        with Zapier to have all the tools you need for your projects success.
      </p>
      <button className='flex justify-center p-2 w-40 bg-red-600 rounded text-white'> Read more
                         <img src="https://img.icons8.com/?size=30&id=99982&format=png" alt="" className='w-5 ml-2' /></button>
    </div>
</div>
{/* section 11 */}
<div className="w-full  h-[600px] bg-white">
<h1 className=" font-extrabold text-6xl text-center text-black mb-12 mt-12"> What Our Clients Says</h1>
<div className="flex flex-row justify-center gap-5">
<div> <Frame1 /> </div>
<div> <Frame2 /></div>
<div> <Frame3 /> </div>
</div>
</div>
{/* section 12 */}

<div className=" bg-black w-full h-[700] mt-20 ">
<h1 className="pt-14 font-extrabold text-green-500 text-center text-4xl mb-12">Try Whitepace <br />Today</h1>
      <p className=" text-white text-center "> Get started  for free. <br />
      Add your whole team as your needs grow.
      </p>
      <div className="flex justify-center pt-10">
      <button className='flex justify-center p-2 w-40 bg-red-600 rounded text-white'> Try taskey free
                         <img src="https://img.icons8.com/?size=30&id=99982&format=png" alt="img" className='w-4 ml-2' /></button>
        </div>
        <p className=" text-white text-center mt-10 mb-10">On a big team? Contact sales</p>
<div className="flex flex-row justify-center gap-4">
        <div> <img src="https://www.freepnglogos.com/uploads/apple-logo-png/image-apple-logo-gta-wiki-the-grand-theft-auto-7.png" 
 className="w-20 h-20" alt="" /></div>
<div> <img src="https://www.freepnglogos.com/uploads/windows-logo-png/windows-logo-microsoft-windows-logos-vector-eps-cdr-svg-25.png" 
className="w-20 h-20" alt="" /></div>
<div> <img src="https://t3.ftcdn.net/jpg/07/44/84/48/240_F_744844808_1EOm7NXcTbqN8QtlBFaBOvLrKlMiwZ1N.jpg" 
className="w-20 h-20" alt="" /></div>
</div>
    </div>
    {/* section 13  Footer */}
<div>
  <Footer />
</div>

  
</div>
    )}

