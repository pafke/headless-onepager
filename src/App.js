import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SplashScreen from './components/SplashScreen.js';
import Introduction from './components/Introduction.js';
//import SkillCloud from './components/SkillCloud.js';
//import Portfolio from './components/Portfolio.js';
import ContactForm from './components/ContactForm.js';
//import Footer from './components/Footer.js';
//import LogoContainer from './components/LogoContainer.js';

const Container = styled.div`
    border: solid red 1px;
    text-align: center;
`;
const ElementWithThemedStyling = styled.div`
    border: solid ${props => props.borderColor} 1px;
`;

function App () {
    const _setLogoVisibility = (splashScreenVisible) => {
        console.log('Set logo visibility to: '+splashScreenVisible);
        //this.setState({hideLogo: splashScreenVisible})
    }
    return (
        <Container>
            <SplashScreen splashScreenVisible={_setLogoVisibility} />
            <Introduction />
            <ContactForm />
        </Container>
    );
}

export default App;