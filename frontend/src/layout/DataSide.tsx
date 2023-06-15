import React, { useState, useEffect, useContext } from "react";
import { Box, Center, CircularProgress, Grid, VStack, Wrap } from "@chakra-ui/react";
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
    const { visitType, reasonForVisit, sentiment, patientAgeCategory } = filters;
  
    axios.get(`http://localhost:8000/api/videos?visit_type=${visitType}&reason_for_visit=${reasonForVisit}&sentiment=${sentiment}&patient_age_category=${patientAgeCategory}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filters]);
  

  if (loading) {
    return <CircularProgress isIndeterminate />;
  }

  return (
    <Box>
      <Center>
        <VStack>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <BarChart data={chartData} options={chartOptions} />
            <BarChart data={chartData} options={chartOptions} />
            <BarChart data={chartData} options={chartOptions} />
            <BarChart data={chartData} options={chartOptions} />
          </Grid>
          <StatisticsTable data={tableData} />
        </VStack>
      </Center>
    </Box>
  );
};

export default DataSide;
