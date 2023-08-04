import { createContext, useState, useEffect } from "react";

export const ResultFormContext = createContext();

export const ResultFormContextProvider = ({ children }) => {
  const [isForm, setForm] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMockData = () => {
    setTimeout(() => {
      if (!isForm || isForm.length === 0) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    }, 4000); // Simulating 2 seconds of loading time
  };

  useEffect(() => {
    fetchMockData();
  }, [isForm]);

  const handleAPICall = (formData) => {
    setLoading(true);
    fetch("https://server.atxapt.com/api/v2/recommender", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      mode: "cors",
    })
      .then((response) => response.json())
      .then((result) => {
        setForm(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        setLoading(false);
      });
  };

  return (
    <ResultFormContext.Provider value={{ isForm, loading, handleAPICall }}>
      {children}
    </ResultFormContext.Provider>
  );
};
