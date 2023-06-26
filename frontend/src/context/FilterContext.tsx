import React, { useState, createContext, ReactNode } from "react";

interface FilterContextProps {
  filters: {
    visitType: string;
    reasonForVisit: string;
    sentiment: string;
    patientAgeCategory: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<FilterContextProps["filters"]>
  >;
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
  visitType: '',
  reasonForVisit: '',
  sentiment: '',
  patientAgeCategory: '',
};

const initialVideoStats = {
  current: 0,
  previous: 0,
};

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState(initialFilters);
  const [videoStats, setVideoStats] = useState(initialVideoStats);

  return (
    <FilterContext.Provider value={{ filters, setFilters, videoStats, setVideoStats }}>
      {children}
    </FilterContext.Provider>
  );
};
