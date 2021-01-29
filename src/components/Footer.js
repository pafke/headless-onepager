import React from 'react';
import styled from 'styled-components';

const Contact = styled.section`
    background: repeating-linear-gradient(45deg, #CC5065, #CC5065 20px, #fff 20px, #fff 40px, #58a9c9 40px, #58a9c9 60px, #fff 60px, #fff 80px);
    padding: 10px;
`;
const ContactInfo = styled.div`
    padding: 50px;
    background: #f0f0f0;
    text-align: left;
    h2 {
        margin: 0;
        font-size: 28px;
        margin-bottom: 10px;
    }
    a {
        display: block;
        font-size: 24px;
        margin: 10px 0;
    }
    p {
        margin: 20px 0 0 0;
    }
`;

function Footer(props) {
    return(
        <Contact>
            <ContactInfo>
                <h2>Contact</h2>
                <a href="tel:+31643511371">T. 06 435 11 371</a>
                <a href="mailto:mail@timoveld.nl">M. mail@timoveld.nl</a>
                <p>
                    Voor vragen, eventuele samenwerking, of gewoon omdat het kan, mag je altijd contact met mij opnemen.
                </p>
            </ContactInfo>
        </Contact>
    );
}
export default Footer
