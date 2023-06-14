import React from "react";

interface FilterState {
  cohortSelection: string;
  icd9Code: string;
  metricPPA: string;
}

interface FilterContextProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export const FilterContext = React.createContext<FilterContextProps | undefined>(undefined);
