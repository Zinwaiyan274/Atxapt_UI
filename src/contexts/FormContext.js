import { createContext, useState } from "react";

export const FormDataContext = createContext();

export const FormDataContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    question1: [],
    question2: [],
  });
  return (
    <FormDataContext.Provider value={[formData, setFormData]}>{children}</FormDataContext.Provider>
  );
};
