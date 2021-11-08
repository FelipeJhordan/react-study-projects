import React from 'react'
import { ContainerTitle } from './style'

const Title: React.FC = ({ children }) => {
    return (
        <ContainerTitle>
            <h1>
                {children}
            </h1>
        </ContainerTitle>
    )
}

export {
    Title
}