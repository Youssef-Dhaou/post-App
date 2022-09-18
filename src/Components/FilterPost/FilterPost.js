import React from 'react'
import { useDispatch } from 'react-redux'
import { statusPost } from '../../JS/actions/PostActions'

const FilterPost = () => {
    const dispatch= useDispatch()
  return (
    <div>
        <button onClick={()=> dispatch(statusPost("ALL"))}> ALL </button>
        <button onClick={()=> dispatch(statusPost("COMPLETED"))}> COMPLETED</button>
        <button onClick={()=> dispatch(statusPost("INCOMLETED"))}> INCOMPLTED </button>


    </div>
  )
}

export default FilterPost