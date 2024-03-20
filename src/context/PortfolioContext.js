"use client";
import { fetchPortfolioData } from "@/lib/data";
import { createContext, useContext, useEffect, useState } from "react";

const PortfolioContext = createContext({});

export const useData = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (userId) => {
    try {
      const data = await fetchPortfolioData(userId);
      setData(data?.user);
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
