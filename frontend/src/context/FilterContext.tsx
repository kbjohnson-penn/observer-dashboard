import React, { useState, createContext, useCallback } from "react";
import { DashboardProps, FilterContextProps } from "../types/types";

export const FilterContext = createContext<FilterContextProps | undefined>(
  undefined
);

const initialFilters = {
  visitType: [],
  reasonForVisit: [],
  sentiment: [],
  patientAgeCategory: [],
};

const initialVideoStats = {
  current: 0,
  previous: 0,
};

export const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const [filters, setFilters] = useState<FilterContextProps["filters"]>(initialFilters);
  const [videoStats, setVideoStats] = useState(initialVideoStats);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  return (
    <FilterContext.Provider 
      value={{ filters, setFilters, resetFilters, videoStats, setVideoStats }}
    >
      {children}
    </FilterContext.Provider>
  );
};