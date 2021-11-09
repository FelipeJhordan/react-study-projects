import React, { createContext, ReactFragment, useState } from 'react'
import ICalculadora from '../intefaces/ICalculadora'

type PropsCalcContext = {
    state: ICalculadora,
    setState: React.Dispatch<React.SetStateAction<ICalculadora>>
}

const DEFAULT_VALUE: PropsCalcContext = {
    state: {
        history: [],
        operation: "",
        result: 0
    },
    setState: () => { }
}

const CalculadoraContext = createContext<PropsCalcContext>(DEFAULT_VALUE)

const CalcContextProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(DEFAULT_VALUE.state)
    return (
        <CalculadoraContext.Provider
            value={{ state, setState }}>
            {children}
        </CalculadoraContext.Provider>
    )
}

export {
    CalculadoraContext,
    CalcContextProvider
}