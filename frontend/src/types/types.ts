import { ReactNode } from "react";

export type TableData = {
  id: number;
  patient_age_category: string;
  reason_for_visit: string;
  sentiment: string;
  visit_type: string;
};

export interface DashboardProps {
  children: ReactNode;
}

export interface FilterContextProps {
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
  setVideoStats: React.Dispatch<
    React.SetStateAction<FilterContextProps["videoStats"]>
  >;
}
