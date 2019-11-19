import React from 'react'

import Typewriter from '../components/typewriter.js'
import Introduction from '../components/introduction.js'
import SkillCloud from '../components/skillCloud.js'
import Portfolio from '../components/portfolio.js'
import Contact from '../components/contact.js'
import Footer from '../components/footer.js'

import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    font-family:'Raleway', sans-serif;
    color: #444;
`;

const IndexPage = ({data}) => {
    return (
        <Container>
            <Typewriter />
            <Introduction introductionText={data.introduction.content.childMarkdownRemark.html} cv={data.cv.downloadItem.file.url} />
            <SkillCloud />
            <Portfolio portfolioItems={data.allContentfulPortfolioItem.edges} />
            <Contact allotText={data.allot.content.childMarkdownRemark.html} />
            <Footer />
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