import React, { ChangeEvent, useContext } from 'react'
import ImageContext from '../../../context'
import { ImgCard } from '../styles'


const CardInput = () => {
    const { setState, state } = useContext(ImageContext)

    const handle = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        const file: File = (target.files as FileList)[0]
        setState({
            file: {
                originalLink: URL.createObjectURL(file),
                originalImage: file,
                outputFileName: file.name,
                uploadImage: true
            }
        })
    }
    return (
        <>
            <div>
                <input type="file" id="file" accept="image/*" onChange={handle} />
            </div>
            <label htmlFor="file">
                {!!state.file.originalLink &&
                    <ImgCard src={state.file.originalLink} />}
            </label>
        </>
    )
}

export {
    CardInput
}