import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useForm } from "react-hook-form";
import  {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";

function App() {
  const [count, setCount] = useState(0)
  const [invisible, setInvisible] = useState(false)
  const [data, setData] = useState("");
  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  return (
    <div className="">
        {/*width fullscreen*/}
      <div className='w-screen h-screen flex justify-center items-center'>
        {/*640px*/}
        <div className='border sm:w-[50%] h-auto rounded-md shadow-xl'>
          <h1 className='text-center text-4xl font-bold'>
            React Training GunP
          </h1>
        {/*3-1*/}
          <form onSubmit={handleSubmit(onsubmit)}>
          <div className='flex flex-col m-4'>
        {/*3.1-1*/}
          <div className='flex flex-col gap-2 mt-2'>
            <label htmlFor="" className='text-xl'>Username</label>
            <input type="text" className='border rounded-md h-9 pl-2 pr-2' {...register("username",{required:true})}/>
            <div>
              {errors?.username &&(
                <span className='text-sm pt-1 text-red-600'>Username is required</span>
              )}
            </div> 
            
          </div>
        {/*3.2-1*/}
          <div className='flex flex-col gap-2 mt-2'>
            <label htmlFor="" className='text-xl '>Password</label>
            <div className='relative'>
              <input type={invisible?"text":"password"} className='border rounded-md h-9 pl-2 pr-2 w-full' {...register("password",{required:true})}/>
              
              {invisible?
                (
                  <AiFillEyeInvisible className="absolute right-1.5 bottom-1.5 text-2xl cursor-pointer"
                  onClick={()=>{setInvisible(!invisible);}}/>
                ):(
                  <AiFillEye className='absolute right-1.5 bottom-1.5 text-2xl cursor-pointer'
                  onClick={()=>{setInvisible(!invisible);}}/>
                )
              }
              
            </div>
            {errors?.password &&(
                <span className='text-sm pt-1 text-red-600'>Password is required</span>
              )}
          </div>

          <button type='submit' className='border h-10 font-bold text-white bg-sky-600 hover:bg-sky-800 rounded-md shadow-sm w-full mt-4 mb-4'>Login</button>
              <div className='text-center pb-2 pt-2'>
                <label htmlFor='' className='text-sm text-gray-300'>Do you have account?{" "}
                  <span className='hover:underline'>Sign up</span>
                </label>
              </div>
        </div>
          </form>

        </div>
      </div>
    </div>

    
  )
}

export default App
