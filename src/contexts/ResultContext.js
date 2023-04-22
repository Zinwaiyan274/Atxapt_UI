import { createContext, useState } from "react";

export const ResultContext= createContext()

export const ResultContextProvider = ({children})=>{
    const [isResult,setIsResult] = useState(false)
    return (
        <ResultContext.Provider value={[isResult,setIsResult]}>
            {children}
        </ResultContext.Provider>
    )
}