import React from 'react'
import {FlexContainer,LeftContent,RightContent} from './reusableStyles.js'

const Introduction = ({introductionText, cv}) => {
    return(
        <section>
            <h1>Hallo daar</h1>.
            <FlexContainer>
                <LeftContent dangerouslySetInnerHTML={{__html: introductionText}}>
                </LeftContent>
                <RightContent>
                    <p>
                        <a href={cv}>
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

