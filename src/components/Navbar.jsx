import React, { useEffect, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { handleChange } from '../features/cars/carsSlice'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

  const dispatch = useDispatch()
  const {search} = useSelector(state => state.cars)
  const [searchTerm,setSearchTerm] = useState(search)
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(handleChange({name:'search',value:searchTerm}))
  },[searchTerm])
  return (
    <div className="navbar   fixed top-0 left-0 w-full z-[99999]">
       <div className=' w-full p-4 rounded-3xl shadow-2xl bg-base-200'>
       <div className="flex-none gap-2 px-8 ">
      <div className="form-control w-[25rem]  relative">
        <input type="text" placeholder="Search"
        onChange={(e)=>{
          navigate('/')
          setSearchTerm(e.target.value)
         
        }}
        className="input rounded-3xl input-bordered w-full md:w-auto" />
        <span className='absolute right-8 top-3 text-2xl'><AiOutlineSearch /></span>
      </div>
      
    </div>
    <div className="flex-1">
      
      <select name="" id="" className='select mr-5 select-ghost'>
        <option selected disabled>Pick a Brand</option>
        <option value="toyota">Toyota</option>
        <option value="bmw">BMW</option>
      </select>
      <select name="" id="" className='select select-ghost'>
        <option selected disabled>Pick a Brand</option>
        <option value="toyota">Toyota</option>
        <option value="bmw">BMW</option>
      </select>
    </div>
       </div>
    
  </div>
  )
}

export default Navbar