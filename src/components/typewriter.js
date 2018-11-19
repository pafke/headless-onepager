import React from 'react';
import HotTyper from 'react-hot-typer';

const Typewriter = () => (
    <section className="bg-green fullscreen">
    	I
        <HotTyper
	        text={[
	        	'Create',
	        	'Develop',
	        	'Render',
	        	'Design',
	        	'Debug',
	        	'Visualise',
	        	'Animate'
	        ]}
	        speedOfLoop={1000}
	        highlightDuration={60000}
	    /><br />
	    therefore I am.
    </section>
)

export default Typewriter