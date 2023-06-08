import { SimpleGrid, Box } from "@chakra-ui/react";
import { Filter } from "../components/Filter";

const Dashboard = () => {
  const filterOptions = ["value1", "value2"];

  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box bg="tomato" h="90vh"></Box>
      <Box bg="yellow.200" h="90vh">
        <Filter options={filterOptions} />
        {/* <StatisticsTable data={tableData} /> */}
      </Box>
    </SimpleGrid>
  );
};

export default Dashboard;
