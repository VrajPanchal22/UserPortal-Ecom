import React from 'react'
import 'react-bootstrap';
import ParaSpan from '../molecules/ParaSpan';
import SpecTable from '../molecules/SpecTable';

function ParaSpanDiv(props) {
    const {obj} = props
    return (
        <div className="mainContainer">
        {/* // <ParaSpan para="product details" spanPara="Black and green printed straight kurta, has a nitched round neck, three-quarter sleeves, straight hem, side slits" pClassName="text-uppercase font-weight-bold"/>
        // <ParaSpan para="size & fit" spanPara="The model (height 5'8) is wearing a size S" pClassName="text-uppercase font-weight-bold"/>
        // <ParaSpan para="material & care" spanPara="Material: Cotton ,Machine Wash" pClassName="text-uppercase font-weight-bold"/> */}
        <ParaSpan para="specifications" pClassName="text-uppercase font-weight-bold"/>
        <div>
            <table>{
                obj?
            Object.keys(obj).map((ele,index) => {
                            return (
                                <SpecTable theading ={ele} tdata={obj[ele]} key={index}/>
                            )
                    }):""
                }
            </table>
        </div>
        </div>

    )
}
// spanPara={<SpecTable theading ="Sleeve length" tdata="Three-Quarter Sleeves"/>}
export default ParaSpanDiv