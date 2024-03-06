import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  let searchInpurRef= useRef()
  const [user, setuser] = useState('burger')
  const [val, setval] = useState([])
      
     let fetchData= async()=>{
     let res= await fetch(`https://api.edamam.com/search?q=${user}&app_id=2f3fb3ea&app_key=aa4bf33d639cf4e4f093cd4cf742e7fe`)
     let data = await res.json()
     setval (data.hits)
    //  console.log(data.hits.recipe)
    //  console.log(val)
     }
     useEffect(()=>{
      fetchData() 
     },[user])
    
     let searchdata=(e)=>{
      e.preventDefault()
      let user =searchInpurRef.current.value;
      setuser(user)
      
     }
  return (
     <div className='container-fluide'>
        <div className="col-md-4 m-auto">
    <form className="d-flex" role="search" >
        <input className="form-control me-2" type="search" placeholder="Search Your Fav Dishes" aria-label="Search"  ref={searchInpurRef}/>
        <button className="btn btn-outline-success" type="submit"onClick={searchdata}>Search</button>
      </form>
    </div>
    <div className='row m-auto w-75'> 
  
     {val.map((e)=>{
          return <div className="  card m-3" style={{width: '20rem'}}>
  <img src={e.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{e.recipe.label}</h5>
    <p className="card-text">{e.recipe.dietLabels}</p>
    <Link state={e} to={'/SingleRecipe'} className="btn btn-primary">View Recipe</Link>
  </div>
</div>
           
     })}
    </div>
    </div>
  )
 }

export default Home