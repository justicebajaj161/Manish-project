import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import PageButtonsContainer from './PageButtonsContainer'
import { useParams,useLocation } from 'react-router-dom'
import { handlePageButtonClick } from '../features/cars/carsSlice'

const itemsPerPage = 6
const CardGrid = () => {
  const {cars,carsPerPage,page,filtered_cars,search} = useSelector(state=>state.cars)
  

  const onHomePage = useParams().pageNumber === undefined

  const dispatch = useDispatch()
 
  console.log(onHomePage)

  const startIndex = (page - 1) * carsPerPage
  const endIndex = startIndex + itemsPerPage
  
  const location = useLocation()

  
  

  const currentCars = cars.slice(startIndex, endIndex);


  console.log(startIndex,endIndex)
  useEffect(()=>{
    cars.slice(startIndex, endIndex)
  },[page])

 
  useEffect(()=>{
  console.log(location.pathname)

  if(location.pathname.startsWith('/page')){
    const pgNumber = parseInt(location.pathname[location.pathname.length - 1])
    // console.log(parseInt(location.pathname[location.pathname.length - 1]))
    dispatch(handlePageButtonClick(pgNumber))
  }


  },[])

  if(!onHomePage){
    return (
      <>
      <div className='grid grid-cols-3 mt-[6rem] p-1  place-items-center gap-y-6'>
       {currentCars.map((car)=>{
         
         return <Card {...car}/>
        })}
      </div>
       <PageButtonsContainer/>
        </>
    )
  }

  if(filtered_cars?.length > 0){
    return (
      <>
      {filtered_cars && <div className='grid grid-cols-3 mt-[6rem] p-2  place-items-center gap-y-6'>
       {filtered_cars.map((car)=>{
         
         return <Card {...car}/>
        })}
      </div>}
       <PageButtonsContainer/>
        </>
    )
  }

  return (
    <>
    {filtered_cars && <div className='grid grid-cols-3 mt-[10rem] p-2 bg-red-300 place-items-center gap-y-6'>
    
    <h1 className="text-4xl">No results found for {search}</h1>
    </div>}
     <PageButtonsContainer/>
      </>
  )




 


}

export default CardGrid