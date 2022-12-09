import styled from "styled-components";

export const HomePageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1 {
        font-size: 1.5rem;
        color: #293845;
        margin: 2.5rem 0;
        cursor: default;
    }

    img {
        width: 10rem;
        margin-bottom: 1.5rem;
        cursor: pointer;
    }

    .catalog {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 70%;
    }
`;