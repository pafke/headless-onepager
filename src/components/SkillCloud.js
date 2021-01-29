import React from 'react'
import {BgGreen} from './ReusableStyles.js';
import { TagCloud } from 'react-tagcloud';
import styled, {keyframes} from 'styled-components';

const data = [
    { value: 'HTML', count: 10 },
    { value: 'CSS', count: 10 },
    { value: 'Javascript', count: 10 },
    { value: 'Git', count: 9 },
    { value: 'React', count: 9 },
    { value: 'LESS', count: 8 },
    { value: 'SASS', count: 8 },
    { value: 'NPM', count: 7 },
    { value: 'Node', count: 5},
    { value: 'Socket.io', count: 4 },
    { value: 'Webpack', count: 3 },
    { value: 'Babel.js', count: 3 },
    { value: 'Electron', count: 1 }
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
    @media (min-width: 640px) {
        width: 40%;
        margin: 0 auto;
    }
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
