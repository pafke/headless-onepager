import React, { useState, useEffect } from 'react';
import {FlexContainer,LeftContent,RightContent, Container} from './ReusableStyles.js';
import SvgSelf from './SelfPortrait.js';
import { request, gql } from 'graphql-request';
import styled from 'styled-components';

function Introduction ({forwardedRef}) {
    const [textPartial, setTextPartial] = useState(false);
    const [cvUrl, setCvUrl] = useState('#');
    useEffect(() => {
        const query = gql`
            {
                asset(where: { name: "cv" }) {
                    url
                },
                    textPartial(where: { name: "hello-there" }) {
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
        setCvUrl(data.asset.url);
    }
    return(
        <Container ref={forwardedRef}>
            <h1>Hallo daar</h1>
            <FlexContainer>
                <LeftContent dangerouslySetInnerHTML={{__html: textPartial}}>
                </LeftContent>
                <RightContent>
                    <p>
                        <a href={cvUrl}>
                            Download mijn CV
                        </a>
                    </p>
                    <p>
                        <a href="http://nl.linkedin.com/in/timoveld" rel="noopener noreferrer" target="_blank">
                            Linkedin
                        </a>
                    </p>
                    <p>
                        <a href="http://stackoverflow.com/users/5127982/timo" rel="noopener noreferrer" target="_blank">
                            Stackoverflow
                        </a>
                    </p>
                </RightContent>
            </FlexContainer>
            <SvgSelf />
        </Container>
    )
}

export default Introduction

