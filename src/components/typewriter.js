import React from 'react';

class TypeEffect extends React.Component {
    constructor(props) {
        super(props);
        this.state = { randomVerb: false};
    }
    componentDidMount = () => {
        this.setState({randomVerb: [this._getRandomVerb()]});
        this._startCounterNewVerb();
    }
    _getRandomVerb = () => {
        let randomVerb = this.props.verbs[Math.floor(Math.random()*this.props.verbs.length)];
        if(randomVerb === this.state.randomVerb[0]) {
            console.log('Retrying');
            return this._getRandomVerb();
        } else {
            return randomVerb;
        }
    }
    _startCounterNewVerb = () => {
        clearTimeout(this.counterNewVerb);
        const counterNewVerb = this._counterNewVerb;
        this.counterNewVerb = setTimeout(function() {
            counterNewVerb();
        }, this.props.speedOfLoop);
    }
    _counterNewVerb = () => {
        clearTimeout(this.counterHighlight)
        //Verschil tussen nieuwe waardes tonen
        let newVerb = this._getRandomVerb();
        let newVerbSeperated = newVerb.split('');
        let currentVerbSeperated = this.state.randomVerb[0].split('');
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
        this.setState({randomVerb: [keepCharacters, replaceCharacters]});
        //let restartVerb = this._restartVerb;
        let typeNewVerb = this._typeNewVerb;
        this.counterHighlight = setTimeout(function() {
            typeNewVerb(newVerb, newCharacters);
        }, this.props.highlightDuration);
    }
    _setTimeoutForTyping = (typeOutNewVerb, index, newVerb) => {
        const setStateNewWord = this._setStateTypeNewVerb;
        const origCharacters = this.state.randomVerb[0];
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
        this.setState({randomVerb: [this.state.randomVerb[0], typeOutNewVerb]});
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
        //Hier zorgen dat nieuwe letters uitgetypt worden
        this.setState({randomVerb: [newVerb]});
        this._startCounterNewVerb();
    }
    render() {

        let verbReplacePart;
        if (this.state.randomVerb[1]) {
            verbReplacePart = <span className="highlighted">{this.state.randomVerb[1]}</span>;
        }

        return (
            <div>
                {this.state.randomVerb[0]}
                {verbReplacePart}
            </div>
        );
    }
}

const Typewriter = () => (
    <section className="bg-green fullscreen">
    	I
        <TypeEffect
	        verbs={[
	        	'Create',
	        	'Develop',
	        	'Render',
	        	'Design',
	        	'Debug',
	        	'Visualise',
	        	'Animate'
	        ]}
	        speedOfLoop={500}
	        highlightDuration={1000}
            typingSpeed={100}
	    />
	    therefore I am.
    </section>
);

export default Typewriter