import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these CUTE pandas!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img2.jpg'
              text='The Giant Panda Research and Breeding center, Chengdu, China'
              label='Alan & Alina'
              path='/services'
            />
            <CardItem
              src='images/img3.jpg'
              text='Dujiangyan Panda Base, Dujiangyan, China'
              label='Alex'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img4.jpg'
              text='Ocean Park, Hongkong'
              label='Joe'
              path='/services'
            />
            <CardItem
              src='images/img5.jpg'
              text="Bifenxia Giant Panda Base, Ya'an, Sichuan, China"
              label='John & Jenny'
              path='/products'
            />
            <CardItem
              src='images/img6.jpg'
              text='Ocean Park, Hongkong'
              label='Sunny'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;