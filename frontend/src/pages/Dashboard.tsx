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

  const initialVideoStats = {
    current: 0,
    previous: 0,
  };

  const [videoStats, setVideoStats] = useState(initialVideoStats);

  return (
    <FilterContext.Provider value={{ filters, setFilters, videoStats, setVideoStats }}>
      <Center>
        <HStack>
          <Box w='1vw' />
          <Box w='60vw'>
            <DataSide />
          </Box>
          <Box w='30vw'>
            <FilterSide  />
          </Box>
          <Box w='1vw' />
        </HStack>
      </Center>
    </FilterContext.Provider>
  );
};

export default Dashboard;
