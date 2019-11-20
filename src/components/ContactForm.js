import React from 'react'
import {BgGreen,FlexContainer,LeftContent,RightContent} from './ReusableStyles.js'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }
    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => console.log("Success!"))
        .catch(error => console.log(error));

      e.preventDefault();
    }
    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    render() {
        const { name, email, message } = this.state;
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
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={this.handleSubmit}
                        >
                            <input type="hidden" name="bot-field" />
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" value={name} name="name" id="name" />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" value={email} name="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" value={message} id="message" rows="6" required />
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