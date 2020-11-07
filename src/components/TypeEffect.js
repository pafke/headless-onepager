import React from 'react';
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

class TypeEffect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomVerb: false,
            randomVerbKeepPart: false,
            randomVerbReplacePart: false,
            randomVerbTypeNewPart: false
        };
    }
    componentDidMount = () => {
        this.setState({randomVerb: this._getRandomVerb()});
        this._startCounterNewVerb();
    }
    _getRandomVerb = () => {
        let randomVerb = this.props.verbs[Math.floor(Math.random()*this.props.verbs.length)];
        if(randomVerb === this.state.randomVerb) {
            console.log('Retrying');
            return this._getRandomVerb();
        } else {
            return randomVerb;
        }
    }
    _startCounterNewVerb = () => {
        clearTimeout(this.counterNewVerb);
        const counterNewVerb = this._counterHighlightVerb;
        this.counterNewVerb = setTimeout(function() {
            counterNewVerb();
        }, this.props.speedOfLoop);
    }
    _counterHighlightVerb = () => {
        clearTimeout(this.counterHighlight)
        //Verschil tussen nieuwe waardes tonen
        let newVerb = this._getRandomVerb();
        let newVerbSeperated = newVerb.split('');
        let currentVerbSeperated = this.state.randomVerb.split('');
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
        this.setState({
            randomVerb: false,
            randomVerbKeepPart: keepCharacters,
            randomVerbReplacePart: replaceCharacters,
        });
        let typeNewVerb = this._typeNewVerb;
        this.counterHighlight = setTimeout(function() {
            typeNewVerb(newVerb, newCharacters);
        }, this.props.highlightDuration);
    }
    _setTimeoutForTyping = (typeOutNewVerb, index, newVerb) => {
        const setStateNewWord = this._setStateTypeNewVerb;
        const origCharacters = this.state.randomVerbKeepPart;
        const restartVerb = this._restartVerb;
        setTimeout(
            function() {
                setStateNewWord(typeOutNewVerb)
                //Hier check maken die kijkt of woord voltooid is
                if(typeOutNewVerb.length+origCharacters.length === newVerb.length) {
                    restartVerb(newVerb);
                }
            },
            index*this.props.typingSpeed
        );
    }
    _setStateTypeNewVerb = (typeOutNewVerb, index) => {
        this.setState({
            randomVerbReplacePart: false,
            randomVerbTypeNewPart: typeOutNewVerb
        });
    }
    _typeNewVerb = (newVerb, newCharacters) => {
        let typeOutNewVerb = '';
        const setTimeoutForTyping = this._setTimeoutForTyping;
        for (var i = 0; i < newCharacters.length; i++) {
            typeOutNewVerb = typeOutNewVerb+newCharacters[i];
            setTimeoutForTyping(typeOutNewVerb, i, newVerb);
        }
    }
    _restartVerb = (newVerb) => {
        this.setState({
            randomVerb: newVerb,
            randomVerbKeepPart: false,
            randomVerbReplacePart: false,
            randomVerbTypeNewPart: false
        });
        this._startCounterNewVerb();
    }
    render() {
        let randomVerbReplacePart;
        if (this.state.randomVerbReplacePart) {
            randomVerbReplacePart = <HighlightText>
                                        {this.state.randomVerbReplacePart}
                                        <SelectTextAnimation
                                            timingFunction="ease"
                                            duration=".15s"
                                        />
                                    </HighlightText>;
        }
        return (
            <VerbText>
                {this.state.randomVerb}
                {this.state.randomVerbKeepPart}
                {randomVerbReplacePart}
                {this.state.randomVerbTypeNewPart}
            </VerbText>
        );
    }
}

export default TypeEffect;