import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Card,
  Center,
} from "@chakra-ui/react";

type TableData = {
  column1: string;
  column2: string;
};

type StatisticsTableProps = {
  data: TableData[];
};

export const StatisticsTable = ({ data }: StatisticsTableProps) => {
  return (
    <Center>
      <Card boxShadow={"dark-lg"} rounded={"3xl"} w="75vh">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>TYPES</Th>
              <Th>PATIENTS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row, index) => (
              <Tr key={index}>
                <Td>{row.column1}</Td>
                <Td>{row.column2}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
    </Center>
  );
};
