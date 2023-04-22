import { createContext, useState } from "react";

export const ComponentContext = createContext()

export const ComponentContextProvider = ({children})=>{
    const [isChange,setIsChange] = useState(0)
    return (
        <ComponentContext.Provider value={[isChange,setIsChange]}>
            {children}
        </ComponentContext.Provider>
    )
}