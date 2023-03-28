import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavbar from '../organisms/MainNavbar'

export default function Main() {
  return (
    <>
   <MainNavbar/>
   <Outlet />
   </>
  )
}
