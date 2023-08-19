import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Center,
  CircularProgress,
  VStack,
  Wrap,
  WrapItem,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  HStack,
} from "@chakra-ui/react";
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
  const { filters, resetFilters } = context;
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState<TableData[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialChartData: ChartData = {
    visitType: { labels: [], datasets: [] },
    reasonForVisit: { labels: [], datasets: [] },
    sentiment: { labels: [], datasets: [] },
    patientAgeCategory: { labels: [], datasets: [] },
  };

  const [chartData, setChartData] = useState<ChartData>(initialChartData);

  const handleReset = () => {
    resetFilters();
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(tableData);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    let exportFileDefaultName = "data.json";
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

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
    const { visitType, reasonForVisit, sentiment, patientAgeCategory } = filters;

    setLoading(true);

    let apiUrl = "http://localhost:8000/api/videos";
    let queryParams = [];
    if (visitType.length) queryParams.push(`visit_type=${visitType.join(",")}`);
    if (reasonForVisit.length) queryParams.push(`reason_for_visit=${reasonForVisit.join(",")}`);
    if (sentiment.length) queryParams.push(`sentiment=${sentiment.join(",")}`);
    if (patientAgeCategory.length) queryParams.push(`patient_age_category=${patientAgeCategory.join(",")}`);
    if (queryParams.length) apiUrl += "?" + queryParams.join("&");


    axios
      .get(apiUrl)
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
        <VStack spacing={2}>
          <Wrap justify="center" spacing={4}>
            {chartData.visitType && (
              <WrapItem>
                <Box width={"350px"} height={"250px"}>
                  <BarChart
                    data={chartData.visitType}
                    options={chartOptions("Visit Type")}
                  />
                </Box>
              </WrapItem>
            )}
            {chartData.reasonForVisit && (
              <WrapItem>
                <Box width={"350px"} height={"250px"}>
                  <BarChart
                    data={chartData.reasonForVisit}
                    options={chartOptions("Reason For Visit")}
                  />
                </Box>
              </WrapItem>
            )}
            {chartData.sentiment && (
              <WrapItem>
                <Box width={"350px"} height={"250px"}>
                  <BarChart
                    data={chartData.sentiment}
                    options={chartOptions("Sentiment")}
                  />
                </Box>
              </WrapItem>
            )}
            {chartData.patientAgeCategory && (
              <WrapItem>
                <Box width={"350px"} height={"250px"}>
                  <BarChart
                    data={chartData.patientAgeCategory}
                    options={chartOptions("Patient Age Category")}
                  />
                </Box>
              </WrapItem>
            )}

          </Wrap>
          <HStack>
            <Button rounded={'3xl'} boxShadow='dark-lg' onClick={handleReset}>Reset Filters</Button>
            <Button rounded={'3xl'} boxShadow='dark-lg' onClick={onOpen}>Show Table</Button>
            <Button rounded={'3xl'} boxShadow='dark-lg' onClick={handleExportJSON}>Export JSON</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent minW='60vw'>
                <ModalHeader>Table</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <StatisticsTable data={tableData} />
                </ModalBody>
              </ModalContent>
            </Modal>
          </HStack>
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
