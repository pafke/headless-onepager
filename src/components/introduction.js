import React from 'react'

const Introduction = ({ contentfulTextPartials }) => (
    <section>
        Introduction
    </section>
)

export default Introduction

export const pageQuery = graphql`
    query helloThereQuery{
        contentfulTextPartials(slug: {eq: "hello-there"}) {
            slug
            content {
              content
            }
        }
    }
`