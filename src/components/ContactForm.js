import React from 'react'
import {BgGreen,FlexContainer,LeftContent,RightContent} from './ReusableStyles.js'

class ContactForm extends React.Component {
    testFunction(data) {
        console.log('Success');
        console.log(data);
    }
    render() {
        return(
            <BgGreen>
                <h1>Gunwerk</h1>
                <FlexContainer>
                    <LeftContent dangerouslySetInnerHTML={{__html: this.props.allotText}}>
                    </LeftContent>
                    <RightContent>
                	    <form
                            name="contact"
                            method="post"
                            action={this.testFunction}
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                            <input type="hidden" name="bot-field" />
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows="6" required />
                            </div>
                            <div>
                                <input type="submit" value="Drop a line" />
                                <input type="reset" value="Eraser" />
                            </div>
                        </form>
                    </RightContent>
                </FlexContainer>
            </BgGreen>
        );
    }
}

export default ContactForm;