import React from 'react';
import { graphql } from 'gatsby';

import SplashScreen from '../components/SplashScreen.js';
import Introduction from '../components/Introduction.js';
import SkillCloud from '../components/SkillCloud.js';
import Portfolio from '../components/Portfolio.js';
import ContactForm from '../components/ContactForm.js';
import Footer from '../components/Footer.js';

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
    font-weight: 100;
    color: #444;
    line-height: normal;
`;

const IndexPage = ({data}) => {
    return (
        <Container>
            <SplashScreen />
            <Introduction introductionText={data.introduction.content.childMarkdownRemark.html} cv={data.cv.downloadItem.file.url} />
            <SkillCloud />
            <Portfolio portfolioItems={data.allContentfulPortfolioItem.edges} />
            <ContactForm allotText={data.allot.content.childMarkdownRemark.html} />
            <Footer />
            <GlobalStyle />
        </Container>
    )
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