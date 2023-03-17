import React from 'react'
export default function DropdownContent({data}) {
  return (
     data?.map((element,index)=>{
      console.log(element)
      return(
             <a key={index} href="#">{element}</a>
      )
   })    
  )
}
