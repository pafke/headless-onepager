import React from 'react'

const Contact = ({allotText}) => (
    <section className="bg-green">
        <h1>Gunwerk</h1>
        <div className="flex-container">
            <div className="content-left" dangerouslySetInnerHTML={{__html: allotText}}>
            </div>
            <div className="content-right">
             	<form name="contact" netlify netlify-honeypot="bot-field" hidden>
    	      		<input type="text" name="name" />
        	      	<input type="email" name="email" />
        	      	<textarea name="message"></textarea>
        	    </form>
            </div>
        </div>
    </section>
)

export default Contact
