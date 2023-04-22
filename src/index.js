import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Frame from 'react-frame-component';
import { FormDataContextProvider } from './contexts/FormContext';
import { StepContextProvider } from './contexts/StepContext';
import { ComponentContextProvider } from './contexts/HandleComponent';
import { ResultContextProvider } from './contexts/ResultContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormDataContextProvider>
      <StepContextProvider>
        <ComponentContextProvider>
          <ResultContextProvider>
      <App />
      </ResultContextProvider>
      </ComponentContextProvider>
      </StepContextProvider>
    </FormDataContextProvider>
  </React.StrictMode>
);

