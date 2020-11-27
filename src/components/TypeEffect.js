import React, {useState, useEffect} from 'react';
import styled, { keyframes  } from 'styled-components'
import BaseAnimation from './BaseAnimation.js';

const SelectAnimation = keyframes`
    from { transform: scaleX(0) }
    to { transform: scaleX(1)  }
`;
const SelectTextAnimation = styled(BaseAnimation)`
    animation-name: ${SelectAnimation};
    transform-origin: right;
    position: absolute;
    height: 100%;
    width: 100%
    left: 0;
    top: 0;
    background: #FFF;
`;
const HighlightText = styled.span`
    position: relative;
`;
const VerbText = styled.span`
    font-weight: 400;
`;

function TypeEffect (props) {
    let newRandomVerb;
    let typerTimer;
    const [randomVerb, setRandomVerb] = useState(false);
    const [randomVerbKeepPart, setRandomVerbKeepPart] = useState(false);
    const [randomVerbReplacePart, setRandomVerbReplacePart] = useState(false);
    const [randomVerbTypeNewPart, setRandomVerbTypeNewPart] = useState(false);
    useEffect(() => {
        _startApp();

    },[]);
    const _startApp = () => {
        _getRandomVerb();
        setRandomVerb(newRandomVerb);
        _startTimer();
    }
    const _startTimer = () => {
        clearTimeout(typerTimer);
        typerTimer = setTimeout(function() {
            _getRandomVerb();
            setRandomVerb(newRandomVerb);
            _startTimer();
        }, props.speedOfLoop);
    }
    const _getRandomVerb = () => {
        newRandomVerb = props.verbs[Math.floor(Math.random()*props.verbs.length)];
        if(newRandomVerb === randomVerb) {
            console.log('Retrying');
            _getRandomVerb();
        }
    }
    let renderRandomVerbReplacePart;
    if (randomVerbReplacePart) {
        renderRandomVerbReplacePart = <HighlightText>
                                    {randomVerbReplacePart}
                                    <SelectTextAnimation
                                        timingFunction="ease"
                                        duration=".15s"
                                    />
                                </HighlightText>;
    }
    return (
        <VerbText>
            {randomVerb}
            {randomVerbKeepPart}
            {randomVerbReplacePart}
            {randomVerbTypeNewPart}
        </VerbText>
    );
}

export default TypeEffect;