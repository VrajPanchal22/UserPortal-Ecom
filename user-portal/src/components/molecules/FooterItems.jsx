import React from 'react'
import Atag from "../atoms/Atag";
import { useState, useEffect } from 'react';

export default function FooterItem(props) {
    const { itemName, aText, href, content=[{aText, href}] } = props
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 991) {
            setShowContent(true);
          } else{
            setShowContent(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Call the function initially to set the state
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      const toggleContent = () => {
        if (window.innerWidth <= 991) {
          setShowContent(!showContent);
        }
      };

  return (
    <div className="justify-content-start text-white">
        <div className="my-3 font-weight-bold fs-6 fw-bold" onClick={toggleContent}>{itemName}</div>
        {(window.innerWidth > 991 || showContent) && <div className="footer-items-container mb-3">
            {
            content.map((item, index)=>(
            <div key={index}> 
                <Atag  href={item.href} className="text-white fs-7 text-decoration-none" aText={item.aText}/> 
            </div>
            ))
            }
         </div>}
    </div>
  )
}