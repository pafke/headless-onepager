import React from 'react';
import {FlexContainer,LeftContent,RightContent} from './ReusableStyles.js';
import SvgSelf from './SelfPortrait.js';

function Introduction (props) {
    let introductionText;
    if(props.textPartials && props.textPartials["hello-there"]) {
        introductionText = props.textPartials["hello-there"];
    }
    return(
        <section>
            <h1>Hallo daar</h1>.
            <SvgSelf />
            <FlexContainer>
                <LeftContent dangerouslySetInnerHTML={{__html: introductionText}}>
                </LeftContent>
                <RightContent>
                    <p>
                        <a href={props.cv}>
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
        </section>
    )
}

export default Introduction

