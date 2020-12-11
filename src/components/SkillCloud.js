import React from 'react'
import {BgGreen} from './ReusableStyles.js';
import { TagCloud } from 'react-tagcloud';
import styled, {keyframes} from 'styled-components';

const data = [
    { value: 'jQuery', count: 50 },
    { value: 'MongoDB', count: 18 },
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'CSS3', count: 20 },
    { value: 'Webpack', count: 22 },
    { value: 'Babel.js', count: 7 },
    { value: 'ECMAScript', count: 25 },
    { value: 'Jest', count: 15 },
    { value: 'Mocha', count: 17 },
    { value: 'React Native', count: 27 },
    { value: 'Angular.js', count: 30 },
    { value: 'TypeScript', count: 15 },
    { value: 'Flow', count: 30 },
    { value: 'NPM', count: 11 }
];
const rotate = keyframes`
    0%
    {
        transform: scale( .85 );
    }
    20%
    {
        transform: scale( 1 );
    }
    40%
    {
        transform: scale( .85 );
    }
    60%
    {
        transform: scale( 1 );
    }
    80%
    {
        transform: scale( .85 );
    }
    100%
    {
        transform: scale( .85 );
    }
`;
const Tag = styled.div`
    display: inline-block;
    animation: ${rotate} 5s linear infinite;
    animation-delay: ${props => props.size}s;
    font-size: ${props => props.size*10}px;
    margin: 3px;
    padding: 3px;
    color: white;
`;
const TagCloudContainer = styled.div`
    width: 40%;
    margin: 0 auto;
`;

// custom renderer is function which has tag, computed font size and
// color as arguments, and returns react component which represents tag
const customRenderer = (tag, size) => (
    <Tag key={tag.value} size={size} >
        {tag.value}
    </Tag>
);

const SkillCloud = function() {
    return(
        <BgGreen>
            <h1>Skills</h1>
            <p>
            	Een greep uit de technieken waarmee ik ervaring heb.
            </p>
            <TagCloudContainer>
                <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
            </TagCloudContainer>
        </BgGreen>
    );
};

export default SkillCloud
