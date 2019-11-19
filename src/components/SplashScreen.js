import React from 'react';
import styled from 'styled-components'
import TypeEffect from './TypeEffect.js';
import {BgGreen} from './ReusableStyles.js'

const SplashScreenSection = styled(BgGreen)`
    height: 100vh;
    font-size: 48px;
    @media (min-width: 640px) {
        font-size: 64px;
    }
    @media (min-width: 980px) {
        font-size: 78px;
    }
`;
const SplashLogo = styled.svg`
    border: solid #FFF 1px;
    border-radius: 50%;
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
        <SplashLogo xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="139px" height="139px" viewBox="-1 0 142 139" enable-background="new 0 0 139.001 139.001">
            <g>
                <circle fill="none" cx="69.501" cy="69.501" r="69.501"></circle>
                <g>
                    <polygon fill="none" stroke="#FFFFFF" stroke-miterlimit="10" points="69.521,99.461 20.497,50.437 118.544,50.437   "></polygon>
                    <line fill="none" stroke="#FFFFFF" stroke-miterlimit="10" x1="69.521" y1="99.461" x2="69.521" y2="50.437"></line>
                </g>
            </g>
        </SplashLogo>
    </SplashScreenSection>
);

export default SplashScreen