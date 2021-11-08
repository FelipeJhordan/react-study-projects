import React from 'react'
import { CardInput } from './CardInput'
import { CardView } from './CardView'
import { CardContainer as CardContainerStyle } from './styles'

interface ITypeCardProp {
    input?: boolean
}

const CardContainer: React.FC<ITypeCardProp> = ({ input }) => {
    return (
        <>
            <CardContainerStyle>
                {
                    !!input ? <CardInput /> : <CardView />
                }
            </CardContainerStyle>
        </>
    )
}

export {
    CardContainer
}