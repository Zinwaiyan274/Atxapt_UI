import React from "react";
import Form from "./components/Form";
import "./index.css";
import Frame from "react-frame-component";
import { ComponentContext } from "./contexts/HandleComponent";
import Result from "./components/Result/ResultForm";
import { useContext } from "react";
import { ResultContext } from "./contexts/ResultContext";
const App = () => {
  const [isResult,setIsResult] = useContext(ResultContext)
  
  return (
    
          <main className="w-full h-screen ">
            <div className="flex items-center justify-center h-screen">
              {
                isResult ? <Result /> : <Form />
              }
              {/* <Form />
              <Result/> */}
            </div>
          </main>
        
  );
};

export default App;
