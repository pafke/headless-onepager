import React, { useState, useEffect } from 'react';
import { request, gql } from 'graphql-request';
import {BgGreen,FlexContainer,LeftContent,RightContent} from './ReusableStyles.js';

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
        <BgGreen>
            <h1>Gunwerk</h1>
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
        </BgGreen>
    );
}

export default Contact
