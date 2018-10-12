import React from 'react'


const PortfolioItem = ({node}) => {
    return (
        <div className="portfolio-item">
            <h3>{node.title}</h3>
            <img alt="alt-text" src={node.thumbnail.file.url} />
        </div>
    )
}

const Portfolio = ({blogItems}) => (
    <section>
        {blogItems.map((edge) => <PortfolioItem key={edge.node.id} node={edge.node} />)}
    </section>
)

export default Portfolio

