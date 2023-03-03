import { Field } from "formik";

import React from 'react'

function Input(props) {
    const  {type, className, id, name, placeholder} = props;
    return (
            <Field type={type} className={className}
                id={id} name={name} placeholder={placeholder} />
    )
}

export default Input

