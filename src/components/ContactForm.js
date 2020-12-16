import React, { useState, useEffect } from 'react';
import {BgGreen,FlexContainer,LeftContent,RightContent, Container} from './ReusableStyles.js';
import { request, gql } from 'graphql-request';
import styled from 'styled-components';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const ContactForm = function(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [feedback, setFeedback] = useState(false);
    const [textPartial, setTextPartial] = useState(false);
    let showingFeedback;
    useEffect(() => {
        const query = gql`
            {
                textPartial(where: { name: "allot" }) {
                    content {
                        html
                    }
                }
            }
        `;
        request('https://api-eu-central-1.graphcms.com/v2/ckh68bz8a1xyh01yxh3qa131q/master', query).then((data) => _getCorrectData(data))
    },[]);
    const _getCorrectData = (data) => {
        setTextPartial(data.textPartial.content.html);
    }
    const handleSubmit = (e) => {
        fetch("/", {
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
        e.preventDefault();
    }
    const _resetFeedback = () => {
        setFeedback(false);
    }
    const showFeedback = (feedback) => {
        clearTimeout(showingFeedback);

        setFeedback(feedback);
        setName('');
        setEmail('');
        setMessage('');

        showingFeedback = setTimeout(function() {
            _resetFeedback();
        }, 5000);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
        setFeedback(false);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setFeedback(false);
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setFeedback(false);
    }
    return(
        <Container>
            <h1>Gunwerk</h1>
            <FlexContainer>
                <LeftContent dangerouslySetInnerHTML={{__html: textPartial}}>
                </LeftContent>
                <RightContent>
                    <form
                        name="contact"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="bot-field" />
                        <div>
                            <label htmlFor="name">Naam</label>
                            <input type="text" value={name} name="name" id="name" onChange={handleNameChange} />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" value={email} name="email" id="email" onChange={handleEmailChange} />
                        </div>
                        <div>
                            <label htmlFor="message">Bericht</label>
                            <textarea name="message" value={message} id="message" rows="6" required onChange={handleMessageChange} />
                        </div>
                        <div>
                            <input type="submit" value="Drop a line" />
                            <input type="reset" value="Eraser" />
                        </div>
                    </form>
                    {feedback}
                </RightContent>
            </FlexContainer>
        </Container>
    );
}


export default ContactForm;