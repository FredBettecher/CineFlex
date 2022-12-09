import styled from "styled-components";

export const SessionsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

    img {
        border: 0.5rem solid #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        width: 4rem;
    }

    h2 {
        font-size: 1.625rem;
        color: #293845;
        margin-left: 0.875rem;
        cursor: default;
    }

    a {
        text-decoration: none;
        color: #FFFFFF;
    }

    .session {
        display: flex;
        flex-direction: column;
    }

    .date {
        font-size: 1.25rem;
        color: #293845;
        margin-bottom: 1.375rem;
        cursor: default;
    }

    .time-box {
        display: flex;
    }

    .time {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #E8833A;
        border-radius: 3px;
        width: 5.2rem;
        height: 2.7rem;
        margin-right: 0.5rem;
        margin-bottom: 1.44rem;
        cursor: pointer;
    }
`;