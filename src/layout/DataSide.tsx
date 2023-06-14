import React, { useState, useEffect, useContext } from "react";
import { Box, CircularProgress, VStack, Wrap } from "@chakra-ui/react";
import BarChart from "../components/BarChart";
import { chartOptions, chartData as data } from "../utils/chartConfig";
import "chart.js/auto";
import axios from "axios"; // or use another data-fetching library
import { FilterContext } from "../context/FilterContext";
import { StatisticsTable } from "../components/StatisticsTable";

const DataSide: React.FC = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("DataSide must be used within a FilterProvider");
  }
  const { filters } = context;
  const [chartData, setChartData] = useState<any>(data); 
  const [loading, setLoading] = useState(false);

  const tableData = Array.from({ length: 5 }, (_, i) => {
    return {
      column1: `Item ${i + 1}`,
      column2: Math.floor(Math.random() * 1000).toString(),
    };
  });

  useEffect(() => {
    console.log("FILTERS CHANGED");
  }, [filters]);

  if (loading) {
    return <CircularProgress isIndeterminate />;
  }

  return (
    <Box w={"49vw"}>
      <VStack>
        <Wrap spacing={3}>
          <BarChart data={chartData} options={chartOptions} />
          <BarChart data={chartData} options={chartOptions} />
          <BarChart data={chartData} options={chartOptions} />
          <BarChart data={chartData} options={chartOptions} />
        </Wrap>
        <StatisticsTable data={tableData} />
      </VStack>
    </Box>
  );
};

export default DataSide;
