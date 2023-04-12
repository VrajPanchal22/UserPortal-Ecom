import InputField from '../atoms/InputField'
import Label from '../atoms/Label'
import React from 'react'
import ErrorMsg from '../atoms/ErrorMsg';

function FormInput(props) {
    const  {type, inputClass, id, name, placeholder, htmlFor , label, outerDivClass,fieldClass,iconClass,errorClass,value } = props;
  // console.log(value)
    return (
    <div className={outerDivClass}>
      <Label htmlFor={htmlFor}  label={label}/>
      <div className={fieldClass}>
      <i className={iconClass}></i>
      <InputField type={type} className={inputClass}
                id={id} name={name} placeholder={placeholder} value={value}/>
                </div>
                <ErrorMsg name={name} className={errorClass} />
    </div>
  )
}

export default FormInput
