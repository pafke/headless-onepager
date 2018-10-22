import React from 'react'

const Contact = ({allotText}) => (
    <section>
        <h1>Gunwerk</h1>
        <div className="content-left" dangerouslySetInnerHTML={{__html: allotText}}>
        </div>
        <div className="content-right">
            <form name="contactForm" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <div className="group">
                    <input name="naam" type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Naam</label>
                </div>
                <div className="group">
                    <input name="email" type="text" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Email</label>
                </div>
                <div className="group">
                    <textarea id="message" rows="5" name="bericht" required></textarea>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Project beschrijving</label>
                </div>
                <input type="submit" value="Gunnen man!" />
            </form>
        </div>
    </section>
)

export default Contact
