import styled from "styled-components";

export const SuccessStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #247A6B;
        margin-top: 2.5rem;
        text-align: center;
        cursor: default;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #293845;
        margin-top: 2.5rem;
        margin-bottom: 1rem;
        cursor: default;
    }

    p {
        font-size: 1.375rem;
        color: #293845;
        margin-top: 0.8rem;
        cursor: default;
    }

    button {
        margin-top: 5rem;
        margin-bottom: 1.875rem;
        border: 1px transparent;
        border-radius: 3px;
        width: 16rem;
        height: 3rem;
        background-color: #E8833A;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: #FFFFFF;
        font-size: 1.125rem;
    }
`;