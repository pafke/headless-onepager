import React from 'react';
import { graphql } from 'gatsby';

import SplashScreen from '../components/SplashScreen.js';
import Introduction from '../components/Introduction.js';
import SkillCloud from '../components/SkillCloud.js';
import Portfolio from '../components/Portfolio.js';
import ContactForm from '../components/ContactForm.js';
import Footer from '../components/Footer.js';
import LogoContainer from '../components/LogoContainer.js';

import styled, { createGlobalStyle } from 'styled-components';

//Global styles
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Raleway:100,400,600&display=swap');
    body {
        margin: 0;
    }
`;
const Container = styled.div`
    text-align: center;
    font-family:'Raleway', sans-serif;
    font-weight: 400;
    color: #444;
    line-height: normal;
`;

class IndexPage extends React.Component {
    constructor() {
        super();
        this.state = {
            hideLogo: 'firstLoad'
        };
    }
    _setLogoVisibility = (splashScreenVisible) => {
        this.setState({hideLogo: splashScreenVisible})
    }
    render() {
        return (
            <Container onScroll={this._testScroll}>
                <LogoContainer hideThis={this.state.hideLogo} />
                <SplashScreen splashScreenVisible={this._setLogoVisibility} />
                <Introduction introductionText={this.props.data.introduction.content.childMarkdownRemark.html} cv={this.props.data.cv.downloadItem.file.url} />
                <SkillCloud />
                <Portfolio portfolioItems={this.props.data.allContentfulPortfolioItem.edges} />
                <ContactForm allotText={this.props.data.allot.content.childMarkdownRemark.html} />
                <Footer />
                <GlobalStyle />
            </Container>
        )
    }
}

export default IndexPage

export const pageQuery = graphql`
    query pageQuery {
        allContentfulPortfolioItem {
            edges {
                node {
                    title
                    id
                    thumbnail {
                        file {
                            url
                        }
                    }
                }
            }
        }
        introduction: contentfulTextPartials(slug: {eq: "hello-there"}) {
            content {
                childMarkdownRemark {
                    html
                }
            }
        }
        allot: contentfulTextPartials(slug: {eq: "allot"}) {
            content {
                childMarkdownRemark {
                    html
                }
            }
        }
        cv: contentfulDownloadableItems(slug: {eq: "cv"}) {
            downloadItem {
                file {
                    url
                }
            }
        }
    }
`