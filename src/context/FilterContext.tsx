import React from "react";

interface FilterState {
  cohortSelection: string;
  icd9Code: string;
  metricPPA: string;
}

export interface FilterContextProps {
  filters: {
    visitType: string;
    reasonForVisit: string;
    sentiment: string;
    patientAgeCategory: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<FilterContextProps["filters"]>>;
}

export const FilterContext = React.createContext<FilterContextProps | undefined>(undefined);
