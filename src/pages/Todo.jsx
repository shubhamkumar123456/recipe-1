import React, { useRef, useState } from 'react'

const Todo = () => {
    let taskRef = useRef();

    const [arr, setarr] = useState([]);
    const handleSubmit = ()=>{
        // console.log("hello")
        let value = taskRef.current.value
        console.log(value)
       setarr([...arr,value])
    }

    const handleDelete=(item)=>{
        console.log(item); //two
        let index = arr.findIndex((ele)=>ele==item)
        console.log(index);
        let copyArr = [...arr] // ['one', 'two]
        copyArr.splice(index,1) //['one']
        setarr(copyArr)

    }
  return (
    <div className='h-[91vh] bg-black pt-8 text-white'>
      <h1 className='text-center text-5xl my-4'>To do list page</h1>
        <form action="" className='w-max   m-auto flex gap-2 items-center'>
            <input ref={taskRef} type="text" placeholder='enter the task..' className='border w-[300px] text-black p-2 outline' />
            <button onClick={handleSubmit} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">submit</button>
        </form>

        <div >
            {
                arr.map((item,i)=>{
                    return <div className='flex gap-3 my-1 m-auto'>
                        <p>{item}</p>
                        <button onClick={()=>handleDelete(item)} type='button' className='bg-green-300 w-[100px] p-1'>delete</button>
                        <button>completed</button>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Todo
