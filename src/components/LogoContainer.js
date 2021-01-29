import React,  { useState, useEffect, useRef } from 'react';
import styled, { keyframes  } from 'styled-components'
import BaseAnimation from './BaseAnimation.js';

const setFadeStatus = (setLogoVisibility) => {
    if(setLogoVisibility !== 'firstrun') {
        if (setLogoVisibility) {
            return FadeInAnimation;
        } else if(!setLogoVisibility)  {
            return FadeOutAnimation
        }
    }
}
const FadeInAnimation = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;
const FadeOutAnimation = keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
`;
const FadeAnimation = styled(BaseAnimation)`
    opacity: 0;
    animation-name: ${props => setFadeStatus(props.logoVisibility)};
    position: fixed;
    left: 10px;
    top: 10px;
`;
const setFlip = function(flipLogo) {
    if(flipLogo) {
        return 'rotateY(180deg)';
    } else {
        return 'rotateY(0deg)';
    }
}
const Logo = styled.svg`
    transform: ${props => setFlip(props.flipLogo)};
    width: 50px;
    height: 50px;
    transition: transform .6s ease;
    @media (min-width: 640px) {
        width: 100px;
        height: 100px;
    }
`;

const LogoContainer = function(props) {
    const isFirstRun = useRef(true);
    const [flipLogo, setFlipLogo] = useState(false);
    const [logoVisibility, setLogoVisibility] = useState('firstrun');
    useEffect(() => {
        if (isFirstRun.current) {
              isFirstRun.current = false;
              return;
            }
            setLogoVisibility(props.logoVisibility);
    });
    const _flipLogo = function() {
        setFlipLogo(true);
    }
    const _unFlipLogo = function() {
        setFlipLogo(false);
    }
    return(
        <FadeAnimation onMouseEnter={_flipLogo} onMouseLeave={_unFlipLogo} duration=".3s" logoVisibility={logoVisibility}>
            <Logo flipLogo={flipLogo} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-1 0 142 139" enable-background="new 0 0 139.001 139.001">
                <g>
                    <circle fill="#000" cx="69.501" cy="69.501" r="69.501"></circle>
                    <g>
                        <polygon fill="none" stroke="#FFFFFF" points="69.521,99.461 20.497,50.437 118.544,50.437   "></polygon>
                        <line fill="none" stroke="#FFFFFF" x1="69.521" y1="99.461" x2="69.521" y2="50.437"></line>
                    </g>
                </g>
            </Logo>
        </FadeAnimation>
    )
}

export default LogoContainer

