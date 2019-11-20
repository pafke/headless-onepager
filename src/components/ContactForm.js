import React from 'react'
import {BgGreen,FlexContainer,LeftContent,RightContent} from './ReusableStyles.js'

const ContactForm = ({allotText}) => (
    <BgGreen>
        <h1>Gunwerk</h1>
        <FlexContainer>
            <LeftContent dangerouslySetInnerHTML={{__html: allotText}}>
            </LeftContent>
            <RightContent>
        	    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
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