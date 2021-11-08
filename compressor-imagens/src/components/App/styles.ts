import styled from 'styled-components'

const AppDiv = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100%;
    padding: 5rem 3rem;
    
    button {
        background-color: #cde6ffcc;
        box-shadow: 1px #cde6ffaa;
        border: 2px solid #111144;
        outline: 0;
        cursor: pointer;
        padding: 0.9rem 0.5rem;
        border-radius: 4px;
        letter-spacing: 1.2px;
        font-family: "Roboto";
        font-weight: 500;
        &:hover {
            background-color: #111144;
            color: white;
        } 
    }
`

export {
    AppDiv
}