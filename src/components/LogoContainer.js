import React from 'react';
import styled, { keyframes  } from 'styled-components'
import BaseAnimation from './BaseAnimation.js';

const setFadeStatus = (fadeStatus) => {
    if (fadeStatus === 'fadeOut') {
        return FadeOutAnimation
    } else if(fadeStatus === 'fadeIn')  {
        return FadeInAnimation;
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
    animation-name: ${props => setFadeStatus(props.hideThis)};
    position: fixed;
    left: 10px;
    top: 10px;
    opacity: 0;
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
    width: 100px;
    height: 100px;
    transition: transform .6s ease;
`;

class LogoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            fadeStatus: false,
            flipLogo: false
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.hideThis === false) {
            return { fadeStatus:'fadeIn' };
        } else if(nextProps.hideThis === true && prevState.fadeStatus === 'fadeIn') {
            return { fadeStatus:'fadeOut' };
        } else{
            return null;
        }
    }
    _flipLogo = () => {
        console.log('flip');
        this.setState({"flipLogo": true});
    }
    _unFlipLogo = () => {
        console.log('unflip');
        this.setState({"flipLogo": false});
    }
    render() {
        return(
            <FadeAnimation onMouseEnter={this._flipLogo} onMouseLeave={this._unFlipLogo} duration=".3s" hideThis={this.state.fadeStatus}>
                <Logo flipLogo={this.state.flipLogo} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-1 0 142 139" enable-background="new 0 0 139.001 139.001">
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
}

export default LogoContainer

