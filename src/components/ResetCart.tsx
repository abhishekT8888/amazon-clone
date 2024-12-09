import React from 'react'
import { Dispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const ResetCart = () =>{
    const dispatch=useDispatch();
  return (
    <button>Reset Cart</button>
  )
}

export default ResetCart