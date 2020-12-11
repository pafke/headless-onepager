import React, {useState, useEffect} from 'react';
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
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.1;
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
    margin-top: 25px;
    @media (min-width: 640px) {
        width: 200px;
        height: 200px;
    }
    @media (min-width: 980px) {
        width: 250px;
        height: 250px;
    }
`;
const HeartBeat = keyframes`
    from { transform: scale(1) }
    to { transform: scale(1.3) }
`;
const ArrowDownContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
`;
const ArrowDown = styled.svg`
    animation: ${HeartBeat} .60s infinite alternate;
    stroke-width: 8;
`;

function SplashScreen (props) {
    const [splashScreenReference, setSplashScreenReference] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.intersectionRatio === 0) {
                    props.splashScreenVisible(true);
                } else {
                    props.splashScreenVisible(false);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                treshhold: 1.0
            }
        );
        if(splashScreenReference) {
            observer.observe(splashScreenReference);
        }
    });
    return (
        <SplashScreenSection ref={(splashScreenRef) =>  setSplashScreenReference(splashScreenRef) }>
            <div>
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
                            <PolygonAnimation fill="none" stroke="#FFFFFF"  points="69.521,99.461 20.497,50.437 118.544,50.437   "></PolygonAnimation>
                            <LineAnimation fill="none" stroke="#FFFFFF" x1="69.521" y1="99.461" x2="69.521" y2="50.437"></LineAnimation>
                        </g>
                    </g>
                </SplashLogo>
                <ArrowDownContainer>
                    <ArrowDown version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="49.771px" height="31.333px" viewBox="0 0 49.771 31.333" enable-background="new 0 0 49.771 31.333" >
                        <polyline fill="none" stroke="#FFFFFF" points="46.611,3.467 24.885,25.193 3.16,3.467 "/>
                    </ArrowDown>
                </ArrowDownContainer>
            </div>
        </SplashScreenSection>
    );
}

export default SplashScreen