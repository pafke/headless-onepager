import React, { useState, useEffect } from 'react';
import { request, gql } from 'graphql-request';
import {BgGreen,FlexContainer,LeftContent,RightContent} from './ReusableStyles.js';
import styled from 'styled-components';

const ContactForm = styled.section`
    h1 {
        margin: 0;
    }
`;

function Contact(props) {
    const [textPartial, setTextPartial] = useState(false);
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
    return (
        <ContactForm>
            <h1>Gunwerk asdasdasd</h1>
            <FlexContainer>
                <LeftContent dangerouslySetInnerHTML={{__html: textPartial}}>
                </LeftContent>
                <RightContent>
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
        </ContactForm>
    );
}

export default Contact
