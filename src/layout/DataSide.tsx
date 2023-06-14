import {
  Box,
  Card,
  Center,
  CircularProgress,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { StatisticsTable } from "../components/StatisticsTable";
import BarChart from "../components/BarChart";
import { chartOptions, chartData } from "../utils/chartConfig";
import "chart.js/auto";

const DataSide = () => {
  const tableData = Array.from({ length: 5 }, (_, i) => {
    return {
      column1: `Item ${i + 1}`,
      column2: Math.floor(Math.random() * 1000).toString(),
    };
  });

  return (
    <Center>
      <VStack spacing={4}>
        <Wrap>
          <BarChart options={chartOptions} data={chartData} />
          <BarChart options={chartOptions} data={chartData} />
          <BarChart options={chartOptions} data={chartData} />
        </Wrap>
        <StatisticsTable data={tableData} />
      </VStack>
    </Center>
  );
};

export default DataSide;
