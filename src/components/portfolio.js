import React from 'react'


const PortfolioItem = ({node}) => (
    <div>
        <h3>{node.title}</h3>
        <img alt="alt-text" src={node.thumbnail.file.url} />
    </div>
)

const Portfolio = ({portfolioItems}) => (
    <section>
    	<h1>Werk</h1>
    	<p>
    		Een greep uit mijn werk dat publiekelijk beschikbaar is.
    	</p>
    	<div>
        	{portfolioItems.map((edge) => <PortfolioItem key={edge.node.id} node={edge.node} />)}
        </div>
    </section>
)

export default Portfolio