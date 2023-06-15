import React, { useState, useEffect, useContext } from "react";
import { Box, Center, CircularProgress, Grid, VStack } from "@chakra-ui/react";
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
  const [tableData, setTableData] = useState<TableData[]>([]);

  type TableData = {
    id: number;
    patient_age_category: string;
    reason_for_visit: string;
    sentiment: string;
    visit_type: string;
  };


  useEffect(() => {
    const { visitType, reasonForVisit, sentiment, patientAgeCategory } = filters;
  
    setLoading(true);
    
    axios.get(`http://localhost:8000/api/videos?visit_type=${visitType}&reason_for_visit=${reasonForVisit}&sentiment=${sentiment}&patient_age_category=${patientAgeCategory}`)
      .then((response) => {
        setTableData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
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
          </Grid>
          <StatisticsTable data={tableData} />
        </VStack>
      </Center>
    </Box>
  );
};

export default DataSide;
