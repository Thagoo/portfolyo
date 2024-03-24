"use client";
import { fetchPortfolioData } from "@/lib/data";
import { createContext, useContext, useEffect, useState } from "react";

const PortfolioContext = createContext({});

export const useData = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const userId = "65b3a22c01d900e96c4219ae";
    try {
      const data = await fetchPortfolioData(userId);
      if (data?.user) {
        setData(data.user);
      } else {
        setError(data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PortfolioContext.Provider value={{ loading, error, data, fetchData }}>
      {children}
    </PortfolioContext.Provider>
  );
};
