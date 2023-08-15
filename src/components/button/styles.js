import styled from 'styled-components'


export const Button = styled.button`
    display: flex;
    width: 342px;
    height: 68px;
    padding: 0px 113px;
    justify-content: center;
    align-items: center;
    margin-left: 36px;
    margin-right: 36px;
    border: none;
    border-radius: 10px;
    background: ${ props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856'};
    font-size: 17px;
    font-style: normal;
    font-weight: 900;
    line-height: 2.5px;
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;
   
    
`;