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
    const [randomVerbKeepPart, setRandomVerbKeepPart] = useState(false);
    const [randomVerbReplacePart, setRandomVerbReplacePart] = useState(false);
    const [randomVerbTypeNewPart, setRandomVerbTypeNewPart] = useState(false);
    useEffect(() => {
        //Op eerste load, eerste verb zetten en timer starten om 2e verb te genereren en verschil aan te duiden
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
        }, props.speedOfLoop);
    }
    const _getRandomVerb = () => {
        //Nieuwwe random verb genereren
        currentRandomVerb = newRandomVerb;
        newRandomVerb = props.verbs[Math.floor(Math.random()*props.verbs.length)];
        if(newRandomVerb === currentRandomVerb) {
            _getRandomVerb();
        }
    }
    const _getVerbDifference = (newVerb, currentVerb) => {
        //Nieuwe verb en oude vergelijken, indien string zelfde characters aan begin heeft, deze behouden
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
        //Verschil tussen nieuwe en oude verb highlighten
        setRandomVerbKeepPart(keepCharacters);
        setRandomVerbReplacePart(replaceCharacters);
        //Highlight in beeld laten voor zolang gezet is in de prop 'highlightDuration'
        setTimeout(function() {
            _typeNewCharacters(newCharacters);
        }, props.highlightDuration);
    }
    const _typeNewCharacters = (newCharacters) => {
        let newCharactersString = '';
        //Highlight stuk inactief zetten
        setRandomVerbReplacePart(false);
        //Nieuwe letters uit typen, via nieuwe functie doen omdat anders i kwijt raakt in de for loop
        for (var i = 0; i < newCharacters.length; i++) {
            newCharactersString = newCharactersString+newCharacters[i];
            _setTimeoutForTyping(newCharactersString, i, newCharacters.length);
        }
    }
    const _setTimeoutForTyping = (characters, index, fullLength) => {
        setTimeout(function() {
            //Wanneer nieuwe deel volledig uit getypt is, randomVerbTypeNewPart resetten en randomVerbKeepPart op nieuwe volledige string zetten
            if(index === fullLength-1) {
                setRandomVerbKeepPart(newRandomVerb);
                setRandomVerbTypeNewPart(false);
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