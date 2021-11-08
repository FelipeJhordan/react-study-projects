import React, { useContext } from 'react'
import { ContentContainer } from './styles'
import { Title } from '../Title'
import ImageContext from '../../context'

const Content = () => {
    const { setState, state } = useContext(ImageContext)

    const onCompress = (e: any) => {
        e.preventDefault()
        if (Object.keys(state.file).length !== 0) {
            setState(
                { ...state, compressed: true }
            )
        }
    }

    return (
        <ContentContainer>
            <Title>
                Compressor de imagens
            </Title>
            <button onClick={onCompress}>Comprimir </button>
        </ContentContainer>
    )
}

export {
    Content
}