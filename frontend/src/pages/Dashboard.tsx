import React, { useCallback, useState } from "react";
import { Box, Center, HStack } from "@chakra-ui/react";
import DataSide from "../layout/DataSide";
import FilterSide from "../layout/FilterSide";
import { FilterContext } from "../context/FilterContext";
import { FilterContextProps } from "../types/types";

const Dashboard: React.FC = () => {
  const initialFilters: FilterContextProps["filters"] = {
    visitType: [],
    reasonForVisit: [],
    sentiment: [],
    patientAgeCategory: [],
  };

  const [filters, setFilters] = useState<FilterContextProps["filters"]>(initialFilters);

  const initialVideoStats = {
    current: 0,
    previous: 0,
  };

  const [videoStats, setVideoStats] = useState(initialVideoStats);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  return (
    <FilterContext.Provider
      value={{ filters, setFilters, videoStats, setVideoStats, resetFilters }}
    >
      <Center>
        <HStack>
          <Box w="30vw">
            <FilterSide />
          </Box>
          <Box w="60vw">
            <DataSide />
          </Box>
        </HStack>
      </Center>
    </FilterContext.Provider>
  );
};

export default Dashboard;
