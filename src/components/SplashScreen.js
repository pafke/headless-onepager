import React from 'react';
import styled, { keyframes }  from 'styled-components'
import TypeEffect from './TypeEffect.js';
import {BgGreen} from './ReusableStyles.js'

const DashOffset = keyframes`
    from { stroke-dashoffset: 1000 }
    to { stroke-dashoffset: 0 }
`;
const SvgAnimations = props => `
    fill: none;
    stroke: #FFF;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
`;
const SplashScreenSection = styled(BgGreen)`
    font-weight: 100;
    height: 100vh;
    font-size: 48px;
    @media (min-width: 640px) {
        font-size: 64px;
    }
    @media (min-width: 980px) {
        font-size: 78px;
    }
`;
const CircleAnimation = styled.circle`
    animation-name: ${DashOffset};
    ${SvgAnimations}
`;
const PolygonAnimation = styled.polygon`
    animation-name: ${DashOffset};
    ${SvgAnimations}
`;
const LineAnimation = styled.line`
    animation-name: ${DashOffset};
    ${SvgAnimations}
`;
const SplashLogo = styled.svg`
    width: 120px;
    height: 120px;
    @media (min-width: 640px) {
        width: 200px;
        height: 200px;
    }
    @media (min-width: 980px) {
        width: 250px;
        height: 250px;
    }
`;

const SplashScreen = () => (
    <SplashScreenSection>
    	I <TypeEffect
	        verbs={[
	        	'Create',
	        	'Develop',
	        	'Render',
	        	'Design',
	        	'Debug',
	        	'Visualise',
	        	'Animate'
	        ]}
	        speedOfLoop={2500}
	        highlightDuration={1000}
            typingSpeed={125}
	    />
        <div>
            therefore I am.
        </div>
        <SplashLogo xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-1 0 142 139" enable-background="new 0 0 139.001 139.001">
            <g>
                <CircleAnimation fill="none" cx="69.501" cy="69.501" r="69.501" />
                <g>
                    <PolygonAnimation fill="none" stroke="#FFFFFF" stroke-miterlimit="10" points="69.521,99.461 20.497,50.437 118.544,50.437   "></PolygonAnimation>
                    <LineAnimation fill="none" stroke="#FFFFFF" stroke-miterlimit="10" x1="69.521" y1="99.461" x2="69.521" y2="50.437"></LineAnimation>
                </g>
            </g>
        </SplashLogo>
    </SplashScreenSection>
);

export default SplashScreen