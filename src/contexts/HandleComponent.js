import { createContext, useState } from "react";

export const ComponentContext = createContext()

export const ComponentContextProvider = ({children})=>{
    const [isChange,setIsChange] = useState(0)
    const [isResult,setIsResult] = useState(false)
    return (
        <ComponentContext.Provider value={[isChange,setIsChange,isResult,setIsResult]}>
            {children}
        </ComponentContext.Provider>
    )
}