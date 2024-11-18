import React, { useEffect, useRef, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Home = () => {
  let searchRef = useRef()
  const [item, setitem] = useState("pizza");
  console.log(item)
    const [dataRecipe, setdataRecipe] = useState([]);
   async function getData(){
      try {
        let res = await fetch(`https://api.edamam.com/search?q=${item}&app_id=7442af9a&app_key=3a95c099faea27e5c7bcc842f1bb689b`)  
        let data = await res.json();
        console.log(data.hits)
        setdataRecipe(data.hits)
      } catch (error) {
        console.log("error in api fetch")
      }
    }
   
    useEffect(()=>{
        getData()
    },[item])

   const handleSearch = ()=>{
    let value = searchRef.current.value;
    console.log(value)
    setitem(value)
   }


  return (
  <div className='pt-10  bg-black'>
      <form action="" className='sm:w-[50%] p-4 m-auto flex sm:flex-row flex-col items-center justify-center gap-5'>
        <input ref={searchRef} className='p-3 sm:w-[250px] w-full  rounded-md border border-red-300 outline-none' type="text" placeholder='search recipe...'/>
        <button onClick={handleSearch}  type='button' className='bg-green-300 py-2 px-3 sm:w-[120px] h-[40px] w-max hover:bg-green-700  rounded-lg'>search</button>
      </form>
<div  className='grid grid-cols-12 gap-2 p-8'>
      {/* <h3>home page</h3> */}

      {
        dataRecipe.map((ele,i)=>{
            return  <Card className=' lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12  p-2  flex flex-col justify-between'>
            <CardMedia
              sx={{ height: 140 }}
              image={ele.recipe.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                    {ele.recipe.label}
              </Typography>
              {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button> */}
              <Link className='bg-indigo-950 text-white px-3 py-2 rounded-md' state={ele.recipe} to={'/view'} size="small">View recipe</Link>
              {/* <button onClick={()=>handleClick(ele)}>click me</button> */}

            </CardActions>
          </Card>
        })
      }
    </div>
  </div>
  )
}

export default Home
