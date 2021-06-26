import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLE = ['btn--primary','btn--outline'];

const SIZES = ['btn--medium','btn--large'];

export const Button = ({children, type, onClick, butonStyle, buttonSize}) => {
    const checkButtonStyle = STYLE.includes(butonStyle) ? butonStyle: STYLE[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0];

    return(
        <Link to="/signup" className="btn-mobile">
            <button className={'btn ${checkButtonStyle} ${checkButtonSize}'} onclick={onclick} type = {type}>
                {children}
            </button>

    
        </Link>
    )
};