import React from 'react'
import { useForm } from 'react-hook-form'
import './BatchStyle.css'
const BatchCreate = () => {
const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data)
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input  {...register("example", { required: true})} />
          {errors.exmaple && <span>This field is required</span>}
          <input  {...register("exampleRequired", { required: true})} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>      
    </div>
  )
}

export default BatchCreate
