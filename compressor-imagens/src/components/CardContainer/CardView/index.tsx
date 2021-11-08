import imageCompression from 'browser-image-compression'
import React, { useContext, useEffect } from 'react'
import ImageContext from '../../../context'
import { ImgCard } from '../styles'
import { TipsList, Tips, DivTitleCardView } from './style'
import IconDownload from '../../../assets/download-icon.png'

const CardView = () => {
    const { setState, state } = useContext(ImageContext)

    const handleRemove = (e: any) => {
        e.preventDefault()
        setState({
            compressed: false,
            file: { ...state.file },
        })
    }

    useEffect(() => {
        if (!!state.compressed) {
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }

            if (options.maxSizeMB >= state.file.originalImage?.size / 1024) {
            } else {
                let output

                imageCompression(state.file.originalImage, options).then(x => {
                    output = x

                    const downloadLink = URL.createObjectURL(output);
                    setState({
                        file: {
                            ...state.file,
                            compressedLink: downloadLink
                        },
                        compressed: state.compressed
                    })
                })
            }
        }

    }, [state.compressed])

    return (
        <>
            {
                !!state.compressed ?
                    <>
                        <DivTitleCardView>
                            <h2> Imagem Comprimida </h2>
                            <a
                                href={state.file.compressedLink}
                                download={state.file.outputFileName}>
                                <img src={IconDownload} alt="your pic" />
                            </a>
                        </DivTitleCardView>
                        <a href={state.file.compressedLink}
                            download={state.file.outputFileName}>
                            {!!state.file.originalLink &&
                                <ImgCard src={state.file.originalLink} />}
                        </a>
                        <div>
                            <button onClick={handleRemove}>Cancelar</button>
                        </div>
                    </>
                    :
                    <TipsList>
                        <h2>Como usar?</h2>
                        <Tips>Escolha a imagem</Tips>
                        <Tips>Aperte o botão de Comprimir</Tips>
                        <Tips>Aperte o botão de Baixar!</Tips>
                        <Tips>Pronto!</Tips>
                    </TipsList>
            }
        </>
    )
}

export {
    CardView
}