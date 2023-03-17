import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { TbCircleKey } from 'react-icons/tb'

export default function FlyOut() {
    return (
        <div className='flyout'>
            <div className="flyout-triangle"></div>
            <div className="flyout-container">
                <div className='d-flex justify-content-around align-items-center'>
                    <CgProfile className='profile-icon w-25' />
                    <h6 className='user-name w-75'>My Profile</h6>
                </div>
                <hr />
                <div className='d-flex justify-content-around align-items-center'>
                    <TbCircleKey className='profile-icon w-25' />
                    <h6 className='user-name w-75'>Change Password</h6>
                </div>
            </div>
        </div>
    )
}
