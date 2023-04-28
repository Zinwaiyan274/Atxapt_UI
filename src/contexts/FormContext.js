import { createContext, useState } from "react";

export const FormDataContext = createContext();

export const FormDataContextProvider = ({children}) =>{
    const [formData,setFormData] = useState({
        question1:[],
        question2:[],
        question3:[],
        question4:[],
        question5:[],
        question6:[],
        question7:[],
        question8:[],
    })
    return (
        <FormDataContext.Provider value={[formData,setFormData]}> 
            {children}
        </FormDataContext.Provider>
    )
}