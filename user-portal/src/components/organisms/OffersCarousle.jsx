import React, { useEffect, useState } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { getData } from '../../services/api';

const OfferCarousle = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    getData('offers').then(res => {
      const data = res.data
      const newItems = data.map((element, index) => ({
          src: element.images,
        }))
      setItems(newItems)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <UncontrolledCarousel items={items} />
  );
}

export default OfferCarousle;