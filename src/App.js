import React from "react";
import Form from "./components/Form";
import "./index.css";
import Frame from "react-frame-component";
import { ComponentContext } from "./contexts/HandleComponent";
import Result from "./components/Result/ResultForm";
import { useContext } from "react";
import { ResultContext } from "./contexts/ResultContext";
import { AnimatePresence } from "framer-motion";
const App = () => {
  const [isResult,setIsResult] = useContext(ResultContext)
  
  return (
    
          <main className="max-w-screen h-auto ">
            <div className=" flex items-center justify-center overflow-x-hidden h-auto md:h-screen">
              <AnimatePresence>
              {
                isResult ? <Result /> : <Form />
              }
              </AnimatePresence>
              {/* <Form /> */}
              {/* <Result/> */}
            </div>
          </main>
        
  );
};

export default App;
