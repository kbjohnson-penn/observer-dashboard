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
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

const DataSide = () => {
  const tableData = Array.from({ length: 5 }, (_, i) => {
    return {
      column1: `Item ${i + 1}`,
      column2: Math.floor(Math.random() * 1000).toString(),
    };
  });

  const numCards = 0;
  const chartOptions = {
    title: {
      display: true,
      text: 'Chart Title',
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'X-Axis Title',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Y-Axis Title',
        },
      },
    },
  };
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: '# of videos',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      }
    ]
  };
  
  return (
    <Center>
      <VStack spacing={4}>
        <Wrap spacing="30px" justify="center">
          {Array.from({ length: numCards }).map((_, i) => (
            <WrapItem key={i}>
              <Card
                display="flex"
                alignItems={"center"}
                justifyContent="center"
                w={"150px"}
                h="150px"
                boxShadow={"2xl"}
                rounded={"2xl"}
                p={4}
              >
                <CircularProgress
                  isIndeterminate
                  color="green.300"
                />
              </Card>
            </WrapItem>
          ))}
        </Wrap>
        <Box>
          <Chart
            options={chartOptions}
            data={chartData}
            type={'bar'}
          />
          <StatisticsTable data={tableData} />
        </Box>
      </VStack>
    </Center>
  );
};

export default DataSide;
