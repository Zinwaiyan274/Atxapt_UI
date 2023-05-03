import { createContext, useState } from "react";

export const ResultFormContext = createContext()

export const ResultFormContextProvider = ({children}) =>{
    const [isForm,setForm] = useState([])
    return(
        <ResultFormContext.Provider value={[isForm,setForm]}>
            {children}
        </ResultFormContext.Provider>
    )
}