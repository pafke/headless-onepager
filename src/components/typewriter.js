import React from 'react';
import styled, { keyframes  } from 'styled-components'
import BaseAnimation from './baseAnimation.js';
import {BgGreen} from './reusableStyles.js'

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
const TypeWriterSection = styled(BgGreen)`
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

const Typewriter = () => (
    <TypeWriterSection>
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
    </TypeWriterSection>
);

export default Typewriter