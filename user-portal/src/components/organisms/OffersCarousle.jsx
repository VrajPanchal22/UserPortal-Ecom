import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/assets/images/bedsOffer.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  // {
  //   src: '/assets/images/bedsOffer.jpg',
  //   altText: 'Slide 2',
  //   caption: 'Slide 2'
  // },
  // {
];

const OfferCarousle = () => {

    return (
      <UncontrolledCarousel items={items} key={items.altText} />
    );
}

export default OfferCarousle;