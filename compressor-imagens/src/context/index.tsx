import React, { createContext, useContext, useState } from 'react'


type PropsImageContext = {
    state: any,
    setState: React.Dispatch<React.SetStateAction<any>>
}

const DEFAULT_VALUE = {
    state: {
        file: {},
        compressed: false
    },
    setState: () => { }
}

const ImageContext = createContext<PropsImageContext>(DEFAULT_VALUE)

const ImageContextProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(DEFAULT_VALUE.state)

    return (
        <ImageContext.Provider
            value={{ state, setState }}>
            {children}
        </ImageContext.Provider>
    )
}

export { ImageContextProvider }
export default ImageContext