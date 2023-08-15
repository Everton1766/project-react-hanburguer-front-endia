import styled from "styled-components";


export const ContainerItens = styled.div`    
    width: 414px;
    height: 896px;
    display: flex;    
    flex-direction: column;    
    background: rgba(54,54,54, 0.25);
    border-radius: 10px;
    margin-top: 10px;
    ${props => props.isAlign && `
        align-items: center 
    
    `};
    
    
`;
