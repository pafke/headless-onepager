import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SplashScreen from './components/SplashScreen.js';
import Introduction from './components/Introduction.js';
//import SkillCloud from './components/SkillCloud.js';
import ContactForm from './components/ContactForm.js';
import Footer from './components/Footer.js';
import LogoContainer from './components/LogoContainer.js';

const Container = styled.div`
    text-align: center;
`;
const ElementWithThemedStyling = styled.div`
    border: solid ${props => props.borderColor} 1px;
`;

function App () {
    const [logoVisibility, setLogoVisibility] = useState(false);
    const _setLogoVisibility = (splashScreenVisible) => {
        if(logoVisibility !== splashScreenVisible) {
            setLogoVisibility(splashScreenVisible);
        }
    }
    return (
        <Container>
            <LogoContainer logoVisibility={logoVisibility} />
            <SplashScreen splashScreenVisible={_setLogoVisibility} />
            <Introduction />
            <ContactForm />
            <Footer />
        </Container>
    );
}

export default App;