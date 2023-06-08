import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

type TableData = {
  column1: string;
  column2: string;
};

type StatisticsTableProps = {
  data: TableData[];
};

export const StatisticsTable = ({ data }: StatisticsTableProps) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
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
  );
};
