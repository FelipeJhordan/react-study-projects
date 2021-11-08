import styled from "styled-components";

const CardContainer = styled.div`
    width: 33%;
    background-color: #ffffffcc;
    margin: 0 10px;
    padding: 2rem 5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    input {
        background-color: #fff;
        padding: 6px;
        border-radius: 8px;
        width: 95%;
        background-color: #111144;
        color: white;
    }

    input:hover {
        border: #c322fc 1px;
    }

    div a img {
        width: 2rem;
        height: 2rem;
        padding: 0;
    }

    button {
        padding: 0.5rem 1rem;
        margin-top: 0.2rem;
        right: 6rem;
        margin: 0.2rem auto 0.2rem auto;
    }
`

const ImgCard = styled.img`
    margin-top: 1.5rem;
    cursor: pointer;
    width: 100%;
`

export {
    CardContainer,
    ImgCard
}