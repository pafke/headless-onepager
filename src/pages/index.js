import React from 'react'

import Typewriter from '../components/typewriter.js'
import Introduction from '../components/introduction.js'
import SkillCloud from '../components/skillCloud.js'
import Portfolio from '../components/portfolio.js'
import Contact from '../components/contact.js'
import Footer from '../components/footer.js'

const IndexPage = ({data}) => {
    console.log(data);
    return (
        <div>
            <Typewriter />
            <Introduction contentfulTextPartials={data.introduction} />
            <SkillCloud />
            <Portfolio blogItems={data.allContentfulPortfolioItem.edges} />
            <Contact />
            <Footer />
        </div>
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
                content
            }
        }
    }
`