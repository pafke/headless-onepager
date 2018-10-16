import React from 'react'

const Contact = ({allotText}) => (
    <section>
        <h1>Gunwerk</h1>
        <div class="content-left" dangerouslySetInnerHTML={{__html: allotText}}>
        </div>
    </section>
)

export default Contact
