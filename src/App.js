import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ExampleComponent from './components/ExampleComponent.js';
import { request, gql } from 'graphql-request';

import SplashScreen from './components/SplashScreen.js';
//import Introduction from './components/Introduction.js';
//import SkillCloud from './components/SkillCloud.js';
//import Portfolio from './components/Portfolio.js';
//import ContactForm from './components/ContactForm.js';
//import Footer from './components/Footer.js';
//import LogoContainer from './components/LogoContainer.js';

const Container = styled.div`
    border: solid red 1px;
`;
const ElementWithThemedStyling = styled.div`
    border: solid ${props => props.borderColor} 1px;
`;

function App () {
    useEffect(() => {
        const query = gql`
          {
              textPartials {
                  id
                  name
                  content {
                      html
                  }
              }
          }
        `;
        request('https://api-eu-central-1.graphcms.com/v2/ckh68bz8a1xyh01yxh3qa131q/master', query).then((data) => console.log(data))
    });
    const _setLogoVisibility = (splashScreenVisible) => {
        console.log('Set logo visibility to: '+splashScreenVisible);
        //this.setState({hideLogo: splashScreenVisible})
    }
    return (
        <Container>
            <SplashScreen splashScreenVisible={_setLogoVisibility} />
            <ElementWithThemedStyling borderColor="blue">
                Dit is een component waarvan de styling met een property bepaald wordt
            </ElementWithThemedStyling>
            <ExampleComponent />
        </Container>
    );
}

export default App;