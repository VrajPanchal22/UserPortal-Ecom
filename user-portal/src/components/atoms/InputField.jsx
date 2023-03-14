import { Field } from "formik";

import React from 'react'

function InputField(props) {
    //const  {type, className, id, name, placeholder} = props;
    return (
        <Field {...props} />
            // <Field type={type} className={className}
            //     id={id} name={name} placeholder={placeholder} />
    )
}

export default InputField

