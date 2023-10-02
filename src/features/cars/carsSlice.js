import { createSlice } from "@reduxjs/toolkit";
import cars from '../../data/cars.json'
const initialFiltersState = {
    search: '',
    carBrand: 'all',
  
  };
  
  const initialState = {
    isLoading: true,
    cars: cars,
    totalCars: cars.length,
    numOfPages: 1,
    page: 1,
    carsPerPage : 6,
    ...initialFiltersState,
  };

  const carsSlice = createSlice(
    {
       name: 'carsSlice',
        initialState,
        reducers :{
            showLoading: (state) => {
                state.isLoading = true;
              },
              hideLoading: (state) => {
                state.isLoading = false;
              },
              handleChange: (state, { payload: { name, value } }) => {
                state.page = 1;
                state[name] = value;

               const {search} = state 
               let tempCars = [...state.cars]
               if(search){
                tempCars = tempCars.filter((car) =>car.carName.toLowerCase().startsWith(search.toLowerCase())  || car.carBrand.toLowerCase().startsWith(search.toLowerCase())
                )
                state.filtered_cars = tempCars
               }else{
                state.filtered_cars = [...state.cars].slice(0,6)
               }
              },
              handlePageButtonClick :(state,{payload})=>{
                state.page = payload
              }
        }
    }
  )

  export const {
    showLoading,
    hideLoading,
    handleChange,
    handlePageButtonClick
   
  } = carsSlice.actions;
  
  export default carsSlice.reducer;