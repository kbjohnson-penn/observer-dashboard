import React, { useState, createContext, ReactNode, useCallback } from "react";

interface FilterContextProps {
  filters: {
    visitType: string[];
    reasonForVisit: string[];
    sentiment: string[];
    patientAgeCategory: string[];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<FilterContextProps["filters"]>
  >;
  resetFilters: any;
  videoStats: {
    current: number;
    previous: number;
  };
  setVideoStats: React.Dispatch<React.SetStateAction<FilterContextProps["videoStats"]>>;
}

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

interface DashboardProps {
  children: ReactNode;
}

interface FilterContextProps {
  filters: {
    visitType: string[];
    reasonForVisit: string[];
    sentiment: string[];
    patientAgeCategory: string[];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<FilterContextProps["filters"]>
  >;
  resetFilters: any;
  videoStats: {
    current: number;
    previous: number;
  };
  setVideoStats: React.Dispatch<React.SetStateAction<FilterContextProps["videoStats"]>>;
}

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