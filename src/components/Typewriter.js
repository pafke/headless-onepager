import React, { useState, useEffect } from 'react';

function TypeEffect () {
    const randomVerb = useState(false);
    useEffect(() => {
        this.setState({randomVerb: this._getRandomVerb()});
        this._startCounterNewVerb();
    });
    _getRandomVerb = () => {
        let randomVerb = this.props.verbs[Math.floor(Math.random()*this.props.verbs.length)];
        if(randomVerb === this.state.randomVerb) {
            console.log('Retrying');
            return this._getRandomVerb();
        } else {
            return randomVerb;
        }
    };
    _startCounterNewVerb = () => {
        clearTimeout(this.counterNewVerb);
        const counterNewVerb = this._counterNewVerb;
        this.counterNewVerb = setTimeout(function() {
            counterNewVerb();
        }, this.props.speedOfLoop);
    };
    _counterNewVerb = () => {
        console.log('A');
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

        console.log('Same characters for ');
        console.log(newVerb);
        console.log(this.state.randomVerb);
        console.log('is '+sameCharacters);
        console.log(keepCharacters);
        console.log(replaceCharacters);

    };
    return (
        <div>
            {this.state.randomVerb}
        </div>
    );
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
	        highlightDuration={5000}
            //loop={true}
            //selectionColor={'#FFF'}
	    />
	    therefore I am.
    </section>
);

export default Typewriter