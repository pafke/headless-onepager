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
    width: 100%;
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
    let currentRandomVerb;
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
        setRandomVerbKeepPart(newRandomVerb);
        _startTimer();
    }
    const _startTimer = () => {
        clearTimeout(typerTimer);
        typerTimer = setTimeout(function() {
            _getRandomVerb();
            _getVerbDifference(newRandomVerb, currentRandomVerb);
            //_startTimer();
        }, props.speedOfLoop);
    }
    const _getRandomVerb = () => {
        currentRandomVerb = newRandomVerb;
        newRandomVerb = props.verbs[Math.floor(Math.random()*props.verbs.length)];
        console.log(newRandomVerb);
        console.log(currentRandomVerb);
        if(newRandomVerb === currentRandomVerb) {
            console.log('Retrying');
            _getRandomVerb();
        }
    }
    const _getVerbDifference = (newVerb, currentVerb) => {
        let newVerbSeperated = newVerb.split('');
        let currentVerbSeperated = currentVerb.split('');
        let sameCharacters = 0;
        for (var i = 0; i < newVerbSeperated.length; i++) {
            if(currentVerbSeperated[i] && newVerbSeperated[i] === currentVerbSeperated[i]) {
                sameCharacters = i+1;
            } else {
                break;
            }
        }
        let keepCharacters = currentVerbSeperated.slice(0, sameCharacters);
        let replaceCharacters = currentVerbSeperated.slice(sameCharacters, currentVerbSeperated.length);
            keepCharacters = keepCharacters.join('');
            replaceCharacters = replaceCharacters.join('');
        let newCharacters = newVerbSeperated.slice(sameCharacters, newVerbSeperated.length);
        setRandomVerbKeepPart(keepCharacters);
        setRandomVerbReplacePart(replaceCharacters);
        setTimeout(function() {
            _typeNewCharacters(newCharacters);
        }, props.highlightDuration);
    }
    const _typeNewCharacters = (newCharacters) => {
        let newCharactersString = '';
        setRandomVerbReplacePart(false);
        for (var i = 0; i < newCharacters.length; i++) {
            newCharactersString = newCharactersString+newCharacters[i];
            _setTimeoutForTyping(newCharactersString, i, newCharacters.length);
        }
    }
    const _setTimeoutForTyping = (characters, index, fullLength) => {
        setTimeout(function() {
            if(index === fullLength-1) {
                setRandomVerbKeepPart(newRandomVerb);
                setRandomVerbTypeNewPart(false);
                console.log('Start new');
                _startTimer();
            } else {
                setRandomVerbTypeNewPart(characters);
            }
        }, index*props.typingSpeed);
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
            {randomVerbKeepPart}
            {renderRandomVerbReplacePart}
            {randomVerbTypeNewPart}
        </VerbText>
    );
}

export default TypeEffect;