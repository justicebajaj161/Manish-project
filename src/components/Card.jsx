import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsPeople,BsSpeedometer2} from 'react-icons/bs'
import {PiChargingStationThin} from 'react-icons/pi'
import {GiSteeringWheel} from 'react-icons/gi'

const Card = ({carName,carImage,carYear,carCapacity,carType,carMileage,isAutomatic,carBrand,carPrice}) => {
  return (
    <div className="card w-[27rem] bg-base-100 shadow-xl">
  <figure className="px-3 pt-10">
    <img src={carImage} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center flex flex-row w-full">
    <h2 className="card-title">{carBrand} {carName}</h2>
    <div className='ms-auto text-lg-300 px-2 border-dotted rounded-xl py-1 border-2 border-indigo-600 '>
      <span >{carYear}</span>
      </div>
  </div>

  <div className="grid grid-cols-2 px-8 py-2 gap-y-2">
    <div className='flex items-center gap-1 text-sm text-primary'><BsPeople fontSize={20} /> {carCapacity} People </div>
    <div className='flex items-center gap-1 text-sm text-primary capitalize'><PiChargingStationThin fontSize={20} /> {carType}  </div>
    <div className='flex items-center gap-1 text-sm text-primary'><BsSpeedometer2 fontSize={20}/> {carMileage}km / 1-litre </div>
    <div className='flex items-center gap-1 text-sm text-primary'><GiSteeringWheel fontSize={20} /> {isAutomatic ? 'Automatic' : 'Manual'} </div>
   

    {/* divider */}

  </div>
    <hr className='mt-3'/>

    <div className='px-8 py-4  flex items-center'>
        {/* PRICE */}
        <div> <span className='text-2xl text-primary'>${carPrice}</span> /month</div>
        {/* BUTTONS */}
        <div className='ms-auto'>
            {/* heart */}
            <button className='btn ml-3'><AiOutlineHeart /></button>
            <button className='btn ml-3 btn-primary rounded-xl'>Rent now</button>
            {/* rent now */}
        </div>
    </div>
</div>
  )
}

export default Card