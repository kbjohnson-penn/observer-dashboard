import { Box, VStack } from "@chakra-ui/react";
import { Filter } from "../components/Filter";

const FilterSide = () => {
  const filterOptions = ["value1", "value2", "value3", "value4"];

  return (
    <Box w={"49vw"}>
      <VStack>
        <Filter options={filterOptions} heading={"Cohort Selection"} />
        <Filter options={filterOptions} heading={"Filter by ICD-9 Code"} />
        <Filter options={filterOptions} heading={"Metric (PPA)"} />
      </VStack>
    </Box>
  );
};

export default FilterSide;
