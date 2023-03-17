import React from 'react'
import 'react-bootstrap';
import ParaSpan from '../molecules/ParaSpan';
import SpecTable from '../molecules/SpecTable';

function ParaSpanDiv() {
    return (
        <div className="mainContainer">
        <ParaSpan para="product details" spanPara="Black and green printed straight kurta, has a nitched round neck, three-quarter sleeves, straight hem, side slits" pClassName="text-uppercase font-weight-bold"/>
        <ParaSpan para="size & fit" spanPara="The model (height 5'8) is wearing a size S" pClassName="text-uppercase font-weight-bold"/>
        <ParaSpan para="material & care" spanPara="Material: Cotton ,Machine Wash" pClassName="text-uppercase font-weight-bold"/>
        <ParaSpan para="specifications" pClassName="text-uppercase font-weight-bold"/>
        <div>
            <table>
            <SpecTable theading ="Sleeve length" tdata="Three-Quarter Sleeves"/>
            <SpecTable theading ="Neck" tdata="Round Neck"/>
            <SpecTable theading ="Design Styling" tdata="Regular"/>
            <SpecTable theading ="Length" tdata="Calf Length"/>
            <SpecTable theading ="Shape" tdata="Straight"/>
            <SpecTable theading ="Print or Pattern Type" tdata="Ethnic Motifs"/>
            <SpecTable theading ="Slit Detail" tdata="Side Slits"/>
            <SpecTable theading ="Hemline" tdata="Straight"/>
            </table>
        </div>
        </div>

    )
}
// spanPara={<SpecTable theading ="Sleeve length" tdata="Three-Quarter Sleeves"/>}
export default ParaSpanDiv