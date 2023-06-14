import React, { useContext } from "react";
import { Box, VStack } from "@chakra-ui/react";
import { Filter } from "../components/Filter";
import { FilterContext } from "../context/FilterContext";

const FilterSide: React.FC = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("FilterSide must be used within a FilterProvider");
  }
  const { filters, setFilters } = context;
  const cohortSelectionOptions = ["cohort1", "cohort2", "cohort3", "cohort4"];
  const icd9CodeOptions = ["code1", "code2", "code3", "code4"];
  const metricPPAOptions = ["metric1", "metric2", "metric3", "metric4"];

  const handleFilterChange = (
    filterName: keyof typeof filters,
    value: string
  ) => {
    setFilters((prevState: typeof filters) => ({ ...prevState, [filterName]: value }));
  };

  return (
    <Box w={"49vw"}>
      <VStack>
        <Filter
          options={cohortSelectionOptions}
          heading={"Cohort Selection"}
          onChange={(value) => handleFilterChange("cohortSelection", value)}
        />
        <Filter
          options={icd9CodeOptions}
          heading={"Filter by ICD-9 Code"}
          onChange={(value) => handleFilterChange("icd9Code", value)}
        />
        <Filter
          options={metricPPAOptions}
          heading={"Metric (PPA)"}
          onChange={(value) => handleFilterChange("metricPPA", value)}
        />
      </VStack>
    </Box>
  );
};

export default FilterSide;
