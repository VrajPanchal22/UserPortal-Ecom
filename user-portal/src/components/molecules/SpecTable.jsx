import React from 'react';
// import Table from 'react-bootstrap/Table';
import TBody from '../atoms/TBody';

function SpecTable(props) {
    const {tdata,theading} = props;
  return (
<TBody theading ={theading} tdata={tdata}/>
  );
}

export default SpecTable;