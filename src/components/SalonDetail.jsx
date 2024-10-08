import React from 'react';
import Carousel from "../components/Carousel";

const SalonDetail = () => {

  const handleClick = () =>{
    console.log("clicked")
  }  

  return (
    <div className='container mx-auto'>
        <div className='flex flex-col items-center p-5'>
            <div className='font-bold text-3xl text-center'>Salon Details</div>
            <div className='p-10 text-xl text-center max-w-2xl'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Rem perferendis cum vitae expedita laudantium, iure facere sint? Iusto dicta reiciendis 
                totam dolorem, natus quasi cumque ipsa numquam optio deserunt autem!
            </div>
            <Carousel/>
            <button 
              onClick={handleClick} 
              className="mt-5 bg-blue-500 text-white p-2 rounded"
            >
              Book Appointment
            </button>
        </div>
    </div>
  )
}

export default SalonDetail;
