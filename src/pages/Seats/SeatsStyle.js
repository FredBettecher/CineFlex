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
        margin: 2.5rem 0 0.8rem 0;
        cursor: default;
    }

    h2 {
        font-size: 1.625rem;
        color: #293845;
        margin-left: 0.875rem;
        cursor: default;
    }

    h3 {
        font-size: 1.125rem;
        color: #293845;
        cursor: default;
        margin-bottom: 0.2rem;
    }

    p {
        color: #4E5A65;
        font-size: 0.8125rem;
        cursor: default;
    }

    img {
        border: 0.5rem solid #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        width: 4rem;
    }

    input {
        width: 20.44rem;
        height: 3.2rem;
        margin-bottom: 0.5rem;
        font-size: 1.125rem;
        border: 1px solid #D4D4D4;
        border-radius: 3px;
        padding-left: 1.125rem;
        display: block;

        ::placeholder{
            color: #AFAFAF;
            font-style: italic;
            font-family: "Roboto";
        }
    }

    button {
        margin-top: 2rem;
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

    .seats-box {
        display: flex;
        flex-direction: column;
    }

    .seats {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        width: 22rem;
    }

    .seat {
        text-align: center;
        padding-top: 0.45rem;
        margin: 1rem 0.5rem 0 0;
        color: #000000;
        font-size: 0.69rem;
        cursor: pointer;
    }

    .seat-status {
        display: flex;
        justify-content: space-around;
        margin-top: 1rem;
    }

    .seat-status-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .selected-circle {
        height: 1.625rem;
        width: 1.625rem;
        background-color: #1AAE9E;
        border: 1px solid #0E7D71;
        border-radius: 50%;
    }

    .available-circle {
        height: 1.625rem;
        width: 1.625rem;
        background-color: #C3CFD9;
        border: 1px solid #7B8B99;
        border-radius: 50%;
    }

    .unavailable-circle {
        height: 1.625rem;
        width: 1.625rem;
        background-color: #FBE192;
        border: 1px solid #F7C52B;
        border-radius: 50%;
    }

    .inputs-box {
        display: flex;
        flex-direction: column;
        margin-top: 2.625rem;
    }

    .centralize {
        display: flex;
        justify-content: center;
    }
`;