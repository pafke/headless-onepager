import React from 'react'
import {BgGreen,FlexContainer,LeftContent,RightContent} from './ReusableStyles.js'

const ContactForm = ({allotText}) => (
    <BgGreen>
        <h1>Gunwerk</h1>
        <FlexContainer>
            <LeftContent dangerouslySetInnerHTML={{__html: allotText}}>
            </LeftContent>
            <RightContent>
             	<form name="contact" netlify netlify-honeypot="bot-field" hidden>
    	      		<input type="text" name="name" />
        	      	<input type="email" name="email" />
        	      	<textarea name="message"></textarea>
        	    </form>
        	    <form name="contact" method="post">
        	              <input type="hidden" name="form-name" value="contact" />
        	              <p>
        	                <label>Your Name: <input type="text" name="name"/></label>
        	              </p>
        	              <p>
        	                <label>Your Email: <input type="email" name="email"/></label>
        	              </p>
        	              <p>
        	                <label>Message: <textarea name="message"></textarea></label>
        	              </p>
        	              <p>
        	                <button type="submit">Send</button>
        	              </p>
        	            </form>
            </RightContent>
        </FlexContainer>
    </BgGreen>
);

export default ContactForm;