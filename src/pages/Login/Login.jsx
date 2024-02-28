import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React, {useEffect} from "react";

export const Login=()=>{
    // eslint-disable-next-line no-unused-vars
    const {register, handleSubmit, formState:{errors}}=useForm()
    
    const {singin, isAuth}=useAuth()
    const navigate=useNavigate()

    useEffect(()=>{
        if (isAuth) navigate('/dashboard')
      }, [isAuth])

      const onSubmit=handleSubmit(async(values)=>{
        singin(values)
      })

      return(
        <>
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="username..." {...register("username", {required:true})} autoFocus/>

                <input type="password" {...register("password", {required:true})} placeholder="password..." />

                <button type="submit">Login</button>
            </form>
        </div>
        </>
      )
}