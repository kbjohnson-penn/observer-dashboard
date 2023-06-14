import React, { useState } from "react";
import { Box, Center, HStack } from "@chakra-ui/react";
import DataSide from "../layout/DataSide";
import FilterSide from "../layout/FilterSide";
import { FilterContext } from "../context/FilterContext";

const Dashboard: React.FC = () => {
  const [filters, setFilters] = useState({
    visitType: "",
    reasonForVisit: "",
    sentiment: "",
    patientAgeCategory: "",
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      <Center>
        <HStack>
          <Box w='3vw' />
          <Box w='60vw'>
            <DataSide />
          </Box>
          <Box w='30vw'>
            <FilterSide  />
          </Box>
          <Box w='3vw' />
        </HStack>
      </Center>
    </FilterContext.Provider>
  );
};

export default Dashboard;
