import { Center, HStack } from "@chakra-ui/react";
import DataSide from "../layout/DataSide";
import FilterSide from "../layout/FilterSide";

const Dashboard = () => {
  return (
    <Center>
      <HStack>
        <DataSide />
        <FilterSide />
      </HStack>
    </Center>
  );
};

export default Dashboard;
