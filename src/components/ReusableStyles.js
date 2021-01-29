import styled from 'styled-components';

const BgGreen = styled.section`
    background-color: #50ccb7;
    color: #FFF;
    h1 {
        margin: 0;
        font-size: 28px;
        margin-bottom: 10px;
    }
    @media (min-width: 640px) {
        padding: 50px 25px;
    }
`;
const Container = styled.section`
    h1 {
        margin: 0;
        color: #50ccb7;
        font-size: 28px;
        margin-bottom: 10px;
    }
    p {
        margin: 0 0 10px 0;
    }
    @media (min-width: 640px) {
        padding: 50px 25px;
    }
`;
const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const LeftContent = styled.div`
    text-align: right;
    width: 40%;
    margin-right: 20px;
`;
const RightContent = styled.div`
    text-align: left;
    width: 40%;
    margin-left: 20px;
`;

export {
    BgGreen,
    FlexContainer,
    LeftContent,
    RightContent,
    Container
};