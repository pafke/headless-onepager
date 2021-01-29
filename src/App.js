import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import SplashScreen from './components/SplashScreen.js';
import Introduction from './components/Introduction.js';
import SkillCloud from './components/SkillCloud.js';
import ContactForm from './components/ContactForm.js';
import Footer from './components/Footer.js';
import LogoContainer from './components/LogoContainer.js';

const Container = styled.div`
    text-align: center;
    font-size: 20px;
    a {
        text-decoration: none;
        color: #50ccb7;
    }
    p {
        margin: 0 0 10px 0;
    }
`;
const ElementWithThemedStyling = styled.div`
    border: solid ${props => props.borderColor} 1px;
`;

function App () {
    const [logoVisibility, setLogoVisibility] = useState(false);
    const introductionRef = useRef(null);
    const _scrollDown = () => introductionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const _setLogoVisibility = (splashScreenVisible) => {
        if(logoVisibility !== splashScreenVisible) {
            setLogoVisibility(splashScreenVisible);
        }
    }
    return (
        <Container>
            <LogoContainer logoVisibility={logoVisibility} />
            <SplashScreen _scrollDown={_scrollDown} splashScreenVisible={_setLogoVisibility} />
            <Introduction forwardedRef={introductionRef} />
            <SkillCloud />
            <ContactForm />
            <Footer />
        </Container>
    );
}

export default App;