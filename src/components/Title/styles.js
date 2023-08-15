import { styled } from "styled-components";

export const H1 = styled.h1`
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 98px;
    text-align: center;

    ${props => props.isMargin && `
        margin-bottom: 40px;
    
    `}
    
`;


