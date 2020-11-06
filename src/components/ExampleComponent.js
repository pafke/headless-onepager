import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: solid yellow 1px;
`;

class ExampleComponent extends Component {
    render() {
        return(
            <Container>
                Dit is een geimporteerd component
            </Container>
        )
    }
}

export default ExampleComponent;