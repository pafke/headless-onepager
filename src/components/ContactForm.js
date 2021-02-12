import React, { useState, useEffect } from 'react';
import {BgGreen,FlexContainer,LeftContent,RightContent, Container} from './ReusableStyles.js';
import { request, gql } from 'graphql-request';
import styled from 'styled-components';

const SubmitButton = styled.input`
    cursor: pointer;
    &:hover {
        background: #FFF;
        color: #50ccb7;
    }
`;
const FormContainer = styled.div`
    background: #50ccb7;
    color: #000;
    padding: 8%;
    div {
        position: relative;
        margin-bottom: 45px;
    }
    ${SubmitButton} {
        border: solid 2px #FFF;
        padding: 15px;
    }
    input, textarea {
        caret-color: #FFF;
        background: none;
        display: block;
        width: 100%;
        box-sizing: border-box;
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        border: none;
        border-bottom: 1px solid #FFF;
        color: #FFF;
        &:focus, &:active, &:valid {
            outline: none;
            ~ label {
                top: -20px;
                left: 0;
                font-size: 70%;
            }
            ~ div {
                width: 100%;
                left: 0;
            }
        }
    }
    label {
        position: absolute;
        color: #FFF;
        left: 0;
        top: 0;
        transition: top .15s ease-in-out;
    }
`;
const Bar = styled.div`
    position: absolute;
    width: 0;
    height: 2px;
    background: #FFF;
    transition: all .15s ease-in-out;
    left: 50%;
`;


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
                    <FormContainer>
                        <form
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="bot-field" />
                            <div>
                                <input type="text" value={name} name="name" id="name" required onChange={handleNameChange} />
                                <label htmlFor="name">Naam</label>
                                <Bar />
                            </div>
                            <div>
                                <input type="text" value={email} name="email" id="email" required onChange={handleEmailChange} />
                                <label htmlFor="email">Email</label>
                                <Bar />
                            </div>
                            <div>
                                <textarea name="message" value={message} id="message" rows="6" required required onChange={handleMessageChange} />
                                <label htmlFor="message">Project beschrijving</label>
                                <Bar />
                            </div>
                            <SubmitButton type="submit" value="Gunnen man!" />
                        </form>
                        {feedback}
                    </FormContainer>
                </RightContent>
            </FlexContainer>
        </Container>
    );
}


export default ContactForm;