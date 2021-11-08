import styled from "styled-components"

const TipsList = styled.ol`
    list-style: decimal;

    h2 {
        font-size: 1.3em;
        font-family: "Roboto";
        margin-bottom: 0.7rem;
    }
`

const Tips = styled.li`
    font-family: Verdana;
    margin-bottom: 0.2rem;
`

const DivTitleCardView = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    h2 {
        font-family: "Roboto";
        color: #555;
    }

    a {
        align-self: flex-end;
    }
    a img {
        position: absolute;
        top: -10px;
        right: 0;
    }
`

export { TipsList, Tips, DivTitleCardView }