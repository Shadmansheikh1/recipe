import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SingleRecipe = () => {
     let location = useLocation()
     console.log(location)
  return (
     <>
    <div className='container'>
     <div className='row'>
          <div className='col-md-4'>
               <img src={location.state.recipe.image} height={"300px"} width={"300px"} alt="" />
          </div>
          <div className='col-md-8 bg-normal'>
               <p className='h2 text-center' >
                    {location.state.recipe.label}
               </p>
               <p className='h3 text-center mt-4'>{location.state.recipe.dishType}</p>

               <div className="col-md-3 m-auto mt-4">
                    <Link to={location.state.recipe.url} className='btn btn-primary text-center'>See Recipe</Link>
               </div>

               <div className="row  text-center m-auto mt-3 ">
               <h2 className='bg-warning mt-2'>Total Nutriens</h2>
               <div className="col-4 bg-primary mt-2 ">
                    {location.state.recipe.totalNutrients.CA.label}
                    <p>{location.state.recipe.totalNutrients.CA.quantity}{location.state.recipe.totalNutrients.CA.unit}</p>
                    
               </div>
               <div className="col-4 bg-danger mt-2">
               {location.state.recipe.totalNutrients.CHOLE.label}
                    <p>{location.state.recipe.totalNutrients.CHOLE.quantity}{location.state.recipe.totalNutrients.CHOLE.unit}</p>
                    
               </div>
               <div className="col-4 bg-success mt-2">
               {location.state.recipe.totalNutrients.ENERC_KCAL.label}
                    <p>{location.state.recipe.totalNutrients.ENERC_KCAL.quantity}{location.state.recipe.totalNutrients.ENERC_KCAL.unit}</p>
                    
               </div>
          </div>

          </div>
     </div>

     
    <div className="row">
     <div className="col-3 mt-2 ">

     <ul className='bg-secondary'>
     <h2>Ingridients:{location.state.recipe.ingredients.length}</h2>
     {location.state.recipe.ingredients.map((e)=>{
          // console.log(e)
          return <li>{e.text}</li>
     })}
      </ul>

     </div>
     <div className="col-6 text-center">

     </div>
    </div>
    
    </div>

    
    </>
  )
}

export default SingleRecipe