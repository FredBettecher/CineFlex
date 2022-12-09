import styled from "styled-components";

export const SeatsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 7rem;

    footer {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 7rem;
        background-color: #DFE6ED;
        border-top: 1px solid #9EADBA;
    }

    h1 {
            font-size: 1.5rem;
            color: #293845;
            margin: 2.5rem 0;
            cursor: default;
    }

    h2 {
        font-size: 1.625rem;
        color: #293845;
        margin-left: 0.875rem;
        cursor: default;
    }

    p {
        color: #4E5A65;
        font-size: 0.8125rem;
    }

    img {
        border: 0.5rem solid #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        width: 4rem;
    }

    .seats-box {
        display: flex;
        flex-direction: column;
    }

    .seats {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 18.57rem;
        height: 20rem;
    }

    .seat {
        text-align: center;
        height: 1.625rem;
        width: 1.625rem;
        background-color: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 50%;
        display: inline-block;
        padding-top: 0.3rem;
    }
`;