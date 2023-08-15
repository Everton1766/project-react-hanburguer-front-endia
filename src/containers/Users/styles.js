import styled from "styled-components";


export const ContainerMenor = styled.div`
    width: 342px;
    height: 101px;    
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    display: flex;     
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: black;
    margin: 20px;
    button {
        background: none;
        border: none;
        cursor: pointer;
        margin: 20px;
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px;
    p {
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        color: #fff;
        
    }
`
export const Image = styled.img`
    width: 342px;
    height: 354px;
    margin-left: auto;
    margin-right: auto;
`;
