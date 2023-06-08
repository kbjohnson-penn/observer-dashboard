import {
  Card,
  Center,
  CircularProgress,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { StatisticsTable } from "../components/StatisticsTable";

const DataSide = () => {
  const tableData = Array.from({ length: 5 }, (_, i) => {
    return {
      column1: `Item ${i + 1}`,
      column2: Math.floor(Math.random() * 1000).toString(),
    };
  });

  const numCards = 6;

  return (
    <Center>
      <VStack>
        <Wrap spacing="30px" align="center" w={"49vw"}>
          {Array.from({ length: numCards }).map((_, i) => (
            <WrapItem key={i}>
              <Card alignItems={"center"} w={"25vh"} h="25vh" boxShadow={"2xl"} rounded={'2xl'}>
                <Center>
                  <CircularProgress
                    mt="10vh"
                    isIndeterminate
                    color="green.300"
                  />
                </Center>
              </Card>
            </WrapItem>
          ))}
        </Wrap>
        <Center>
          <StatisticsTable data={tableData} />
        </Center>
      </VStack>
    </Center>
  );
};

export default DataSide;
