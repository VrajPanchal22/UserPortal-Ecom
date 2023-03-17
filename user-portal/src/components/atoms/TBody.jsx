import React from 'react'

function TBody(props) {
    const {tdata,theading} = props;
  return (
        <tr>
          <th style={{color:'grey'}}>{theading}</th>
          <td style={{paddingLeft:'2rem'}}>{tdata}</td>
        </tr>
  )
}

export default TBody