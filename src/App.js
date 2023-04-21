import React from "react";
import Form from "./components/Form";
import "./index.css";
import Frame from "react-frame-component";
import { ComponentContext } from "./contexts/HandleComponent";
import Result from "./components/Result/ResultForm";
import { useContext } from "react";
const App = () => {
  const [isResult,setIsResult] = useContext(ComponentContext)
  return (
    
          <main className="w-full h-screen ">
            <div className="flex items-center justify-center h-screen">
              {
                Result ? <Form /> : <Result />
              }
              
            </div>
          </main>
        
  );
};

export default App;
