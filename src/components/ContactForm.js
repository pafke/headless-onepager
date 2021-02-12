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
        this.state = { name: "", email: "", message: "", feedback: false };
    }
    handleSubmit = (e) => {
        console.log(...this.state);
        e.preventDefault();
        /*fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
        .then(() => {
            console.log("Success!");
            this.showFeedback("Bericht succesvol verzonden!");
        })
        .catch((error) => {
            console.log(error)
            this.showFeedback("Er ging iets mis!");
        });
        */
    }
    _resetFeedback = () => {
        this.setState({feedback: false});
    }
    showFeedback = (feedback) => {
        clearTimeout(this.showingFeedback);
        this.setState({feedback: feedback, name: "", email: "", message: ""});
        const resetFeedback = this._resetFeedback;
        this.showingFeedback = setTimeout(function() {
            resetFeedback();
        }, 5000);
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value , feedback: false });
    }
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
                        >
                            <input type="hidden" name="bot-field" />
                            <div>
                                <label htmlFor="name">Naam</label>
                                <input type="text" value={name} name="name" id="name" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" value={email} name="email" id="email" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label htmlFor="message">Bericht</label>
                                <textarea name="message" value={message} id="message" rows="6" required onChange={this.handleChange} />
                            </div>
                            <div>
                                <button onClick={this.handleSubmit} value="Drop a line" /> TEST12345 <button/>
                                <input type="reset" value="Eraser" />
                            </div>
                        </form>
                        {this.state.feedback}
                    </RightContent>
                </FlexContainer>
            </BgGreen>
        );
    }
}

export default ContactForm;