import styled from "styled-components";

export const HomePageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.125rem;
        color: #E8833A;
        background-color: #C3CFD9;
        width: 100%;
        height: 4.2rem;
    }

    h1 {
        font-size: 1.5rem;
        color: #293845;
        margin: 2.5rem 0;
    }

    img {
        width: 10rem;
        margin-bottom: 2rem;
    }

    .catalog {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 23rem;
    }
`;