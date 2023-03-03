import {ErrorMessage} from 'formik'

import React from 'react'

function ErrorMsg(props) {
const {className , name} = props;
console.log(className , name)
  return (
    <ErrorMessage name={name}>
        {
            (errorMsg)=>{
                return (<div className={className?className:'text-danger mt-1'}>{errorMsg}</div>)
            }
        }
    </ErrorMessage>
  )
}

export default ErrorMsg
