import React, { useState, useEffect } from 'react';
import {FlexContainer,LeftContent,RightContent, Container} from './ReusableStyles.js';
import SvgSelf from './SelfPortrait.js';
import StackoverflowIcon from './assets/StackoverflowIcon.js';
import LinkedinIcon from './assets/LinkedinIcon.js';
import { request, gql } from 'graphql-request';
import styled from 'styled-components';

const ButtonLight = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    text-align: center;
    background: #FFF;
    border: solid 2px #50ccb7;
    padding: 15px;
    margin-bottom: 20px;
    text-decoration: none;
    svg {
        height: 18px;
        width: auto;
        margin-right: 6px;
    }
    path {
        fill: #50CCB7;
    }
    &:hover {
        background: #50ccb7;
        color: #FFF;
        path {
            fill: #FFF;
        }
    }
`;

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
                    <ButtonLight href={cvUrl}>
                        Download mijn CV
                    </ButtonLight>
                    <ButtonLight href="http://nl.linkedin.com/in/timoveld" rel="noopener noreferrer" target="_blank">
                        <LinkedinIcon />
                        Linkedin
                    </ButtonLight>
                    <ButtonLight href="http://stackoverflow.com/users/5127982/timo" rel="noopener noreferrer" target="_blank">
                        <StackoverflowIcon />
                        Stackoverflow
                    </ButtonLight>
                </RightContent>
            </FlexContainer>
            <SvgSelf />
        </Container>
    )
}

export default Introduction

