import React, { useState } from 'react';
import { Center, HStack } from "@chakra-ui/react";
import DataSide from "../layout/DataSide";
import FilterSide from "../layout/FilterSide";
import { FilterContext } from "../context/FilterContext";

const Dashboard: React.FC = () => {
  const [filters, setFilters] = useState({
    cohortSelection: '',
    icd9Code: '',
    metricPPA: '',
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      <Center>
        <HStack>
          <DataSide />
          <FilterSide />
        </HStack>
      </Center>
    </FilterContext.Provider>
  );
};

export default Dashboard;
