import React, { useState } from 'react'

function ViewOptions() {
    const [viewOption , setViewOption] = useState('grid');
    return (
        <div className=" d-flex flex-row align-items-center">
            <span className="grid-title"><b>grid:</b></span>
            <div className="grid-options d-flex">
                <div className={`${viewOption==='list'?'active-view-option active-box':''} list-view d-flex flex-row align-items-center justify-content-around`}onClick={()=>setViewOption('list')}>
                    <div className="list-view__box"></div>
                </div>
                <div className={`${viewOption==='grid'?'active-view-option active-box':''} grid-view d-flex flex-row align-items-center justify-content-around`} onClick={()=>setViewOption('grid')}>
                    <div className="grid-view__box"></div>
                    <div className="grid-view__box"></div>
                    <div className="grid-view__box"></div>
                    <div className="grid-view__box"></div>
                </div>
            </div>
        </div>
    )
}

export default ViewOptions
