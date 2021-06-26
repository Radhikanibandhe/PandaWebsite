import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="https://ak.picdn.net/shutterstock/videos/1031097665/preview/stock-footage-baby-panda-chilling-out-and-chewing-on-bamboo.webm" autoPlay loop muted/>
            <h1>Cute Pandas on the way!!</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline'buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className="btns" buttonStyle='btn--primary'buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
