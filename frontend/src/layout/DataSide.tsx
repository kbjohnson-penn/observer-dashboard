import React, { useState, useEffect, useContext } from "react";
import { Box, Center, CircularProgress, VStack } from "@chakra-ui/react";
import { ChartData as ChartJsData } from "chart.js";
import BarChart from "../components/BarChart";
import "chart.js/auto";
import axios from "axios";
import { FilterContext } from "../context/FilterContext";
import { StatisticsTable } from "../components/StatisticsTable";

const DataSide: React.FC = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("DataSide must be used within a FilterProvider");
  }
  const { filters } = context;
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState<TableData[]>([]);

  const initialChartData: ChartData = {
    visitType: { labels: [], datasets: [] },
    reasonForVisit: { labels: [], datasets: [] },
    sentiment: { labels: [], datasets: [] },
    patientAgeCategory: { labels: [], datasets: [] },
  };

  const [chartData, setChartData] = useState<ChartData>(initialChartData);

  interface ChartData {
    visitType: ChartJsData<"bar", number[], string>;
    reasonForVisit: ChartJsData<"bar", number[], string>;
    sentiment: ChartJsData<"bar", number[], string>;
    patientAgeCategory: ChartJsData<"bar", number[], string>;
  }

  type TableData = {
    id: number;
    patient_age_category: string;
    reason_for_visit: string;
    sentiment: string;
    visit_type: string;
  };

  useEffect(() => {
    const { visitType, reasonForVisit, sentiment, patientAgeCategory } =
      filters;

    setLoading(true);

    axios
      .get(
        `http://localhost:8000/api/videos?visit_type=${visitType}&reason_for_visit=${reasonForVisit}&sentiment=${sentiment}&patient_age_category=${patientAgeCategory}`
      )
      .then((response) => {
        setTableData(response.data);

        const { setVideoStats, videoStats } = context;
        setVideoStats({
          current: response.data.length,
          previous: videoStats.current,
        });

        const processedData = processChartData(response.data);
        setChartData(processedData);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [filters]);

  const processChartData = (data: TableData[]) => {
    let initialChartData = {
      visitType: { VA: 0, A: 0, T: 0, ETC: 0 } as { [key: string]: number },
      reasonForVisit: { PC: 0, GC: 0, O: 0 } as { [key: string]: number },
      sentiment: { P: 0, N: 0, NE: 0 } as { [key: string]: number },
      patientAgeCategory: { C: 0, A: 0, AD: 0, S: 0 } as {
        [key: string]: number;
      },
    };

    data.forEach((item: TableData) => {
      initialChartData.visitType[item.visit_type] += 1;
      initialChartData.reasonForVisit[item.reason_for_visit] += 1;
      initialChartData.sentiment[item.sentiment] += 1;
      initialChartData.patientAgeCategory[item.patient_age_category] += 1;
    });

    let finalChartData = {
      visitType: convertToChartData(initialChartData.visitType),
      reasonForVisit: convertToChartData(initialChartData.reasonForVisit),
      sentiment: convertToChartData(initialChartData.sentiment),
      patientAgeCategory: convertToChartData(
        initialChartData.patientAgeCategory
      ),
    };

    return finalChartData;
  };

  const convertToChartData = (data: { [key: string]: number }) => {
    return {
      labels: Object.keys(data),
      datasets: [
        {
          label: "Statistics",
          data: Object.values(data),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  };

  if (loading) {
    return <CircularProgress isIndeterminate />;
  }

  return (
    <Box>
      <Center>
        <VStack>
          {chartData.visitType && (
            <BarChart
              data={chartData.visitType}
              options={chartOptions("Visit Type")}
            />
          )}
          {chartData.reasonForVisit && (
            <BarChart
              data={chartData.reasonForVisit}
              options={chartOptions("Reason For Visit")}
            />
          )}
          {chartData.sentiment && (
            <BarChart
              data={chartData.sentiment}
              options={chartOptions("Sentiment")}
            />
          )}
          {chartData.patientAgeCategory && (
            <BarChart
              data={chartData.patientAgeCategory}
              options={chartOptions("Patient Age Category")}
            />
          )}
          <StatisticsTable data={tableData} />
        </VStack>
      </Center>
    </Box>
  );
};

export default DataSide;

const chartOptions = (title: string) => {
  return {
    title: {
      display: true,
      text: "Statistics for " + title,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: title,
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Videos",
        },
      },
    },
  };
};
