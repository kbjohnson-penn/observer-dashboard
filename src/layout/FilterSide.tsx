import React, { useContext } from "react";
import { Box, VStack, Wrap } from "@chakra-ui/react";
import { Filter } from "../components/Filter";
import { FilterContext } from "../context/FilterContext";

const FilterSide: React.FC = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("FilterSide must be used within a FilterProvider");
  }
  const { filters, setFilters } = context;

  const visitTypeOptions = ["All", "Video+Audio", "Audio", "Transcript"];
  const reasonForVisitOptions = ["Primary Care", "Genetics Consult", "Other"];
  const sentimentOptions = ["Positive", "Neutral", "Negative"];
  const patientAgeCategoryOptions = ["Child", "Adolescent", "Adult", "Senior"];

  const handleFilterChange = (
    filterName: keyof typeof filters,
    value: string
  ) => {
    setFilters((prevState: typeof filters) => ({ ...prevState, [filterName]: value }));
  };

  return (
    <Box>
      <Wrap spacingY={'5'} spacingX={'0'}>
        <Filter
          options={visitTypeOptions}
          heading={"Visit Type"}
          onChange={(value) => handleFilterChange("visitType", value)}
        />
        <Filter
          options={reasonForVisitOptions}
          heading={"Reason for Visit"}
          onChange={(value) => handleFilterChange("reasonForVisit", value)}
        />
        <Filter
          options={sentimentOptions}
          heading={"Sentiment"}
          onChange={(value) => handleFilterChange("sentiment", value)}
        />
        <Filter
          options={patientAgeCategoryOptions}
          heading={"Patient Age Category"}
          onChange={(value) => handleFilterChange("patientAgeCategory", value)}
        />
      </Wrap>
    </Box>
  );
};

export default FilterSide;
