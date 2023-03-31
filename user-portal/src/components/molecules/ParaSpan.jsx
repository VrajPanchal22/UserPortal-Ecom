import React from 'react'
import 'react-bootstrap';
import Para from '../atoms/Para';
import Span from '../atoms/Span';

function ParaSpan(props) {
    const{para,spanPara,pClassName,sClassName}=props
    return (
        <div className="" style={{marginBottom:'1rem'}}>
            <Para para={para} className={pClassName}/>
            <Span para={spanPara} className={sClassName}/>
        </div>
    )
}

export default ParaSpan