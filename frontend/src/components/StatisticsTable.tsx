import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Card,
  Center,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

type TableData = {
  id: number;
  patient_age_category: string;
  reason_for_visit: string;
  sentiment: string;
  visit_type: string;
};

export const StatisticsTable = ({ data }: { data: TableData[] }) => {
  const bgColor = useColorModeValue("gray.200", "whiteAlpha.100");

  return (
    <Center  mt='2'>
      <Card boxShadow={"dark-lg"} rounded={"3xl"} w="75vh" p={5}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Patient Age Category</Th>
              <Th>Reason For Visit</Th>
              <Th>Sentiment</Th>
              <Th>Visit Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row, index) => (
              <Box as="tr" key={index} bg={index % 2 === 0 ? bgColor : "transparent"}>
                <Td>{row.id}</Td>
                <Td>{row.patient_age_category}</Td>
                <Td>{row.reason_for_visit}</Td>
                <Td>{row.sentiment}</Td>
                <Td>{row.visit_type}</Td>
              </Box>
            ))}
          </Tbody>
        </Table>
      </Card>
    </Center>
  );
};
