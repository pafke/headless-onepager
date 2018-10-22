import React from 'react'

const Introduction = ({introductionText, cv}) => {
    return(
        <section>
            <h1>Hallo daar</h1>.
            <div className="flex-container">
                <div className="content-left" dangerouslySetInnerHTML={{__html: introductionText}}>
                </div>
                <div className="content-right">
                    <p>
                        <a href={cv} className="button-ghost">
                            Download mijn CV
                        </a>
                    </p>
                    <p>
                        <a href="http://nl.linkedin.com/in/timoveld" rel="noopener noreferrer" target="_blank" className="button-ghost">
                            Linkedin
                        </a>
                    </p>
                    <p>
                        <a href="http://stackoverflow.com/users/5127982/timo" rel="noopener noreferrer" target="_blank" className="button-ghost">
                            Stackoverflow
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Introduction

